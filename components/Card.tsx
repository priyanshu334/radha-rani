import React from 'react'

interface CardProps {
    imageSrc:string;
    text:string;
}

const Card:React.FC<CardProps>  =({imageSrc,text})=>{
    return(
        <div className=' max-w-xs rounded-lg overflow-hidden shadow-lg '>
         <img src={imageSrc} alt={text} className='w-full h-48 object-cover' />
         <div className=''>
            <p className='py-3  bg-[#9C7A4D] text-gray-800 text-center font-medium text-lg'>{text}</p>

         </div>
        </div>
        
    )
}

export default Card;