import Header from "../Header";

import { ClipLoader } from 'react-spinners'
import { useUtil } from "store/hook";
import Hero from "components/Hero";
import Footer from "../Footer";
import WhyZort from "components/WhyZort";
import HowWorks from "components/HowWorks";
import GetIn from "components/GetIn";
import Feedback from "components/Feedback";
import OtherProducts from "components/OtherProducts";

import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { showSignupWindow, showLoginWindow, hideDrawer } from "store/slices/utilSlice";
import ForgotPassword from "components/Auth/ForgotPassword";
import SignUp from "components/Auth/SignUp";
import LogIn from "components/Auth/LogIn";

export default function Layout({ children }) {
    const dispatch = useDispatch()
    const { isOverlay, isSpinner, isDrawer, isSignupWindow, isLoginWindow, isForgotWindow } = useUtil();

    return (
        <div>
            { isDrawer &&
            <div className="fixed top-0 left-0 h-[100vh] w-[100vw] z-50" onClick={() => {dispatch(hideDrawer())}}>
                <div className='absolute right-0 h-full w-full md:w-[332px] flex flex-col justify-start items-center pt-[6.5rem] bg-[#16181bd7] backdrop-blur-md z-50'
                    onClick={(e) => {e.stopPropagation()}}
                >
                    <button className='absolute top-[1.25rem] right-[25px]' onClick={() => {dispatch(hideDrawer())}}>
                        <FontAwesomeSvgIcon icon={faClose} width={20} height={20} color="white"/>
                    </button>
                    <button className='text-white text-center text-[15px] font-semibold font-poppins mb-[1.875rem]'>
                        Trading Arena
                    </button>
                    <button className='text-white text-center text-[15px] font-semibold font-poppins mb-[1.875rem]'>
                        ZVaults
                    </button>
                    <button className='text-white text-center text-[15px] font-semibold font-poppins mb-[1.875rem]'>
                        Zort lite
                    </button>
                    <button className='text-white text-center text-[15px] font-semibold font-poppins mb-[1.25rem]'>
                        Company
                    </button>
                    <button className='rounded-full border-[2px] px-[1.25rem] py-[0.6125rem] text-white border-white mb-[1.25rem]'
                        onClick={() => { dispatch(showLoginWindow()), dispatch(hideDrawer())}}
                    >
                        Login
                    </button>
                    <button className='rounded-full border-[2px] px-[1.25rem] py-[0.6125rem] text-[#C0F821] border-[#C0F821]'
                        onClick={() => { dispatch(showSignupWindow()), dispatch(hideDrawer())}}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            }
            { isSignupWindow &&
                <SignUp />
            }
            { isLoginWindow &&
                <LogIn />
            }
            { isForgotWindow &&
                <ForgotPassword />
            }
            <Header />
           
            <Hero />
            <WhyZort />
            
            <HowWorks />
            <GetIn />

            <Feedback />
            <OtherProducts />
            {/* <JoinZort /> */}

            <Footer />
            { isSpinner &&
                <div className='z-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <ClipLoader speedMultiplier={0.5} color='blue' size={50}/>
                </div>
            }
            { isOverlay &&
                <div className='z-100 fixed w-screen h-screen top-0 left-0 bg-[#00000070]'>
                </div>
            }
        </div>
    )
} 