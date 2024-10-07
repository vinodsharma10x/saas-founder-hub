import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 SaaS Founder Hub. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          {/* Add more footer links as needed */}
        </ul>
      </div>
    </footer>
  );
}
