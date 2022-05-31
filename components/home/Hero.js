import Image from 'next/image'

export default function Hero() {
  return (
    <section className="mt-6 md:mt-10 max-w-7xl m-auto px-5">
      <h1 className="text-center text-5xl font-serif font-bold md:text-7xl">
        Microgreens
      </h1>
      <div className="max-w-2xl m-auto">
        <Image
          src="/images/packaging-broccoli.png"
          width={300}
          height={300}
          layout="responsive"
          alt="Microgreens packaging"
        />
      </div>
    </section>
  )
}
