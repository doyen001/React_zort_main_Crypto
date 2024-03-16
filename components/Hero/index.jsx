import { useState, useReact } from "react"
import Image from "next/image"
import PlaceSection from "./PlaceSection"

export default function Hero() {
    return (
        <div className="relative w-full flex justify-center relative overflow-hidden h-fit mb-[5rem] px-[1.5rem] sm:px-[3rem] xl:px-[140px] 2xl:px-[215px] ">
            <div className="absolute top-0 left-0 w-full flex justify-between">
                {/* <Image alt="" src="/images/hero/back.png" width={1600} height={1456} layout="responsive" /> */}
                <div className="max-w-[40%] mt-[50vh] xl:mt-[20vh]">
                    <Image alt="" src="/images/hero/redline.png" width={933} height={1442} />
                </div>
                <div className="max-w-[40%]">
                    <Image alt="" src="/images/hero/greenline.png" width={880} height={1456}  />
                </div>
            </div>
            <div className="w-full flex flex-col w-fit items-center z-10">
                <h2 className="text-[4.5rem] leading-[5rem] md:leading-[6rem] md:text-[5.5rem] text-white max-w-[800px] text-center mt-[76px] z-0 -tracking-[1.5px]">
                    Ready to test your <span className="text-[#B9F70A]">crypto intuition</span>? </h2>
                {/* <div className="relative flex w-fit">
                    <div className="relative mr-[150px] pb-[160px]">
                        <div className="absolute ml-[1.25rem] -top-[3.125rem]">
                            <Image alt="" width={275} height={286} src="/images/hero/red_back.png" layout="fixed" />
                        </div>
                        <div className="z-20 relative pl-[60px] md:pl-[1.875rem] md:pl-[0px]">
                            <Image alt="" width={246} height={238} src="/images/hero/red_animal.png" layout="fixed" />
                        </div>
                    </div>
                    <div className="absolute top-[150px] left-[180px] sm:left-[120px] md:left-[3.125rem]">
                        <div className="absolute -left-[110px] -top-[1.125rem] w-full">
                            <Image alt="" src="/images/hero/rect_2.png" width={554} height={442} layout="fixed" />
                        </div>
                        <div className="w-[334px] h-[224px] flex flex-col justify-center items-center relative z-10">
                            <div className="flex mb-[1.25rem]">
                                <div className="rounded-full bg-[#292B2D] w-[3.125rem] h-[3.125rem] flex items-center justify-center">
                                    <Image alt="" width={50} height={50} src="/images/hero/bitcoin.png" />
                                </div>
                            </div>
                            <p className="text-white text-[1.5rem] mb-[1.25rem]"> Will Bitcoin go <span className="text-[#7FCA20]">Up</span> or <span className="text-[#FF2149]">Down</span> </p>
                            <div className="flex justify-center">
                                <button className="relative w-[120px] h-[54px] flex justify-center items-center mr-[.875rem]">
                                    <div className="absolute left-0 top-0 w-[120px] h-[54px]">
                                        <Image alt="" layout="fill" src="/images/hero/green_btn.png" />
                                    </div>
                                    <p className="text-white z-10"> Up </p>
                                </button>
                                <button className="relative w-[120px] h-[54px] flex justify-center items-center">
                                    <div className="absolute left-0 top-0 w-[120px] h-[54px]">
                                        <Image alt="" layout="fill" src="/images/hero/red_btn.png" />
                                    </div>
                                    <p className="text-white z-10"> Down </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[.625rem] left-[240px] md:top-[1.875rem] md:left-[260px]">
                        <div className="absolute -left-[6.5rem] w-full">
                            <Image alt="" src="/images/hero/rect_1.png" width={339} height={322} layout="fixed" />
                        </div>
                        <div className="w-[179px] h-[163px] flex flex-col justify-center items-center relative z-10">
                            <div className="flex mb-[.625rem]">
                                <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center">
                                    <Image alt="" width={30} height={30} src="/images/hero/u1.png" />
                                </div>
                                <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center -ml-[.5rem]">
                                    <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                                </div>
                                <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center -ml-[.5rem]">
                                    <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                                </div>
                                <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center -ml-[.5rem]">
                                    <Image alt="" width={30} height={30} src="/images/hero/u4.png" />
                                </div>
                            </div>
                            <p className="text-white text-[2rem] font-semibold"> 1494 </p>
                            <p className="text-[#F7931A] text-[.875rem]"> Players Betting </p>
                        </div>
                    </div>
                    <div className="absolute top-[200px] sm:top-[230px] left-[420px] z-10">
                        <div className="absolute -left-[00px] w-full">
                            <Image alt="" src="/images/hero/rect_3.png" width={184} height={121} layout="fixed" />
                        </div>
                        <div className="w-[184px] h-[121px] flex flex-col justify-center items-center relative z-10">
                            <div className="flex items-start">
                                <p className="text-white text-[1.5rem] leading-[1.5rem]"> $ </p>
                                <p className="text-white text-[2rem] leading-[2rem] font-semibold"> 96,500 </p>
                            </div>
                            <p className="text-[#F7931A] text-[.875rem]"> Amount to be Won </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="-mt-[75px]">
                            <Image alt="" width={288} height={304} src="/images/hero/green_back.png" layout="fixed" />
                        </div>
                        <div className="absolute top-0 right-[60px] md:right-[41px]">
                            <Image alt="" width={254} height={264} src="/images/hero/green_animal.png" layout="fixed" />
                        </div>
                    </div>
                </div> */}
                <div className="lg:-mb-[150px] sm:-mb-[100px] -mb-[60px]">
                    <Image alt="" width={873} height={683} src="/images/hero/hero.png" />
                </div>
                <p className="text-white text-center text-[26px] leading-[38px] mb-[1.5rem] max-w-[470px]">
                    Turn your guesswork into earnings with our one-of-a-kind prediction platform
                </p>
                <div className="flex flex-col sm:flex-row justify-center mb-[3.125rem] z-20 text-[1.25rem] leading-[28px]">
                    <button className='rounded-full border-[1px] border-[#B9F70A] py-[1.125rem] px-[2.5rem] text-[#B9F70A] font-Inter mx-[.625rem] mb-[1.25rem] md:mb-[0px]'>
                        Join Us
                    </button>
                    <button className='rounded-full border-[1px] py-[1.125rem] px-[2.5rem] text-white font-Inter mx-[.625rem] mb-[1.25rem] md:mb-[0px]'>
                        How it works?
                    </button>
                </div>
                <PlaceSection />
            </div>

        </div>
    )
}