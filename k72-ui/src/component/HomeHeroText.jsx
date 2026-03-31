import React from 'react'
import HomeVideo from './HomeVideo'

const HomeHeroText = () => {
    return (
        <div className='font-[font-2] pt-5 text-center'>
            <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[9vw]'>
                L'étincelle
            </div>
            <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[9vw]'>
                qui
                <div className='h-[7vw] w-[16vw]  rounded-full overflow-hidden  mx-3  '>
                    <HomeVideo />
                </div>
                génère
            </div>
            <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[9vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText
