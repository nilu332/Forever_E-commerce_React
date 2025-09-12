import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis recusandae et, mollitia vero repellendus quibusdam tenetur. Incidunt consectetur facere in, odit consequuntur totam laboriosam error voluptates odio laudantium? Commodi.</p>
        <form> 
            <input  className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
            <button type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox
