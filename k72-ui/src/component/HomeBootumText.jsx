import React from 'react'
import { Link } from 'react-router-dom'

const HomeBootumText = () => {
    return (
        <div className='font-[font-2] flex justify-center item-center gap-2'>
            <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-35 flex item-center px-10 border-white rounded-full uppercase'>
                <Link className='text-[6vw] leading-[6vw] mt-6 ' to='/projects' >Projects</Link>

            </div>
            <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50]  h-35 flex item-center px-10  border-white rounded-full uppercase'>
                <Link className='text-[6vw] leading-[6vw] mt-6 ' to='/agence' >Agence</Link>
            </div>
        </div>
    )
}

export default HomeBootumText
