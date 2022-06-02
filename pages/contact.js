import React from 'react'

export default function contact() {
  return (
    <main className="max-w-7xl m-auto px-5">
      <h1 className="text-brand text-center text-7xl mt-10">
        Let&#8217;s get in touch
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 my-20">
        {/* General */}
        <div id="general" className="md:text-right">
          <h2 className="text-3xl">General Info</h2>
          <a
            className="font-medium text-blue-600 underline-offset-1 underline"
            href="mailto:info@packapunchgreens.com">
            info@packapunchgreens.com
          </a>
        </div>
        {/* Sales */}
        <div id="sales">
          <h2 className="text-3xl">Sales</h2>
          <a
            className="font-medium text-blue-600 underline-offset-1 underline"
            href="mailto:sales@packapunchgreens.com">
            sales@packapunchgreens.com
          </a>
        </div>
        {/* Press/ Media */}
        <div id="press" className="md:text-right">
          <h2 className="text-3xl">Press/ Media</h2>
          <a
            className="font-medium text-blue-600 underline-offset-1 underline"
            href="mailto:media@packapunchgreens.com">
            media@packapunchgreens.com
          </a>
        </div>
        {/* Feedback */}
        <div id="feedback">
          <h2 className="text-3xl">Feedback</h2>
          <a
            className="font-medium text-blue-600 underline-offset-1 underline"
            href="mailto:feedback@packapunchgreens.com">
            feedback@packapunchgreens.com
          </a>
        </div>
      </section>

      <section className="flex flex-col items-center mb-20">
        <h2 className="text-3xl mb-6">Drop us a line </h2>
        <a className="font-medium text-lg" href="tel:+7733188539">
          773.318.8539
        </a>
      </section>
    </main>
  )
}
