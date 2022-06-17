import Link from 'next/link'
import Image from 'next/image'

import {AiOutlineRight} from 'react-icons/ai'

export default function Products() {
  return (
    <section className="m-auto mt-32">
      <h2 className="px-5 m-auto text-5xl md:text-7xl max-w-7xl font-heavy">
        <span className="block">What</span>
        <span>we&#8217;re growing</span>
      </h2>

      <div className="grid grid-cols-1 mt-10 md:grid-cols-3">
        {/* Broccoli */}
        <div className="flex justify-center px-6 bg-green-100">
          <div className="w-[350px] py-20">
            <Image
              src="/images/logo/packaging-broccoli.png"
              width={300}
              height={300}
              layout="responsive"
              alt="Microgreens packaging"
            />
            <h3 className="py-1 mt-8 font-serif text-3xl text-center text-green-100 bg-green-600 rounded-lg">
              Broccoli
            </h3>
            <Link href="/microgreens">
              <a className="flex items-center justify-center mt-4 font-normal text-center text-green-800 group">
                <span>More Details</span>
                <AiOutlineRight className="transition-all group-hover:translate-x-2" />
              </a>
            </Link>
          </div>
        </div>

        {/* Radish */}
        <div className="flex justify-center px-6 bg-rose-100">
          <div className="w-[350px] py-20">
            <Image
              src="/images/logo/packaging-radish.png"
              width={300}
              height={300}
              layout="responsive"
              alt="Microgreens packaging"
            />
            <h3 className="py-1 mt-8 font-serif text-3xl text-center rounded-lg bg-rose-600 text-rose-100">
              Radish
            </h3>
            <Link href="/microgreens">
              <a className="flex items-center justify-center mt-4 font-normal text-center text-rose-800 group">
                <span>More Details</span>
                <AiOutlineRight className="transition-all group-hover:translate-x-2" />
              </a>
            </Link>
          </div>
        </div>

        {/* Arugula */}
        <div className="flex justify-center px-6 bg-green-200">
          <div className="w-[350px] py-20">
            <Image
              src="/images/logo/packaging-arugula.png"
              width={300}
              height={300}
              layout="responsive"
              alt="Microgreens packaging"
            />
            <h3 className="py-1 mt-8 font-serif text-3xl text-center text-green-200 bg-green-700 rounded-lg">
              Arugula
            </h3>
            <Link href="/microgreens">
              <a className="flex items-center justify-center mt-4 font-normal text-center text-green-800 group">
                <span>More Details</span>
                <AiOutlineRight className="transition-all group-hover:translate-x-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
