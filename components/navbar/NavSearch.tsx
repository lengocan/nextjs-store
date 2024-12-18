'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get("search")?.toString() || "")
  const handleSearch = useDebouncedCallback((value: string) => {

  }, 500)
  return (
    <Input type="search" placeholder='search product ...' className='max-w-xs dark:bg-muted' onChange={(e) => {
      setSearch(e.target.value)
      handleSearch(e.target.value)
    }} />
  )
}

export default NavSearch

// {cn('w-50')}