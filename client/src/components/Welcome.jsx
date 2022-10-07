import React from "react"  ; 
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Input = ({placeholder , name , type , value , handelChange } )=>(
<input 
    placeholder={placeholder} 
    type = {type }
    step="0.0001"
    value = {value }
    onChange = {(e)=> handelChange(e, name )}

    calssName = " my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "/>
)

const Welcome = () => {
  return (
    <div>Welcome</div>
  )
}

export default Welcome