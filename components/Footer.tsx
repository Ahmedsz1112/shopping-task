export default function Footer() {
  return (
    <footer className="bg-blue-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center text-sm text-gray-600">
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Shopping</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

