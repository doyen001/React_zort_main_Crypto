import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    return (
        <div className={"z-30 w-full flex justify-center px-[1.5rem] sm:px-[3rem] xl:px-[140px] 2xl:px-[215px] py-[.625rem] drop-shadow-xl"}>
            <div className='relative grow flex justify-between items-start px-[1.5rem] w-full'>
                <div className='flex items-center'>
                    <button className='flex justify-center items-center transition-all duration-300 z-10'
                        onClick={()=> {
                            router.push("https://zort.com/")
                        }}
                    >
                        <Image
                            src='/images/logo.png'
                            alt='ThinkingMind'
                            width={90}
                            height={37}
                        />
                    </button>
                </div>
                {/* <Navbar className="absolute w-full flex justify-center items-center hidden lg:flex" /> */}
                 
                <div className="grow flex justify-center items-start hidden lg:flex text-[1.125rem] leading-[26px] font-medium text-[#A7ADB4] px-[60px]">
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> Trading Arena </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> About </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> How It Works </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> Reviews </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> ZVaults </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> About </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> How It Works </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> Reviews </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> Zort lite </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> Technology </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> Security </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> Zort Coin  </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> Comapny </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> About Us </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> Support </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> FAQ&apos;s </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> Comapny </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> Terms of Service </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px]'> Privacy Policy </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.75rem]'> Get the app </p>
                        <button className='rounded-full w-[150px] h-[3.125rem] border-[2px] px-[1.25rem] py-[0.6125rem] text-white mr-[0.75rem] border-gradient mb-[.75rem]'>
                            Login
                        </button>
                        <button className='rounded-full w-[150px] h-[3.125rem] border-[2px] px-[1.25rem] py-[0.6125rem] text-[#C0F821] border-[#C0F821]'>
                            Sign Up
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}