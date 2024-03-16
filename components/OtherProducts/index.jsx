import Image from "next/image"

export default function OtherProducts() {
    return (
        <div className="flex flex-col justify-center items-center relative pb-[100px] px-[1.5rem] sm:px-[3rem] xl:px-[140px] 2xl:px-[215px] mb-[100px]">

            <h2 className="text-[4rem] md:text-[4.5rem] text-white text-center mb-[60px]"> Explore Other Products </h2>
            <div className="flex lg:flex-row flex-col justify-center">
                <div className="mb-[3.125rem] lg:pr-[15px] w-full sm:w-[400px] md:w-[570px] lg:w-[400px] xl:w-[570px] lg:h-[800px] md:h-[687px] lg:h-[800px] xl:h-[687px] z-10">
                    <div className="bg-[#1E1F23] rounded-[1.25rem] flex flex-col justify-between p-[2.5rem] h-full overflow-hidden">
                        <div className="flex justify-center items-center mb-[22px]">
                            <Image alt="" width={75} height={31} src="/images/products/logo1.png" />
                            <h3 className="ml-[.75rem] text-[#3399F6] text-[2.5rem] font-medium font-poppins"> Lite </h3>
                        </div>
                        <div className="w-full flex flex-col justify-center">
                            <p className="text-[26px] leading-[38px] text-white text-center">
                                Simple and Secure
                            </p>
                            <p className="text-[26px] leading-[38px] text-white text-center">
                                Quantitative Trading
                            </p>
                        </div>
                        
                        <div className="-mx-[40%] xl:-my-[110px] pl-[5%]">
                            <Image alt="" width={863} height={622} src="/images/products/pro_1.png" layout="responsive"/>
                        </div>
                        <div className="w-full flex justify-center items-end grow">
                            <button className='relative w-[263px] h-[64px] flex justify-center items-center'>
                                <div className='absolute'>
                                    <svg width="185" height="64" viewBox="0 0 185 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="185" height="60" rx="32" stroke="url(#paint1_linear_303_20004)" strokeWidth="2"></rect><defs><linearGradient id="paint1_linear_303_20004" x1="0" y1="0" x2="110" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#6FF3F3"></stop><stop offset="1" stopColor="#7384F7"></stop></linearGradient></defs>
                                    </svg>
                                </div>
                                <span className='text-white z-10 font-medium text-[1.25rem] gradient-text'> Learn More </span>
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className="mb-[3.125rem] lg:pr-[15px] w-full sm:w-[400px] md:w-[570px] lg:w-[400px] xl:w-[570px] lg:h-[800px] md:h-[687px] lg:h-[800px] xl:h-[687px] z-10">
                    <div className="bg-[#1E1F23] rounded-[1.25rem] flex flex-col justify-between p-[2.5rem] h-full overflow-hidden">
                        <div className="flex justify-center items-center mb-[22px]">
                            <Image alt="" width={75} height={31} src="/images/products/logo2.png" />
                            <h3 className="ml-[.75rem] text-[#8933F6] text-[2.5rem] font-medium font-poppins"> Vaults </h3>
                        </div>
                        <div className="w-full flex justify-center">
                            <p className="text-[26px] leading-[38px] text-white text-center">
                                Turn your guesswork into earnings with our one-of-a-kind prediction platform
                            </p>
                        </div>
                        <div className="-mx-[30%] xl:-my-[100px]">
                            <Image alt="" width={863} height={605} src="/images/products/pro_2.png"  layout="responsive"/>
                        </div> 
                        <div className="w-full flex justify-center items-end grow">
                            <button className='relative w-[263px] h-[64px] flex justify-center items-center'>
                                <div className='absolute'>
                                    <svg width="185" height="64" viewBox="0 0 185 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="185" height="60" rx="32" stroke="url(#paint1_linear_303_20004)" strokeWidth="2"></rect><defs><linearGradient id="paint1_linear_303_20004" x1="0" y1="0" x2="110" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#6FF3F3"></stop><stop offset="1" stopColor="#7384F7"></stop></linearGradient></defs>
                                    </svg>
                                </div>
                                <span className='text-white z-10 font-medium text-[1.25rem] gradient-text'> Learn More </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// linear-gradient(145deg, #1E1F23 0%, #0F0F11 98.67%);