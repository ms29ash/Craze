import React from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

//Classes
const classes = 'h-12 w-12 bg-gray-500 absolute   z-10   cursor-pointer disabled:opacity-5'
const svgClass = ' !text-black text-4xl'

function LeftBtn(props) {
    const { className, onClick } = props;
    return (
        <div className={`${classes} ${className} !left-[-3%]`}
            onClick={onClick}>
            <FaAngleLeft className={`${svgClass}`} />
        </div>
    )
}

function RightBtn(props) {
    const { className, onClick } = props;
    return (
        <div className={`${classes} ${className} !right-[-2%]`}
            onClick={onClick}>
            <FaAngleRight className={`${svgClass}`} />
        </div>
    )
}

export { RightBtn, LeftBtn }