import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { useDispatch } from "react-redux";
import { hideLoginWindow, showForgotWindow, showSignupWindow } from "store/slices/utilSlice";

export default function LogIn() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
            
    return (
        <div className="fixed w-[100vw] h-[100vh] bg-[#16181bd7] backdrop-blur-md z-50 flex justify-center items-center" onClick={(e) => {dispatch(hideLoginWindow())}}>
            <div className="w-[470px] h-[408px] bg-[#1D1F22] md:rounded-[1.25rem] p-[3.125rem] font-poppins relative" onClick={(e) => {e.stopPropagation()}}>
                <button className="absolute right-[25px] top-[1.25rem]" onClick={(e) => {dispatch(hideLoginWindow())}}>
                    <FontAwesomeSvgIcon icon={faClose} width={20} height={20} color="white" />
                </button>
                <h3 className="text-white text-[1.875rem] mb-[1.25rem] font-medium"> Log In </h3>
                <div className="h-[3rem] px-[1.25rem] py-[13px] rounded-[.625rem] border-[#343538] border-[1px] bg-[#1D1F22] rounded-[1rem] flex items-center mb-[1.25rem]">
                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="outline-none text-[.875rem] text-white bg-transparent w-full"/>
                </div>
                <div className="h-[3rem] px-[1.25rem] py-[13px] rounded-[.625rem] border-[#343538] border-[1px] bg-[#1D1F22] rounded-[1rem] flex items-center mb-[1.25rem]">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value)}} className="outline-none text-[.875rem] text-white bg-transparent w-full"/>
                </div>
                <button className="h-[3rem] px-[1.25rem] py-[13px] rounded-[.625rem] bg-[#BFFF0B] rounded-[1rem] flex items-center justify-center w-full mb-[1.25rem] font-semibold">
                    Log In
                </button>
                <button className="text-[#BFFF0B] text-[.75rem] text-center w-full mb-[.625rem]"
                    onClick={() => { dispatch (showForgotWindow())}}
                >
                   Forgot Password?
                </button>
                <button className="text-[#7A8083] text-[.75rem] text-center w-full"
                    onClick={() => { dispatch (showSignupWindow()); dispatch(hideLoginWindow());}}
                >
                   I don&apos;t have an account. <span className="text-[#BFFF0B]">Sign Up</span>
                </button>
            </div>
        </div>
    )
}