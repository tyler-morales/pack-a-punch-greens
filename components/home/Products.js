import Link from 'next/link'
import Image from 'next/image'

import {AiOutlineRight} from 'react-icons/ai'

export default function Products() {
  return (
    <section className="m-auto mt-32">
      <h2 className="text-5xl md:text-7xl max-w-7xl m-auto px-5">
        <span className="block">What</span>
        <span>we&#8217;re growing</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
        {/* Broccoli */}
        <div className="bg-green-100 flex justify-center px-6">
          <div className="w-[350px] py-20">
            <Image
              src="/images/packaging-broccoli.png"
              width={300}
              height={300}
              layout="responsive"
              alt="Microgreens packaging"
            />
            <h3 className="text-3xl font-serif bg-green-600 text-green-100 rounded-lg text-center mt-8 py-1">
              Broccoli
            </h3>
            <Link href="/microgreens">
              <a className="font-normal text-green-800 text-center mt-4 flex items-center justify-center group">
                <span>More Details</span>
                <AiOutlineRight className="group-hover:translate-x-2 transition-all" />
              </a>
            </Link>
          </div>
        </div>

        {/* Radish */}
        <div className="bg-rose-100 flex justify-center px-6">
          <div className="w-[350px] py-20">
            <Image
              src="/images/packaging-radish.png"
              width={300}
              height={300}
              layout="responsive"
              alt="Microgreens packaging"
            />
            <h3 className="text-3xl font-serif bg-rose-600 text-rose-100 rounded-lg text-center mt-8 py-1">
              Radish
            </h3>
            <Link href="/microgreens">
              <a className="font-normal text-rose-800 text-center mt-4 flex items-center justify-center group">
                <span>More Details</span>
                <AiOutlineRight className="group-hover:translate-x-2 transition-all" />
              </a>
            </Link>
          </div>
        </div>
   
        {/* Arugula */}
        <div className="bg-green-200 flex justify-center px-6">
          <div className="w-[350px] py-20">
            <Image
              src="/images/packaging-arugula.png"
              width={300}
              height={300}
              layout="responsive"
              alt="Microgreens packaging"
            />
            <h3 className="text-3xl font-serif bg-green-700 text-green-200 rounded-lg text-center mt-8 py-1">
              Arugula
            </h3>
            <Link href="/microgreens">
              <a className="font-normal text-green-800 text-center mt-4 flex items-center justify-center group">
                <span>More Details</span>
                <AiOutlineRight className="group-hover:translate-x-2 transition-all" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
