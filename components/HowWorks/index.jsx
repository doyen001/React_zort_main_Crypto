import Image from "next/image"

export default function HowWorks() {
    return (
        <>
            <div className="justify-center items-center lg:hidden flex flex-col px-[1.5rem] sm:px-[3rem] xl:px-[140px] 2xl:px-[215px]">
                <h2 className="text-white text-center text-[4rem] leading-[5rem] md:text-[4.5rem] md:leading-[5rem] font-medium mx-[15px] mt-[21px] mb-[60px] w-full xl:w-[570px] px-[1.25rem] md:px-[6.5rem]">
                    Here is how it works...
                </h2>
                <div className="py-[1.25rem]">
                    <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-[2.5rem] w-full sm:w-[450px] xl:w-[570px] relative">
                        <Image alt="" width={238} height={199} src="/images/howitworks/1.png" />
                        <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Join a Prediction Pool</h6>
                        <p className="text-[#A7ADB4] text-[22px]">Explore a variety of prediction pools based on different cryptocurrencies. These pools bring together players who are eager to wager on the future prices of their favorite digital assets.</p>
                    </div>
                </div>
                <div className="py-[1.25rem]">
                    <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-[2.5rem] w-full sm:w-[450px] xl:w-[570px]">
                        <Image alt="" width={315} height={112} src="/images/howitworks/4.png" />
                        <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Place Your Prediction</h6>
                        <p className="text-[#A7ADB4] text-[22px]">Bet on the future price movement of a specific cryptocurrency. You can choose Bull if you think the price will rise or Bear if you believe it will fall.</p>
                    </div>
                </div>
                <div className="py-[1.25rem]">
                    <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-[2.5rem] w-full sm:w-[450px] xl:w-[570px]">
                        <Image alt="" width={322} height={138} src="/images/howitworks/5.png" />
                        <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Unlock Leverage</h6>
                        <p className="text-[#A7ADB4] text-[22px]">Amplify your betting power with leverage. Take advantage of leverage options to multiply your potential winnings by up to 10 times!</p>
                    </div>
                </div>
                <div className="py-[1.25rem]">
                    <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-[2.5rem] w-full sm:w-[450px] xl:w-[570px]">
                        <Image alt="" width={238} height={174} src="/images/howitworks/2.png" />
                        <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Set Your Stake</h6>
                        <p className="text-[#A7ADB4] text-[22px]">Determine how much you want to bet on your prediction. Start small or go big, it&apos;s up to you!</p>
                    </div>
                </div>
                <div className="py-[1.25rem]">
                    <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-[2.5rem] w-full sm:w-[450px] xl:w-[570px]">
                        <Image alt="" width={362} height={137} src="/images/howitworks/6.png" />
                        <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Join a Prediction Pool</h6>
                        <p className="text-[#A7ADB4] text-[22px]">Engage in a thrilling battle of <span className="text-[#BDFC0B]">Bull</span> versus <span className="text-[#EF435A]">Bear</span>! Track the progress of both teams as the prediction unfolds, chat with fellow participants, and feel the anticipation build. At the end of the prediction period, the winning team takes home the entire pool.</p>
                    </div>
                </div>
                <div className="py-[1.25rem]">
                    <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-[2.5rem] w-full sm:w-[450px] xl:w-[570px]">
                        <Image alt="" width={466} height={210} src="/images/howitworks/3.png" />
                        <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Winning Calculation </h6>
                        <p className="text-[#A7ADB4] text-[22px]">The winnings are distributed among the correct predictions based on the proportion of their bets to the total pool size.</p>
                    </div>
                </div>
            </div>
            <div className="justify-center hidden lg:flex">
                <div className="flex flex-col">
                    <div className="py-[45px]">
                        <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-[2.5rem] rounded-br-[0px] w-full sm:w-[450px] xl:w-[570px] relative">
                            <div className="absolute w-[2.5rem] h-[2.5rem] right-0 -bottom-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/tr.png" />
                            </div>
                            <Image alt="" width={238} height={199} src="/images/howitworks/1.png" />

                            <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Join a Prediction Pool</h6>
                            <p className="text-[#A7ADB4] text-[22px]">Explore a variety of prediction pools based on different cryptocurrencies. These pools bring together players who are eager to wager on the future prices of their favorite digital assets.</p>
                        </div>
                    </div>
                    <div className="py-[45px]">
                        <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-l-[2.5rem] w-full sm:w-[450px] xl:w-[570px] relative">
                            <div className="absolute w-[2.5rem] h-[2.5rem] right-0 -top-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/br.png" />
                            </div>
                            <div className="absolute w-[2.5rem] h-[2.5rem] right-0 -bottom-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/tr.png" />
                            </div>
                            <Image alt="" width={238} height={174} src="/images/howitworks/2.png" />
                            <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Unlock Leverage</h6>
                            <p className="text-[#A7ADB4] text-[22px]">Amplify your betting power with leverage. Take advantage of leverage options to multiply your potential winnings by up to 10 times!</p>
                        </div>
                    </div>
                    <div className="py-[45px]">
                        <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-l-[2.5rem] w-full sm:w-[450px] xl:w-[570px] relative">
                            <div className="absolute w-[2.5rem] h-[2.5rem] right-0 -top-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/br.png" />
                            </div>
                            <div className="absolute w-[2.5rem] h-[2.5rem] right-0 -bottom-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/tr.png" />
                            </div>
                            <Image alt="" width={466} height={210} src="/images/howitworks/3.png" />
                            <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Winning Calculation </h6>
                            <p className="text-[#A7ADB4] text-[22px]">The winnings are distributed among the correct predictions based on the proportion of their bets to the total pool size.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="pt-[45px] w-full sm:w-[450px] xl:w-[570px] pl-[6.5rem]">
                        <h2 className="text-white text-[4.5rem] mt-[35px] mb-[60px]">
                            Here is how it works...
                        </h2>
                    </div>
                    <div className="py-[45px]">
                        <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-r-[2.5rem] w-full sm:w-[450px] xl:w-[570px] relative">
                            <div className="absolute w-[2.5rem] h-[2.5rem] left-0 -top-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/bl.png" />
                            </div>
                            <div className="absolute w-[2.5rem] h-[2.5rem] left-0 -bottom-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/tl.png" />
                            </div>
                            <Image alt="" width={315} height={112} src="/images/howitworks/4.png" />
                            <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Place Your Prediction</h6>
                            <p className="text-[#A7ADB4] text-[22px]">Bet on the future price movement of a specific cryptocurrency. You can choose Bull if you think the price will rise or Bear if you believe it will fall.</p>
                        </div>
                    </div>
                    <div className="py-[45px]">
                        <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-r-[2.5rem] w-full sm:w-[450px] xl:w-[570px] relative">
                            <div className="absolute w-[2.5rem] h-[2.5rem] left-0 -top-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/bl.png" />
                            </div>
                            <div className="absolute w-[2.5rem] h-[2.5rem] left-0 -bottom-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/tl.png" />
                            </div>
                            <Image alt="" width={322} height={138} src="/images/howitworks/5.png" />
                            <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Set Your Stake</h6>
                            <p className="text-[#A7ADB4] text-[22px]">Determine how much you want to bet on your prediction. Start small or go big, it&apos;s up to you!</p>
                        </div>
                    </div>
                    <div className="py-[45px]">
                        <div className="px-[1.25rem] md:px-[75px] py-[6.5rem] flex flex-col justify-center items-center bg-[#17181B] rounded-[2.5rem] rounded-tl-[0px] w-full sm:w-[450px] xl:w-[570px] relative">
                            <div className="absolute w-[2.5rem] h-[2.5rem] left-0 -top-[2.5rem]">
                                <Image alt="" width={40} height={40} src="/images/howitworks/bl.png" />
                            </div>
                            <Image alt="" width={362} height={137} src="/images/howitworks/6.png" />
                            <h6 className="mt-[56px] text-white text-[28px] md:text-[2.5rem]">Join a Prediction Pool</h6>
                            <p className="text-[#A7ADB4] text-[22px]">Engage in a thrilling battle of <span className="text-[#BDFC0B]">Bull</span> versus <span className="text-[#EF435A]">Bear</span>! Track the progress of both teams as the prediction unfolds, chat with fellow participants, and feel the anticipation build. At the end of the prediction period, the winning team takes home the entire pool.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}