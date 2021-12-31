import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 shadow w-full h-20">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        {router.pathname.includes("/movie") ? (
          <Link href={`/`}>
            <a className="block bg-red-600 px-3 py-1 rounded-sm text-white font-semibold">
              Back
            </a>
          </Link>
        ) : (
          <Image src="/vercel-light.svg" alt="logo" width={72} height={16} />
        )}
      </div>
      <ul className="flex flex-row gap-3 text-white">
        <li>
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/my-list">
            <a className="text-white">My List</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
