import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        sanchezyspace Next.js Template
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        This is a template for Next.js (App Router) + TypeScript + Tailwind CSS
      </p>
      <p className="text-lg text-gray-600">
        We welcome contributions! Please visit our GitHub repository to
        contribute:{' '}
        <Link
          href="https://github.com/sanchezyspace/next-template"
          className="text-blue-600 hover:text-blue-300 transition duration-100 ease-in-out"
        >
          GitHub Repository
        </Link>
      </p>
    </div>
  );
}
