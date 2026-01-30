import Link from 'next/link'
import React from 'react'

const SocialLinks = () => {
    return (
        <>
            <div className='social-links'>
                <div className='social-links-mini-wrapper'>
                    <ul>
                        <li>
                            <Link href={"https://www.linkedin.com/company/five9-availability"}><i className='fa-brands fa-linkedin-in'></i></Link>
                        </li>
                        <li>
                            <Link href="#"><i className='fa-brands fa-facebook-f'></i></Link>
                        </li>
                        <li>
                            <Link href={"https://x.com/five9co"}><i className='fa-brands fa-x-twitter'></i></Link>
                        </li>
                        <li>
                            <Link href={"https://www.instagram.com/five9co/"}><i className='fa-brands fa-instagram'></i></Link>
                        </li>
                    </ul>
                    <p className='upside-down'>FOLLOW US</p>
                </div>
            </div>
        </>
    )
}

export default SocialLinks
