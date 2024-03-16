import Link from "next/link";

export default function NavItem({link, target, label}) {
    return(
        <Link href={link}>
            <a target={target}
                className="mx-[1.875rem] text-[1.125rem] leading-[1.125rem] font-medium font-ibm text-white">
                { label }
            </a>
        </Link>
    );
};