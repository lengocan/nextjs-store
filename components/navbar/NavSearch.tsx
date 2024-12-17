import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import React from 'react'

function NavSearch() {
  return (
    <Input type="search" placeholder='search product ...' className='max-w-xs dark:bg-muted' />

  )
}

export default NavSearch

// {cn('w-50')}