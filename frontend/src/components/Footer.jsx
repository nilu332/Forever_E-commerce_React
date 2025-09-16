import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-1/2 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, asperiores qui? Ad sit, ut qui maxime quo esse pariatur, doloribus necessitatibus exercitationem incidunt quae fugit ullam voluptate hic dolorum aliquid?</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-3'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-7994869500</li>
                <li>Contact@forever.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
