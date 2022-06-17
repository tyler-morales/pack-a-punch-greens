import React from 'react'
import MetaData from '../components/global/MetaData'

export default function contact() {
  return (
    <>
      <MetaData title="🌱 Contact" description="Pack A Punch Greens" />
      <main className="px-5 m-auto max-w-7xl">
        <h1 className="mt-10 font-black text-center text-brand text-7xl">
          Let&#8217;s get in touch
        </h1>

        <section className="grid grid-cols-1 gap-16 my-20 md:grid-cols-2">
          {/* General */}
          <div id="general" className="md:text-right">
            <h2 className="text-3xl font-bold ">General Info</h2>
            <a
              className="font-medium text-blue-600 underline underline-offset-1"
              href="mailto:info@packapunchgreens.com">
              info@packapunchgreens.com
            </a>
          </div>
          {/* Sales */}
          <div id="sales">
            <h2 className="text-3xl font-bold ">Sales</h2>
            <a
              className="font-medium text-blue-600 underline underline-offset-1"
              href="mailto:sales@packapunchgreens.com">
              sales@packapunchgreens.com
            </a>
          </div>
          {/* Press/ Media */}
          <div id="press" className="md:text-right">
            <h2 className="text-3xl font-bold ">Press/ Media</h2>
            <a
              className="font-medium text-blue-600 underline underline-offset-1"
              href="mailto:media@packapunchgreens.com">
              media@packapunchgreens.com
            </a>
          </div>
          {/* Feedback */}
          <div id="feedback">
            <h2 className="text-3xl font-bold ">Feedback</h2>
            <a
              className="font-medium text-blue-600 underline underline-offset-1"
              href="mailto:feedback@packapunchgreens.com">
              feedback@packapunchgreens.com
            </a>
          </div>
        </section>

        <section className="flex flex-col items-center mb-20 font-bold">
          <h2 className="mb-6 text-3xl">Drop us a line </h2>
          <a className="text-lg font-medium" href="tel:+7733188539">
            773.318.8539
          </a>
        </section>
      </main>
    </>
  )
}
