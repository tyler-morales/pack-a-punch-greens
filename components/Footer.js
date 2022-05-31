import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand">
      <div className="max-w-sm md:max-w-7xl m-auto py-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <a className="">
              <Image
                src="/images/logo-white.svg"
                width={150}
                height={75}
                // layout="responsive"
                alt="Pack A Punch Logo"
              />
            </a>
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 justify-items-center mt-8 gap-y-8 md:grid-cols-4">
          {/* Microgreens */}
          <div className="flex flex-col gap-2">
            <Link href="/microgreens">
              <a className="text-white font-bold uppercase">Microgreens</a>
            </Link>
            <Link href="/microgreens/broccoli">
              <a className="text-white font-normal">Broccoli</a>
            </Link>
            <Link href="/microgreens/radish">
              <a className="text-white font-normal">Radish</a>
            </Link>
            <Link href="/microgreens/arugula">
              <a className="text-white font-normal">Arugula</a>
            </Link>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-2">
            <Link href="/about-us">
              <a className="text-white font-bold uppercase">About us</a>
            </Link>
            <Link href="/about/mission">
              <a className="text-white font-normal">Mission</a>
            </Link>
            <Link href="/about/microgreens">
              <a className="text-white font-normal">Microgreens</a>
            </Link>
            <Link href="/about/vision">
              <a className="text-white font-normal">Vision</a>
            </Link>
            <Link href="/about/technology">
              <a className="text-white font-normal">technology</a>
            </Link>
          </div>

          {/* Sustainability */}
          <div className="flex flex-col gap-2">
            <Link href="/sustainability">
              <a className="text-white font-bold uppercase">Sustainability</a>
            </Link>
            <Link href="/sustainability/community">
              <a className="text-white font-normal">Community</a>
            </Link>
            <Link href="/sustainability/resources">
              <a className="text-white font-normal">Resources</a>
            </Link>
            <Link href="/sustainability/technology">
              <a className="text-white font-normal">Technology</a>
            </Link>
            <Link href="/sustainability/circular-economy">
              <a className="text-white font-normal">Circular Economy</a>
            </Link>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-2">
            <Link href="/about">
              <a className="text-white font-bold uppercase">Contact</a>
            </Link>
            <Link href="/contact/general">
              <a className="text-white font-normal">General</a>
            </Link>
            <Link href="/contact/press">
              <a className="text-white font-normal">Press/ Media</a>
            </Link>
            <Link href="/contact/sales">
              <a className="text-white font-normal">Sales</a>
            </Link>
            <Link href="/contact/feedback">
              <a className="text-white font-normal">Feedback</a>
            </Link>
          </div>
        </div>

        <h5 className="font-normal text-white text-center text-xs mt-10 block">
          © 2022 PACK A PUNCH GREENS LLC
        </h5>
      </div>
    </footer>
  )
}
