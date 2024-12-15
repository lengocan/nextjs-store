import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import React from 'react'

function NavSearch() {
  return (
    <Input type="search" placeholder='search product ...' className={cn('w-50')} />
      
  )
}

export default NavSearch
