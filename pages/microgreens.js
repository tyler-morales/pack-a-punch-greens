import Image from 'next/image'
import Link from 'next/link'

import products from '../data/products.json'

export default function microgreens() {
  return (
    <main className="px-5 m-auto my-10 max-w-7xl md:my-20">
      <h1 className="text-5xl font-bold text-brand md:text-7xl">
        <span>Get</span> <span>Your Microgreens</span>
      </h1>

      <section className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        {products.map((product) => {
          const {
            id,
            title,
            description,
            image,
            price,
            altText,
            color,
            colorDark,
          } = product
          return (
            <div
              style={{background: color}}
              key={id}
              id={title.toLowerCase()}
              className="flex justify-center px-6 rounded">
              <div className="w-[350px] py-20">
                <Image
                  src={image}
                  width={300}
                  height={300}
                  layout="responsive"
                  alt={altText}
                />
                <h3
                  style={{background: colorDark}}
                  className={`py-1 mt-8 font-serif text-3xl text-center text-white rounded-lg`}>
                  {title}
                </h3>
                <p className="mt-6 font-medium">{description}</p>
                <h4 className="mt-6 text-lg font-bold">
                  ${price} per 2oz container
                </h4>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
