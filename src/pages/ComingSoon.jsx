import React from 'react'
import CountDown from '../components/Comingsoon-Components/CountDown'
import HeroText from '../components/Comingsoon-Components/HeroText'
import Waitlist from '../components/Comingsoon-Components/Waitlist'

const ComingSoon = () => {
  return (
    <main className='flex flex-col space-y-3 mx-auto max-w-7xl'> 
    <HeroText />
    <CountDown />
    <Waitlist />

    </main>
  )
}

export default ComingSoon