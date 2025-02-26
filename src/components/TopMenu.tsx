'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaShopLock } from 'react-icons/fa6'
import { IoHomeOutline, IoPeopleOutline } from 'react-icons/io5'

export const TopMenu = () => {
  const logo = '/imgs/logoWeb.png'
  const pathName = usePathname()

  const [bgColor, setBgColor] = useState('bg-none')
  const fixedScrollThreshold = 0.5 // 1% scroll threshold

  const isProductDetail = /^\/products\/\d+$/.test(pathName) // check if the current path is a product detail page

  const handleScroll = () => {
    // calculate the vertical scroll percentage
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    setBgColor(scrolled > fixedScrollThreshold ? 'bg-slate-800' : 'bg-none') // change the background color if the percentage is greater than the fixed value
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll) // add the event listener for the scroll

    return () => {
      window.removeEventListener('scroll', handleScroll) // delete the event listener when the component is unmounted
    }
  }, [])

  return (
    <div className={`w-full fixed top-0 z-20 text-white ${isProductDetail ? 'bg-slate-800' : bgColor} transition-colors duration-300 py-1`}>
      <header className="container mx-auto lg:px-20 px-4 py-1 flex justify-between items-center">
        <Link href={'/'}>
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="logo" width={291} height={366} className='w-14 ' />
          </div>
        </Link>
        <nav>
          <ul className="space-x-4 flex">
            <li>
              <Link href="/" className="hover:text-slate-200 transition-transform flex items-center space-x-2">
                <IoHomeOutline size={18} />
                <span className='hidden sm:inline'>
                  Inicio
                </span>
              </Link>
            </li>
            <li>
              <Link href="/memberships" className="hover:text-slate-200 transition-transform flex items-center space-x-2">
                <IoPeopleOutline size={20} />
                <span className='hidden sm:inline'>
                  Membresías
                </span>
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-slate-200 transition-transform flex items-center space-x-2">
                <FaShopLock size={17} />
                <span className='hidden sm:inline'>
                  Dispensario digital
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}