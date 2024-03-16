import Link from "next/link";

export default function Button({link, label}) {
    return(
        <div className="w-full h-[60px] py-[5px] px-[.625rem] my-[5px] bg-[#3434FF] hover:bg-[#2C23D2] rounded-[5px] flex justify-center items-center">
            <Link href={link}>
                <a target='_blank' className="text-[white] text-[1.5rem]">
                    {label}
                </a>
            </Link>
        </div>
    )
}