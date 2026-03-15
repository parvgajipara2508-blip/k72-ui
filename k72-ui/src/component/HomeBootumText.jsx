import React from 'react'
import { Link } from 'react-router-dom'

const HomeBootumText = () => {
    return (
        <div className='font-[font-2] flex justify-center item-center gap-2'>
            <Link className='text-[6.5vw] leading-[6vw] uppercase border-4 border-white rounded-full px-10 ' >Projects</Link>
            <Link className='text-[6.5vw] leading-[6vw] uppercase border-4 border-white rounded-full px-10 ' >Agence</Link>
        </div>
    )
}

export default HomeBootumText
