import React from 'react'
import { LoginForm } from './loginform'


function LoginBox () {
  return (
    <div className='flex items-center justify-center h-full'>
        <div className='flex items-center justify-center w-96 h-96 bg-yellow-900 bg-opacity-10'>
          <LoginForm />
        </div>
    </div>
  )
}

export default LoginBox