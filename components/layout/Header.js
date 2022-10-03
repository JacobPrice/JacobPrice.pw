import Link from "next/Link";

export default function Header() {
  return (
    <header className="text-white bg-transparent-50 sticky transition-shadow z-10">
      <div className="h-2 bg-gradient-to-r from-teal-50 to-teal-300"></div>
      <nav className="layout flex py-4 layout justify-between">
        <ul className="space-x-3 flex items-center text-base">
          <li>
            <Link href="/">
              <a className="transition-colors hover:text-teal-400 px-1 font-medium">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="transition-colors hover:text-teal-400 px-1 font-medium">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="transition-colors hover:text-teal-400 px-1 font-medium">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="transition-colors hover:text-teal-400 px-1 font-medium">
                About
              </a>
            </Link>
          </li>
        </ul>
        <div className="bg-gradient-to-tr from-teal-100 to-teal-500 transition-colors h-8 w-8 rounded-full block text-center">
          <span className="relative leading-4 top-1  text-teal-900">JP</span>
        </div>
      </nav>
    </header>
  );
}
