'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const TopMenu = () => {
  const logo = '/imgs/logoWeb.png'

  const [bgColor, setBgColor] = useState('bg-none')
  const fixedScrollThreshold = 0.5 // 1% scroll threshold

  const handleScroll = () => {
    // calculate the vertical scroll percentage
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    setBgColor(scrolled > fixedScrollThreshold ? 'bg-green-600' : 'bg-none') // change the background color if the percentage is greater than the fixed value
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll) // add the event listener for the scroll

    return () => {
      window.removeEventListener('scroll', handleScroll) // delete the event listener when the component is unmounted
    }
  }, [])

  return (
    <div className={`w-full fixed top-0 z-20 text-white ${bgColor} transition-colors duration-300`}>
      <header className="container mx-auto lg:px-20 px-4 py-1 flex justify-between items-center">
        <Link href={'/'}>
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="logo" width={291} height={366} className='w-14 ' />
          </div>
        </Link>
        <nav>
          <ul className="space-x-4 flex">
            <li><Link href="/" className="hover:text-green-200 transition-transform">Inicio</Link></li>
            <li><Link href="/memberships" className="hover:text-green-200 transition-transform">Membresías</Link></li>
            <li><Link href="/products" className="hover:text-green-200 transition-transform">Productos</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}