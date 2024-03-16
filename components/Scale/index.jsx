import Image from "next/image"

export default function Scale() {
    return (
        <div className="w-full bg-[#161616] flex flex-col">
            <h2 className="text-[white] font-impact text-[32px] text-center mt-[50px]"> SCALE FOR GLOBAL ADOPTION </h2>
            <p className="text-[#929292] text-center mb-[40px]"> We always provide our best quality for users </p>
            <div className="flex justify-center items-center px-[50px] mb-[50px]">
                <div className="flex flex-col items-center px-[20px] max-w-[50%] md:max-w-[25%] grow">
                    <div className="h-[120px]">
                        <Image alt="" width={100} height={100} src="/images/a.svg"/>
                    </div>
                    <h6 className="text-white text-[16px] text-center"> ETH COMPATIBILITY </h6>
                    <p className="text-[#929292] text-[12px] text-center"> Industry dominance, established tech stack, tools, languages, standards, enterprise adoption </p>
                </div>
                <div className="flex flex-col items-center px-[20px] max-w-[50%] md:max-w-[25%] grow">
                    <div className="h-[120px]">
                        <Image alt="" width={100} height={100} src="/images/b.svg"/>
                    </div>
                    <h6 className="text-white text-[16px] text-center"> SCALABILITY </h6>
                    <p className="text-[#929292] text-[12px] text-center"> Dedicated blockchains, scalable consensus algorithms, custom Wasm execution environments </p>
                </div>
                <div className="flex flex-col items-center px-[20px] max-w-[50%] md:max-w-[25%] grow">
                    <div className="h-[120px]">
                        <Image alt="" width={100} height={100} src="/images/c.svg"/>
                    </div>
                    <h6 className="text-white text-[16px] text-center"> SECURITY </h6>
                    <p className="text-[#929292] text-[12px] text-center"> Modular &quot;security as a service&quot;, provided either by Ethereum or by a pool of professional validators </p>
                </div>
                <div className="flex flex-col items-center px-[20px] max-w-[50%] md:max-w-[25%] grow">
                    <div className="h-[120px]">
                        <Image alt="" width={100} height={100} src="/images/d.svg"/>
                    </div>
                    <h6 className="text-white text-[16px] text-center"> DEVELOPER EXPERIENCE </h6>
                    <p className="text-[#929292] text-[12px] text-center"> Equivalent to Ethereum, no protocol level knowledge required, no token deposits, fees or permissions </p>
                </div>
            </div>
        </div>
    )
}