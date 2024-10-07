import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to SaaS Founder Hub</h1>
      <p className="text-xl mb-4">
        Your one-stop resource for SaaS founders and entrepreneurs.
      </p>
      <Link href="/tools">
        <span className="text-blue-600 hover:underline">
          Explore SaaS Tools
        </span>
      </Link>
    </div>
  );
};

export default HomePage;
