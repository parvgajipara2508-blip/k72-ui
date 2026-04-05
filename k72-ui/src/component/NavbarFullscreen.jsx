import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useContext, useRef } from 'react'
import { NavbarContext } from '../context/NavContext'


const NavbarFullscreen = () => {

    const fullNavLinksRef = useRef(null)
    const fullScrennRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)


    const gsapAnimation = () => {
        const tl = gsap.timeline()


        tl.from('.stairing', {
            delay: 0.5,
            height: 0,
            stagger: {
                amount: -0.3
            }
        })

        tl.from('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: -0.2
            }


        })

        tl.from('.navLink', {
            opacity: 0
        })

    }

    useGSAP(() => {









        if (navOpen) {
            gsap.to('.fullScreenNav', {
                display: 'block'
            })
            gsapAnimation()
        } else {
            gsap.to('.fullScreenNav', {
                display: 'none'
            })
        }


    }, [navOpen])
    return (

        <div ref={fullScrennRef} className=' fullScreenNav z-50  h-screen w-full absolute overflow-x-hidden  '>
            <div className='h-screen w-full fixed'>

                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-red-500'></div>
                    <div className='stairing h-full w-1/5 bg-red-500'></div>
                    <div className='stairing h-full w-1/5 bg-red-500'></div>
                    <div className='stairing h-full w-1/5 bg-red-500'></div>
                    <div className='stairing h-full w-1/5 bg-red-500'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className=' navLink flex w-full justify-between item-start'>
                    <div className='p-3'>
                        <div className='w-30' >
                            <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='h-32 w-32 relative '>
                        <div className='h-44 -rotate-45 origin-top absolute w-1 bg-[#d3fd50]'></div>
                        <div className='h-44 rotate-45 right-0 origin-top  absolute w-1 bg-[#d3fd50]'></div>
                    </div>
                </div>

                <div className='all-icons py-25  '>
                    <div className=' link relative icons border-t-2 text-center'>
                        <h1 className='font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Projects</h1>
                        <div className=' moveLink absolute flex top-0 text-black bg-[#D3FD50] '>
                            <div className=' moveX flex  item-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour Tout Voir</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour Tout Voir</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                            </div>
                            <div className=' moveX flex  item-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour Tout Voir</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour Tout Voir</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                            </div>


                        </div>
                    </div>
                    <div className=' link relative icons border-t-2 text-center'>
                        <h1 className='font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Projects</h1>
                        <div className=' moveLink absolute flex top-0 text-black bg-[#D3FD50] '>
                            <div className=' moveX flex  item-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>pour tout savoir</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="data:image/jpeg;base64,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" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour Tout savoir</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className=' moveX flex  item-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour Tout savoir</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="data:image/jpeg;base64,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" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour Tout savoir</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="data:image/jpeg;base64,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" alt="" />
                            </div>


                        </div>
                    </div>
                    <div className=' link relative icons border-t-2 text-center'>
                        <h1 className='font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Projects</h1>
                        <div className=' moveLink absolute flex top-0 text-black bg-[#D3FD50] '>
                            <div className=' moveX flex  item-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                            </div>
                            <div className=' moveX flex  item-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Pour envoyer un fax</h2>
                            </div>


                        </div>
                    </div>
                    <div className=' link relative icons border-y-2 text-center'>
                        <h1 className='font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>Projects</h1>
                        <div className=' moveLink absolute flex top-0 text-black bg-[#D3FD50] '>
                            <div className=' moveX flex  item-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>lire les articles</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>lire les articles</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                            </div>
                            <div className=' moveX flex  item-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>lire les articles</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  leading-[0.8] pt-10 uppercase'>lire les articles</h2>
                                <img className='h-30 mt-4 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NavbarFullscreen
