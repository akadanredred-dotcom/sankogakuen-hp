import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
    return (
        <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gray-900 text-white">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center brightness-50"
                    sizes="100vw"
                />
            </div>

            {/* Content Container (Centered) */}
            <div className="relative z-10 max-w-4xl px-6 text-center">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    {title}
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl/relaxed">
                    {subtitle}
                </p>
            </div>

            {/* Optional: Scroll Down Indicator Arrow */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
                <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7-7-7m14-6l-7 7-7-7"></path>
                </svg>
            </div>
        </section>
    );
}
