import Link from "next/link";

const links = [
  {
    path: "/",
    pathname: "Home",
  },
  {
    path: "/",
    pathname: "Find hotel",
  },
  {
    path: "/",
    pathname: "About us",
  },
  {
    path: "/",
    pathname: "Contact us",
  },
];

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
}

export const Nav = ({ containerStyles, listStyles }: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map(({ path, pathname }) => (
          <li key={pathname}>
            <Link href={path} className="capitalize">
              {pathname}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
