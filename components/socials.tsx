import {
  RiInstagramLine,
  RiTwitterXLine,
  RiFacebookFill,
} from "react-icons/ri";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: RiFacebookFill,
  },
  {
    name: "TwitterX",
    href: "https://www.x.com/",
    icon: RiTwitterXLine,
  },
];

export const Socials = ({ containerStyles }: { containerStyles?: string }) => {
  return (
    <ul className={containerStyles}>
      {socials.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <Link href={href}>
            <Icon size={24} aria-label={`${name} icon`} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
