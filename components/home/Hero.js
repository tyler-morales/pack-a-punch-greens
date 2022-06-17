import Image from 'next/image'

export default function Hero() {
  return (
    <section className="px-5 m-auto mt-6 md:mt-10 max-w-7xl">
      <h1 className="font-serif text-5xl font-bold text-center md:text-7xl">
        Microgreens
      </h1>
      <div className="max-w-2xl m-auto">
        <Image
          src="/images/products/packaging-broccoli.png"
          width={300}
          height={300}
          layout="responsive"
          alt="Microgreens packaging"
        />
      </div>
    </section>
  )
}
