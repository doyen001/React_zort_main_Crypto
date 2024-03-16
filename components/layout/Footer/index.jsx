import Image from 'next/image';
import Header from './Header';

export default function Footer() {
    return (
        <div className="relative flex flex-col justify-center items-center pb-[3.125rem]">
            <div className='absolute w-full h-full flex -top-[100%]'>
                <Image alt='' layout='fill' width={1600} height={982} src="/images/footer/bg.png"/>

            </div>
            <div className='w-full'>
                <Header />
            </div>
            <div className='w-full justify-center mt-[1.25rem] hidden md:flex'>
                <button className='flex relative px-[25px]'>
                    <div>
                        <Image alt="instagram" width={98} height={98} src="/images/footer/instagram.png" />
                    </div>
                    <div className='absolute w-full h-full flex items-center justify-center pb-[1.875rem] pr-[3.125rem]'>
                        <p className='text-center text-[1.25rem] text-[#B845FF] leading-[28px] font-bold'> Instagram </p>
                    </div>
                </button>
                <button className='flex relative px-[25px]'>
                    <div>
                        <Image alt="instagram" width={107} height={94} src="/images/footer/twitter.png" />
                    </div>
                    <div className='absolute w-full h-full flex items-center justify-center pb-[1.875rem] pr-[3.125rem]'>
                        <p className='text-center text-[1.25rem] text-[#40C0FF] leading-[28px] font-bold'> Twitter </p>
                    </div>
                </button>
                <button className='flex relative px-[25px]'>
                    <div>
                        <Image alt="instagram" width={106} height={87} src="/images/footer/youtube.png" />
                    </div>
                    <div className='absolute w-full h-full flex items-center justify-center pb-[1.875rem] pr-[3.125rem]'>
                        <p className='text-center text-[1.25rem] text-[#FF3E3E] leading-[28px] font-bold'> YouTube </p>
                    </div>
                </button>
                <button className='flex relative px-[25px]'>
                    <div>
                        <Image alt="instagram" width={100} height={91} src="/images/footer/telegram.png" />
                    </div>
                    <div className='absolute w-full h-full flex items-center justify-center pb-[1.875rem] pr-[3.125rem]'>
                        <p className='text-center text-[1.25rem] text-[#0097E1] leading-[28px] font-bold'> Telegram </p>
                    </div>
                </button>
            </div>
            <p className='text-[1rem] text-[#8F95A2] z-30'>© ZORT Inc. 2023 All rights reserved.</p>
        </div>  
    )
}