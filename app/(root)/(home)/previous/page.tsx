import CallList from '@/components/CallList'
import React from 'react'

const Previous = () => {
  return (
    <section className='flex size-full text-white flex-col gap-10'>
      <h1 className='text-xl font-bold'>
        Previous Meetings
      </h1>
      <CallList type="ended" />
    </section>
  )
}

export default Previous