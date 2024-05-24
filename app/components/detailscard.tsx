import React from 'react'

interface UserProps {
    icon: string;
    text: string;
    variable: string;

  }
  

const DetailsCard: React.FC<UserProps> = ({ icon, text, variable }) => {

  return (
    <div className='flex items-center mb-1'>
        <img className="w-5 h-5" src={icon}></img>
        <div className=" text-sm font font-bold pl-6">{text}</div>
        <div className="pl-1">{variable}</div>
    </div>
  )
}

export default DetailsCard