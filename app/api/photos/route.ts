import { NextResponse, NextRequest } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cursor = searchParams.get("cursor") || undefined;

  try {
    const response = await cloudinary.search
      // 1. Removed "NOT format:heic" so HEIC files are included
      .expression("resource_type:image")
      .sort_by("created_at", "desc")
      .max_results(40)
      .next_cursor(cursor)
      .execute();

    // 2. Map through resources and apply format auto transformation
    const urls = response.resources.map((res: any) => {
      // If it's a HEIC, we use Cloudinary's URL generator to force auto-formatting
      // This converts it to WebP/AVIF dynamically for Chrome users.
      return cloudinary.url(res.public_id, {
        secure: true,
        fetch_format: "auto",
        quality: "auto", // Optional: optimizes file size too!
      });
    });

    return NextResponse.json({
      photos: urls,
      nextCursor: response.next_cursor || null,
    });
  } catch (error) {
    console.error("Cloudinary Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch images from Cloudinary" },
      { status: 500 },
    );
  }
}
