import React from 'react'
import { LoginForm } from './loginform'


function LoginBox () {
  return (
    <div className='flex items-center justify-center h-full'>
        <div className='flex items-center justify-center w-[28rem] h-[27rem] bg-yellow-900 bg-opacity-10 ml-2'>
          <LoginForm />
        </div>
    </div>
  )
}

export default LoginBox