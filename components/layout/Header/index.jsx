import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { showDrawer, showLoginWindow, showSignupWindow } from 'store/slices/utilSlice';

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isOpen, open] = useState(false);

    return (
        <div className="w-full flex justify-center px-[1.5rem] sm:px-[3rem] xl:px-[140px] 2xl:px-[215px] pt-[1.875rem] drop-shadow-xl">
            <div className='relative grow flex justify-between items-center px-[1.5rem] w-full'>
                <div className='flex items-center'>
                    <button className='flex justify-center items-center transition-all duration-300 z-10'
                        onClick={() => {
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
                <div className="hidden justify-center items-center hidden lg:flex text-[1.125rem] leading-[26px] font-medium text-[#A7ADB4]">
                    <button className="mx-[1rem] rounded-full bg-[#ffffff0c] py-[.625rem] px-[1.5rem]">
                        <span className='text-[#B9F70A]'> Trading Arena </span> +
                    </button>
                    <button className="py-[.625rem] px-[1rem]">
                        <span className='text-white'> ZVaults </span> +
                    </button>
                    <button className="py-[.625rem] px-[1rem]">
                        <span className='text-white'> Zort Lite </span> +
                    </button>
                    <button className="py-[.625rem] px-[1rem]">
                        <span className='text-white'> Company </span> +
                    </button>
                </div>
                <div className='flex justify-end items-center relative z-10'>
                    <div className="hidden md:flex h-[3.125rem] items-center mr-[.625rem]">
                        <button className='rounded-full border-[2px] px-[1.25rem] py-[0.6125rem] text-white mr-[0.75rem] border-gradient w-[150px] h-[50px]'
                            onClick={() => {dispatch(showLoginWindow())}}
                        >
                            Login
                        </button>
                        <button className='rounded-full border-[2px] px-[1.25rem] py-[0.6125rem] text-[#C0F821] border-[#C0F821] w-[150px] h-[50px]'
                            onClick={() => {dispatch(showSignupWindow())}}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className='flex lg:hidden ml-[2rem] justify-center items-center relative'>
                        <button onClick={(e) => { dispatch(showDrawer())}}>
                            <Image alt="open" width={28} height={19} src="/images/header/bars.png" />
                        </button>

                    </div>
                </div>
            </div>
            
        </div>
    )
}