import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Business Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The business subdomain you're looking for doesn't exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
