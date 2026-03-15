import React from 'react'
import HomeVideo from '../component/HomeVideo'
import HomeHeroText from '../component/HomeHeroText'
import HomeBootumText from '../component/HomeBootumText'

const Home = () => {
    return (
        <div>
            <div className='h-screen w-screen  fixed'>
                <HomeVideo />
            </div>
            <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-between'>
                <HomeHeroText />
                <HomeBootumText />
            </div>
        </div>
    )
}

export default Home
