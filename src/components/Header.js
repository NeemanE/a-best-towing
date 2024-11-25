// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold">A Best Towing Services</h1>
        <nav className="flex space-x-6">
          <Link href="#services" className="hover:text-yellow-500">
            Services
          </Link>
          <Link href="#about" className="hover:text-yellow-500">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
