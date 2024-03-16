import Image from "next/image"

export default function GetIn() {
    return (
        <div className="flex flex-col justify-center items-center relative pb-[100px] px-[1.5rem] sm:px-[3rem] xl:px-[140px] 2xl:px-[215px] pt-[1.875rem]">
            <div className="absolute -top-[100px] left-0 w-full h-full flex justify-between items-between">
                <div className="mt-[1400px] md:mt-[600px] absolute left-0 max-w-[1000px]">
                    <Image alt="" width={1600} height={1406} src="/images/getin/leftbg.png" />
                </div>
                <div className="mt-[200px] md:mt-[50px] absolute right-0 max-w-[1000px]">
                    <Image alt="" width={1600} height={1406} src="/images/getin/rightbg.png" />
                </div>
            </div>
            <h2 className="text-[4rem] md:text-[4.5rem] text-center text-white"> Get in the game! </h2>
            <p className="text-[#8F95A2] text-[1.5rem] mb-[1.25rem] z-10"> Engage in a thrilling battle of Bull VS Bear!  </p>
            <div className="flex md:flex-row flex-col justify-center items-center">
                <div className="flex flex-col relative justify-center items-center bg-[#16181B80] rounded-[1.5rem] max-w-[380px] m-[1rem]">
                    <div className="flex flex-col justify-center mb-[1.25rem]">
                        <div className="ml-[1.25rem] mt-[3.125rem] h-[124px]">
                            <Image alt="" width={121} height="100" src="/images/getin/bear.png" layout="fixed" />
                        </div>
                        <p className="text-[#D7314F] mt-[.875rem] text-center text-[1.25rem] font-semibold"> Bear </p>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u1.png" />
                            </div>
                            <p className="grow text-[#D7314F] pr-[3.125rem] text-[.875rem] font-semibold"> cryptoDreamer</p>
                            <p className="text-white"> $ 400.00</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u2.png" />
                            </div>
                            <p className="grow text-[#D7314F] pr-[3.125rem] text-[.875rem] font-semibold"> BlockchainKing</p>
                            <p className="text-white"> $ 200.00</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#D7314F] pr-[3.125rem] text-[.875rem] font-semibold"> RippleRider</p>
                            <p className="text-white"> $ 281.00</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u4.png" />
                            </div>
                            <p className="grow text-[#D7314F] pr-[3.125rem] text-[.875rem] font-semibold"> CryptoDdreamer </p>
                            <p className="text-white"> $ 69.93</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#D7314F] pr-[3.125rem] text-[.875rem] font-semibold"> NFTCollector</p>
                            <p className="text-white"> $ 18.25</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#D7314F] pr-[3.125rem] text-[.875rem] font-semibold"> CryptoKing123</p>
                            <p className="text-white"> $ 50.00</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#D7314F] pr-[3.125rem] text-[.875rem] font-semibold"> SatoshiFanatic</p>
                            <p className="text-white"> $ 25.00</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#D7314F] pr-[3.125rem] text-[.875rem] font-semibold"> EtherHolder101</p>
                            <p className="text-white"> $ 199.57</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem] mt-[2rem]">
                            {/* <button className='relative w-[263px] h-[64px] flex justify-center items-center'>
                                <div className='absolute'>
                                    <svg width="263" height="64" viewBox="0 0 263 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="263" height="61" rx="31.3" stroke="url(#paint1_linear_303_20004)" strokeWidth="2"></rect><defs><linearGradient id="paint1_linear_303_20004" x1="0" y1="0" x2="110" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#6FF3F3"></stop><stop offset="1" stopColor="#7384F7"></stop></linearGradient></defs>
                                    </svg>
                                </div>
                                <span className='text-white z-10 font-medium text-[1.25rem] gradient-text'> Join Arena </span>
                            </button> */}
                            <button className='w-full rounded-full border-[2px] px-[1.25rem] py-[1.125rem] text-[1.125rem] leading-[1.125rem] font-medium text-[#D7314F] border-[#D7314F] w-[263px] h-[64px]'>
                                Join Arena
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col relative justify-center items-center bg-[#16181B80] rounded-[1.5rem] max-w-[380px] m-[1rem]">
                    <div className="flex flex-col justify-center mb-[1.25rem]">
                        <div className="mr-[1.25rem] mt-[3.125rem] h-[124px]">
                            <Image alt="" width={119} height="118" src="/images/getin/bull.png" layout="fixed" />
                        </div>
                        <p className="text-[#99CD07] mt-[.875rem] text-center text-[1.25rem] font-semibold"> Bull </p>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u1.png" />
                            </div>
                            <p className="grow text-[#B5F10A] pr-[3.125rem] text-[.875rem] font-semibold"> BTC_TraderX</p>
                            <p className="text-white"> $ 400.05</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u2.png" />
                            </div>
                            <p className="grow text-[#B5F10A] pr-[3.125rem] text-[.875rem] font-semibold"> BinanceNinja</p>
                            <p className="text-white"> $ 400.50</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#B5F10A] pr-[3.125rem] text-[.875rem] font-semibold"> StellarExplorer77</p>
                            <p className="text-white"> $ 235.00</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u4.png" />
                            </div>
                            <p className="grow text-[#B5F10A] pr-[3.125rem] text-[.875rem] font-semibold"> DogePowerUser</p>
                            <p className="text-white"> $ 214.24</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#B5F10A] pr-[3.125rem] text-[.875rem] font-semibold"> NEO_Pioneer</p>
                            <p className="text-white"> $ 127.05</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#B5F10A] pr-[3.125rem] text-[.875rem] font-semibold"> ADA_Warrior</p>
                            <p className="text-white"> $ 12.05</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#B5F10A] pr-[3.125rem] text-[.875rem] font-semibold"> MoonMissionXLM</p>
                            <p className="text-white"> $ 27.05</p>
                        </div>
                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem]">
                            <div className="rounded-full bg-[#292B2D] w-[1.875rem] h-[1.875rem] flex items-center justify-center mr-[.5rem]">
                                <Image alt="" width={30} height={30} src="/images/hero/u3.png" />
                            </div>
                            <p className="grow text-[#B5F10A] pr-[3.125rem] text-[.875rem] font-semibold"> Ethereum_Eagle </p>
                            <p className="text-white"> $ 527.05</p>
                        </div>

                        <div className="flex items-center w-full px-[2.5rem] mb-[1.125rem] mt-[2rem]">
                            {/* <button className='relative w-[263px] h-[64px] flex justify-center items-center'>
                                <div className='absolute'>
                                    <svg width="263" height="64" viewBox="0 0 263 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="263" height="61" rx="31.3" stroke="url(#paint1_linear_303_20004)" strokeWidth="2"></rect><defs><linearGradient id="paint1_linear_303_20004" x1="0" y1="0" x2="110" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#6FF3F3"></stop><stop offset="1" stopColor="#7384F7"></stop></linearGradient></defs>
                                    </svg>
                                </div>
                                <span className='text-white z-10 font-medium text-[1.25rem] gradient-text'> Join Arena </span>
                            </button> */}
                            <button className='w-full rounded-full border-[2px] px-[1.25rem] py-[1.125rem] text-[1.125rem] leading-[1.125rem] font-medium text-[#B9F70A] border-[#B9F70A] w-[263px] h-[64px]'>
                                Join Arena
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}