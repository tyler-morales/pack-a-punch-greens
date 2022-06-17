/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {Cross as Hamburger} from 'hamburger-react'
import {FiShoppingCart} from 'react-icons/fi'

import {useCart} from '../../hooks/useCart'

export const Nav = () => {
  const router = useRouter()
  const {subtotal, quantity, checkout} = useCart()

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
    // Nav wrapper
    <nav
      className={`${
        toggleMenu ? 'bg-brand' : 'bg-none'
      } border-b-2 border-white transition-all`}>
      {/* Nav Items */}
      <div
        className={`${
          toggleMenu ? 'py-8 items-start' : 'py-4 items-center'
        } flex justify-between max-w-7xl px-5 m-auto lg:flex-row`}>
        <div
          className={`flex items-center gap-2 ${toggleMenu ? 'flex-col' : ''} ${
            screenWidth < 1024 ? 'order-2' : ''
          }`}>
          {/* Home page */}
          <Link href="/">
            <a className="flex">
              <Image
                src={`/images/logo/Logo-${toggleMenu ? 'white' : 'green'}.png`}
                width={150}
                height={75}
                // layout="responsive"
                alt="Pack A Punch Logo"
              />
            </a>
          </Link>
          {/* Pages */}

          {/* Microgreens Page */}
          {(toggleMenu || screenWidth > 1024) && (
            <Link href="/microgreens">
              <a
                className={` ${
                  toggleMenu
                    ? 'text-white text-center w-full'
                    : 'text-brand ml-8'
                } ${
                  router.pathname == '/microgreens' && !toggleMenu
                    ? 'bg-green-200 rounded-md'
                    : ''
                } px-6 py-2 text-lg text-center font-bold transition-all border-b-2 lg:border-0 border-white`}>
                Microgreens
              </a>
            </Link>
          )}
          {/* About Page */}
          {(toggleMenu || screenWidth > 1024) && (
            <Link href="/about">
              <a
                className={` ${
                  toggleMenu ? 'text-white text-center w-full' : 'text-brand'
                } ${
                  router.pathname == '/about' && !toggleMenu
                    ? 'bg-green-200 rounded-md'
                    : ''
                } px-6 py-2 text-lg text-center font-bold transition-all border-b-2 lg:border-0 border-white`}>
                About us
              </a>
            </Link>
          )}
          {/* Sustainability Page */}
          {(toggleMenu || screenWidth > 1024) && (
            <Link href="/sustainability">
              <a
                className={` ${
                  toggleMenu ? 'text-white text-center w-full' : 'text-brand'
                } ${
                  router.pathname == '/sustainability' && !toggleMenu
                    ? 'bg-green-200 rounded-md'
                    : ''
                } px-6 py-2 text-lg font-bold transition-all border-b-2 lg:border-0 border-white`}>
                Sustainability
              </a>
            </Link>
          )}
          {/* Contact Page */}
          {(toggleMenu || screenWidth > 1024) && (
            <Link href="/contact">
              <a
                className={` ${
                  toggleMenu ? 'text-white text-center w-full' : 'text-brand'
                }  ${
                  router.pathname == '/contact' && !toggleMenu
                    ? 'bg-green-200 rounded-md'
                    : ''
                } px-6 py-2 text-lg text-center font-bold transition-all border-b-2 lg:border-0 border-white`}>
                Contact
              </a>
            </Link>
          )}
        </div>

        <Link href="/cart">
          <a
            className={` ${
              toggleMenu ? 'text-white' : 'text-brand right-0 z-50'
            }  ${router.pathname == '/cart' ? 'bg-green-200 rounded-md' : ''} ${
              screenWidth < 1024 ? '' : 'px-6'
            } py-2 text-lg text-center font-bold transition-all`}>
            <div className="flex items-center gap-3">
              <FiShoppingCart size="1.25em" />
              <span>Cart</span>
              {quantity > 0 && (
                <span className="px-2 bg-green-200 rounded-full text-brand">
                  {quantity} | ${subtotal}
                </span>
              )}
            </div>
          </a>
        </Link>

        {/* Hamburger Menu Icon */}
        {screenWidth < 1024 && (
          <button
            onClick={toggleNav}
            className={`${screenWidth < 1024 ? 'order-2' : ''}`}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color={`${toggleMenu ? '#fff' : '#2B9347'}`}
            />
          </button>
        )}
      </div>
    </nav>
  )
}
