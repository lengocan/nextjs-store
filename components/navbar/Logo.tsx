import React from 'react'
import { Button } from '../ui/button'
import { VscCode } from "react-icons/vsc";
import Link from 'next/link';
function Logo() {
  return (
    <Button size ='icon' asChild>
      <Link href='/'>
        <VscCode className='w-6 h-6'/>
      </Link>
    </Button>
  )
}

export default Logo
