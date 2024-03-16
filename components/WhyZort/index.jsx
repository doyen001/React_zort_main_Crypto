import Image from "next/image";

export default function WhyZort() {
    return (
        <div className="flex flex-col justify-center items-center pb-[160px] px-[1.5rem] sm:px-[3rem] xl:px-[140px] 2xl:px-[215px] ">
            <h2 className="text-white text-center text-[4rem] leading-[5rem] md:text-[4.5rem] md:leading-[5rem] font-medium mb-[1rem]">
                Zort Trading Arena
            </h2>
            <p className="text-[#8F95A2] text-[1.5rem] leading-[2rem] mb-[2rem] max-w-[470px] text-center">
                You’re challenging fellow users, not a big company or exchange
            </p>
            <div className="relative">
                <div className="lg:block hidden lg:w-[960px] lg:h-[280px] xl:w-[1169px] xl:h-[342px]">
                    <Image alt="" width={1169} height={342} src="/images/whyzort/bg.png" layout="responsive"/>
                </div>
                <div className="lg:absolute relative flex flex-col lg:flex-row text-[22px] top-0 text-center leading-[1.875rem] h-full">
                    <div className="h-[78%] lg:w-[33%] rounded-[2.5rem] bg-[#16181B] px-[3.125rem] lg:px-[.625rem] xl:px-[3.125rem] pt-[2.5rem] lg:pt-[1.25rem] xl:pt-[2.5rem] mb-[1.25rem] pb-[2.5rem] lg:pb-[0px]">
                        <Image alt="" width={75} height={74} src="/images/whyzort/1.png" layout="fixed"/>
                        <p className="text-white">We <span className="text-[#B7F40B]">turn crypto predictions into a thrilling game</span> of strategy and reward!</p>
                    </div>
                    <div className="h-[78%] lg:w-[34%] rounded-[2.5rem] bg-[#16181B] lg:mt-[6.5%] px-[3.125rem] lg:px-[.625rem] xl:px-[3.125rem] pt-[2.5rem] lg:pt-[1.25rem] xl:pt-[2.5rem] mb-[1.25rem] pb-[2.5rem] lg:pb-[0px]">
                        <Image alt="" width={60} height={74} src="/images/whyzort/2.png"  layout="fixed"/>
                        <p className="text-white"><span className="text-[#B7F40B]">Predict the market&apos;s moves</span>clash with rival traders, and multiply your stakes</p>
                    </div>
                    <div className="h-[78%] lg:w-[33%] rounded-[2.5rem] bg-[#16181B] px-[3.125rem] lg:px-[.625rem] xl:px-[3.125rem] pt-[2.5rem] lg:pt-[1.875rem] xl:pt-[3.125rem] pb-[2.5rem] mb-[1.25rem] lg:pb-[0px]">
                        <div className="-mb-[125px] xl:-mb-[115px] -mt-[1.25rem] ml-[2.5rem]">
                            <Image alt="" width={173} height={200} src="/images/whyzort/3.png"  layout="fixed"/>
                        </div>
                        <p className="text-white">Trade smarter, outsmart fellow traders in high-stakes crypto forecasts, and  <span className="text-[#B7F40B]">seize fortunes</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
} 