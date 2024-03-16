import Image from "next/image"
import { useState } from "react"

export default function PlaceSection() {
    const [amount, setAmount] = useState(200);

    return (
        <div className="relative mt-[3.125rem] flex flex-col lg:flex-row w-full max-w-[1100px]">
            <div className="absolute left-0 top-0 w-full h-full hidden lg:block">
                <Image alt="" width={1170} height={510} src="/images/hero/background.png" layout="responsive"/>
            </div>
            {/* <div className="pb-[100px] lg:hidden block">
                <Image alt="" width={600} height={839} src="/images/hero/background_2.png" layout="fixed"/>
            </div> */}
            {/* <div className="absolute -top-[35px] left-[2.5rem] lg:top-[100px] lg:left-[1.25rem]">
                <div className="absolute -left-[100px] -top-[1.25rem] w-full">
                    <Image alt="" src="/images/hero/rect_5.png" width={602} height={504} layout="fixed" />
                </div>
                <div className="w-[410px] h-[286px] flex flex-col justify-center items-center relative z-10 text-white text-[1.125rem]">
                    <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                        <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                            <Image alt="" width={30} height={30} src="/images/hero/u1.png" />
                        </div>
                        <p className="grow"> cryptoDreamer</p>
                        <p> $ 1,400.00</p>
                    </div>
                    <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                        <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                            <Image alt="" width={30} height={30} src="/images/hero/u2.png" />
                        </div>
                        <p className="grow"> cryptoDreamer</p>
                        <p> $ 800.00</p>
                    </div>
                    <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                        <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                            <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                        </div>
                        <p className="grow"> cryptoDreamer</p>
                        <p> $ 280.00</p>
                    </div>
                    <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                        <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                            <Image alt="" width={30} height={30} src="/images/hero/u4.png" />
                        </div>
                        <p className="grow"> cryptoDreamer</p>
                        <p> $ 210.00</p>
                    </div>
                    <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                        <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                            <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                        </div>
                        <p className="grow"> cryptoDreamer</p>
                        <p> $ 140.00</p>
                    </div>
                </div>
            </div> */}
            <div className="w-full lg:w-1/2 h-full">
                <Image alt="" src="/images/hero/place.png" width={755} height={713} layout="responsive"/>
            </div>
            <div className="w-full lg:w-1/2 z-10 p-[2.5rem] -mt-[120px] md:-mt-[150px] lg:-mt-[20px]">
                <p className="text-[#A7ADB4] text-[26px] sm:32px xl:text-[36px] leading-[36px] sm:leading-[42px]">
                    Welcome to Zort Trading Arena, a <span className="text-white">decentralized trading platform</span> merging analytics, binary, crypto derivatives, and leveraging, with on-chain smart contract data verification
                </p>
            </div>
            {/* <div className="absolute top-[150px] left-[200px] lg:top-[260px] lg:left-[220px] z-30">
                <div className="absolute -left-[35px] w-full">
                    <Image alt="" src="/images/hero/rect_6.png" width={410} height={400} layout="fixed" />
                </div>
                <div className="w-[340px] h-[326px] flex flex-col justify-center items-center relative z-10">
                    <div className="flex justify-center mb-[1.875rem]">
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
                    <div className="relative h-[3px] w-[260px] bg-[white]">
                       <button className="absolute min-w-[1rem] min-h-[1rem] -mt-[6px] bg-white rounded-full" style={{left: "40%"}}>
                       </button>
                    </div> 
                    <div className="w-[260px] flex items-center mt-[.625rem]">
                        <p className="text-white text-[.875rem]"> x1 <span className="text-[#BFFF0B]">Safe</span></p>
                        <div className="grow"></div>
                        <p className="text-white text-[.875rem]"><span className="text-[#D7314F]">Fierce</span> x10 </p>
                    </div>
                    <div className="border-[1px] w-[260px] border-[#BAECFF] rounded-[.625rem] bg-[#1D1F22] mt-[1.25rem] flex items-center p-[6px]">
                        <p className="text-white text-[.875rem] ml-[.75rem] mr-[.25rem]">$</p>
                        <input type="text" className="bg-transparent min-w-[6.5rem] outline-none text-white text-[.875rem]" value={amount} onChange={(e) => {setAmount(e.target.value)}}>
                        </input>
                        <div className="grow"></div>
                        <button className="rounded-[6px] bg-[#ffffff1a] text-white px-[1.5rem] py-[.625rem] mr-[5px]"> 1/2 </button>
                        <button className="rounded-[6px] bg-[#ffffff1a] text-white px-[1.5rem] py-[.625rem]"> x2  </button>
                    </div>
                    <button className="mt-[1.25rem] rounded-[.625rem] bg-[#ffffff1a] text-white text-center w-[260px] h-[54px] font-Inter">
                        Place Bet
                    </button>
                </div>
            </div> */}
        </div> 
    )
}