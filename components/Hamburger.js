import Link from 'next/link';
import { useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <nav className="w-full bg-gray-600 shadow">
        <div className="px-4 justify-between mx-auto md:items-center md:flex md:px-8">
          <div className="flex items-center py-3 md:py-5">
            <Link href="/">
              <div className="flex items-center">
                
                <Image src='/logo.png' alt='Logo' width={450} height={100} className="rounded-3xl" />
              
              </div>
            </Link>
            <button className="md:hidden" onClick={toggleNavbar}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {navbar ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className={`md:flex ${navbar ? 'block' : 'hidden'} md:w-auto`}>
            <Link href="/">
              <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
                Home
              </div>
            </Link>
            <Link href="/movies">
              <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
                Movies
              </div>
            </Link>
            <Link href="/tvshows">
              <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
                TV Shows
              </div>
            </Link>
            <Link href="/adult">
              <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
                Adult
              </div>
            </Link>
            <Link href="/contact">
              <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
