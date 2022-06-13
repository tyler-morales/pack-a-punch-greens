/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Cross as Hamburger} from 'hamburger-react'

export const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  const [isOpen, setOpen] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    setOpen(!isOpen)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    changeWidth()

    window.addEventListener('resize', changeWidth)

    // Close mobile menu on resize (browser increases width)
    if (screenWidth > 1024) {
      setToggleMenu(false)
      setOpen(false)
    }

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [screenWidth])

  return (
    <nav
      className={`${
        toggleMenu ? 'bg-brand' : 'bg-none'
      } border-b-2 border-white transition-all`}>
      <div
        className={`${
          toggleMenu ? 'py-8' : 'py-4'
        } flex flex-col items-center justify-between max-w-5xl px-5 m-auto lg:flex-row`}>
        {/* Page links */}
        {(toggleMenu || screenWidth > 1024) && (
          <Link href="/microgreens">
            <a
              className={` ${
                toggleMenu ? 'text-white' : 'text-brand'
              } w-full px-4 py-4 text-lg text-center font-bold transition-all border-b-2 lg:border-0 border-white`}>
              Microgreens
            </a>
          </Link>
        )}

        {(toggleMenu || screenWidth > 1024) && (
          <Link href="/about">
            <a
              className={` ${
                toggleMenu ? 'text-white' : 'text-brand'
              } w-full px-4 py-4 text-lg text-center font-bold transition-all border-b-2 lg:border-0 border-white`}>
              About us
            </a>
          </Link>
        )}
        <div className="flex items-center justify-between w-full -order-1 lg:order-[unset]">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-6 m-auto group">
              <Image
                src={`/images/logo/Logo-${toggleMenu ? 'white' : 'green'}.png`}
                width={150}
                height={75}
                // layout="responsive"
                alt="Pack A Punch Logo"
              />
            </a>
          </Link>

          {/* Hamburger Menu Icon */}
          {screenWidth < 1024 && (
            <button onClick={toggleNav}>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color={`${toggleMenu ? '#fff' : '#2B9347'}`}
              />
            </button>
          )}
        </div>

        {(toggleMenu || screenWidth > 1024) && (
          <Link href="/sustainability">
            <a
              className={` ${
                toggleMenu ? 'text-white' : 'text-brand'
              } w-full px-4 py-4 text-lg text-center font-bold transition-all border-b-2 lg:border-0 border-white`}>
              Sustainability
            </a>
          </Link>
        )}
        {(toggleMenu || screenWidth > 1024) && (
          <Link href="/contact">
            <a
              className={` ${
                toggleMenu ? 'text-white' : 'text-brand'
              } w-full px-4 py-4 text-lg text-center font-bold transition-all border-b-2 lg:border-0 border-white`}>
              Contact
            </a>
          </Link>
        )}
      </div>
    </nav>
  )
}
