import Link from 'next/link'
import Image from 'next/image'

export default function QuickInfo() {
  return (
    <>
      {/* Fist section */}
      <section className="px-5 bg-blue-100 lg:py-10 h-screen lg:h-[90vh] flex items-center lg:m-10 lg:rounded-3xl">
        <div className="text-center max-w-7xl m-auto">
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="max-w-lg">
              <h2 className="font-serif font-bold text-5xl md:text-left">
                They&#8217;re tiny vegetables and herbs
              </h2>
              <p className="font-medium mt-6 md:text-left">
                Grown 7–12 days in an urban aeroponic farm
              </p>
            </div>

            {/* Image */}
            <div className="md:-order-1">
              <Image
                className="rounded-xl"
                src="/images/home-01.jpg"
                width={1600}
                height={900}
                layout="responsive"
                alt="Microgreens packaging"
              />
            </div>
          </div>

          {/* Button */}
          <Link href="/microgreens">
            <a className="w-[150px] m-auto font-bold border-blue-500 text-blue-600 border-2 rounded-full px-4 py-2 mt-16 block hover:bg-blue-500 hover:text-white transition-all">
              Learn More
            </a>
          </Link>
        </div>
      </section>

      {/* Second section */}

      <section className="px-5 bg-green-100 lg:py-10 h-screen lg:h-[90vh] flex items-center lg:m-10 lg:rounded-3xl">
        <div className="text-center max-w-7xl m-auto">
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="max-w-lg">
              <h2 className="font-serif font-bold text-4xl md:text-5xl md:text-right">
                Nutritionally dense and intensely flavorfull
              </h2>
              <p className="font-medium mt-6 md:text-right">
                Contains 40–100x more vitamins that their adult counterparts*
              </p>

              <p className="font-medium mt-2 md:text-right">
                Packs a a powerfull flavor to each leaf
              </p>
            </div>

            {/* Image */}
            <div className="">
              <Image
                className="rounded-xl"
                src="/images/home-01.jpg"
                width={1600}
                height={900}
                layout="responsive"
                alt="Microgreens packaging"
              />
            </div>
          </div>

          {/* Button */}
          <Link href="/microgreens">
            <a className="w-[150px] m-auto font-bold border-green-500 text-green-600 border-2 rounded-full px-4 py-2 mt-16 block hover:bg-green-500 hover:text-white transition-all">
              Learn More
            </a>
          </Link>
        </div>
      </section>

      {/* Fist section */}
      <section className="px-5 bg-orange-100 lg:py-10 h-screen lg:h-[90vh] flex items-center lg:m-10 lg:rounded-3xl">
        <div className="text-center max-w-7xl m-auto">
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="max-w-lg">
              <h2 className="font-serif font-bold text-4xl md:text-5xl md:text-left">
                Grown sustainably and environmentally responsible
              </h2>
              <p className="font-medium mt-6 md:text-left">
                Contains 40–100x more vitamins that their adult counterparts*
              </p>

              <p className="font-medium mt-2 md:text-left">
                Partners with local communities and business
              </p>
            </div>

            {/* Image */}
            <div className="md:-order-1">
              <Image
                className="rounded-xl"
                src="/images/home-01.jpg"
                width={1600}
                height={900}
                layout="responsive"
                alt="Microgreens packaging"
              />
            </div>
          </div>

          {/* Button */}
          <Link href="/microgreens">
            <a className="w-[150px] m-auto font-bold border-orange-500 text-orange-600 border-2 rounded-full px-4 py-2 mt-16 block hover:bg-orange-500 hover:text-white transition-all">
              Learn More
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}
