import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
         <div className='basis-1/2'>
         <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>Refokus.</h1></div>
         <div className='basis-1/2 flex gap-5'>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                {["instagram", "twitter (x?)","linkden"].map((item, index)=><a key={index} className='mt-2 capitalize block text-zinc-600'>{item}</a>)}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>Sitemap</h4>
                {["home", "work","career","contact"].map((item, index)=><a key={index} className='mt-2 capitalize block text-zinc-600'>{item}</a>)}
            </div>
            <div className='basis-1/2 flex flex-col items-end'>
                <p className='text-right'>Refokus is a driving proring agency driven by design and empowered by technology </p>
                <button className='bg-blue-800 px-3 py-2 mr-4 mt-6'><i>W  </i>Enterprise Partner</button>
            </div>
         </div>
      </div>
                 <div className='max-w-screen-xl mx-auto flex gap-10 pb-5'> 
                    {["Privacy Policy","Cookie Privacy","Impressum","Terms"].map((item,index)=> <a key={index} className='text-zinc-500'>{item}</a>)}  
                </div>
      
    </div>
  )
}

export default Footer
