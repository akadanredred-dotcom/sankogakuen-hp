export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} 赤団HP. All rights reserved.</p>
      </div>
    </footer>
  );
}