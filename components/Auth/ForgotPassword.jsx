import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { useDispatch } from "react-redux";
import { hideLoginWindow, hideForgotWindow } from "store/slices/utilSlice";

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
            
    return (
        <div className="fixed w-[100vw] h-[100vh] bg-[#16181bd7] backdrop-blur-md z-50 flex justify-center items-center" onClick={(e) => {dispatch(hideForgotWindow())}}>
            <div className="w-[470px] h-[312px] bg-[#1D1F22] md:rounded-[1.25rem] p-[3.125rem] font-poppins relative" onClick={(e) => {e.stopPropagation()}}>
                <button className="absolute right-[25px] top-[1.25rem]" onClick={(e) => {dispatch(hideForgotWindow())}}>
                    <FontAwesomeSvgIcon icon={faClose} width={20} height={20} color="white" />
                </button>
                <h3 className="text-white text-[1.875rem] mb-[1.25rem] font-medium"> Forgot Password </h3>
                <div className="h-[3rem] px-[1.25rem] py-[13px] rounded-[.625rem] border-[#343538] border-[1px] bg-[#1D1F22] rounded-[1rem] flex items-center mb-[1.25rem]">
                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="outline-none text-[.875rem] text-white bg-transparent w-full"/>
                </div>
                <button className="h-[3rem] px-[1.25rem] py-[13px] rounded-[.625rem] bg-[#BFFF0B] rounded-[1rem] flex items-center justify-center w-full mb-[1.25rem] font-semibold">
                    Send Instructions
                </button>
                <button className="text-[#BFFF0B] text-[.75rem] text-center w-full mb-[.625rem]"
                    onClick={(e) => {dispatch(hideForgotWindow())}}
                >
                    Back to Login
                </button>
            </div>
        </div>
    )
}