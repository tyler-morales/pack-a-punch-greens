import Image from 'next/image'
import Link from 'next/link'

export default function microgreens() {
  return (
    <main className="max-w-7xl m-auto px-5 my-10 md:my-20">
      <h1 className="text-brand text-5xl md:text-7xl font-bold">
        <span>Get</span> <span>Your Microgreens</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
        {/* Broccoli */}
        <div id="broccoli" className="bg-green-100 flex justify-center px-6">
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
            <p className="font-medium mt-6">
              One of the most nutritious microgreens, broccoli is a great source
              of sulforaphane
            </p>
            <h4 className="font-bold text-lg mt-6">$7 per 2oz container</h4>
          </div>
        </div>

        {/* Radish */}
        <div id="radish" className="bg-rose-100 flex justify-center px-6">
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
            <p className="font-medium mt-6">
              Add a little bit of spice to any meal. Pair Perfectly on
              sandwhiches, burgers, eggs, and more
            </p>
            <h4 className="font-bold text-lg mt-6">$7 per 2oz container</h4>
          </div>
        </div>

        {/* Arugula */}
        <div id="arugula" className="bg-green-200 flex justify-center px-6">
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
            <p className="font-medium mt-6">
              A small, but mighty little arugula packs a punch. It is a great on
              steaks and salads
            </p>
            <h4 className="font-bold text-lg mt-6">$7 per 2oz container</h4>
          </div>
        </div>
      </div>
      {/* Salad Mix */}
      <div id="salad-mix" className="bg-orange-200 flex justify-center px-6">
        <div className="w-[350px] py-20">
          <Image
            src="/images/packaging-salad.png"
            width={300}
            height={300}
            layout="responsive"
            alt="Microgreens packaging"
          />
          <h3 className="text-3xl font-serif bg-orange-600 text-orange-200 rounded-lg text-center mt-8 py-1">
            Salad Mix
          </h3>
          <p className="font-medium mt-6">
            A salad mix is a great way to add a little bit of freshness to your
            meal. Try our mix of broccoli, arugula, and radish
          </p>
          <h4 className="font-bold text-lg mt-6">$18 for 3, 2oz container</h4>
        </div>
      </div>
    </main>
  )
}
