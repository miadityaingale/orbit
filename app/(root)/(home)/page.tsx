import MeetingTypeList from '@/components/MeetingTypeList';
// import React from 'react'

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit'});
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full'})).format(now);
  return (
    <section className='flex size-full text-white flex-col gap-6'>
      <div className='h-[250px] w-full rounded bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[280px] rounded py-2 text-center text-base font-normal'>
            Upcomming Meeting in 12:30 PM
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl font-bold lg:text-5xl'>{time}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-1xl'>{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home