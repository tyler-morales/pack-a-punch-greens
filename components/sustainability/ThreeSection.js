import React from 'react'

import {IconPlant, IconRocket, IconHome} from '@tabler/icons'

export default function ThreeSections() {
  return (
    <section id="vision" className="my-20 md:my-20">
      <h2 className="text-5xl md:text-7xl max-w-7xl my-10 md:my-20 font-bold">
        <span className="block">Our</span>
        <span>Vision</span>
      </h2>

      {/* Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl m-auto">
        {/* Sustainability */}
        <div className="grid md:grid-rows-vision grid-rows-vision_xs">
          {/* <Image
            src="/images/packaging-broccoli.png"
            width={300}
            height={300}
        layout="responsive"
            alt="Microgreens packaging"
          /> */}
          <div className="flex mb-4 gap-2 items-center">
            <IconPlant size={36} />
            <h3 id="community" className="text-xl uppercase font-bold">
              Community
            </h3>
          </div>
          <p className="font-medium border-b-2 border-gray-200">
            We believe in the idea of the local farmer and knowing where your
            produce comes from.
          </p>
          <ul className="font-medium text-sm list-disc mt-8 px-4 md:pt-8">
            <li className="mb-4">
              Sourcing as many of our resources from local sources
            </li>
            <li className="mb-4">
              Offering our products in nearby communities
            </li>
            <li className="mb-4">
              Being involved with community organizations and groups to educate
              our consumers
            </li>
            <li>
              Reinvesting in materials, infrastructure, and systems that are
              poised to be future proof, thus reducing the need to require more
              resources
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="grid md:grid-rows-vision grid-rows-vision_xs">
          {/* <Image
            src="/images/packaging-broccoli.png"
            width={300}
            height={300}
            layout="responsive"
            alt="Microgreens packaging"
          /> */}
          <div className="flex mb-4 gap-2 items-center">
            <IconRocket size={36} />
            <h3 id="resources" className="text-xl uppercase font-bold">
              Resources
            </h3>
          </div>
          <p className="font-medium border-b-2 border-gray-200">
            Through reusing our water and energy, we are able to reduce
            otherwise unnesessary resources
          </p>
          <ul className="font-medium text-sm list-disc mt-8 px-4 md:pt-8">
            <li className="mb-4">
              Water and energy management: Recycle and reuse water and light
              through aeroponics and reflective light shields
            </li>
            <li className="mb-4">
              Food recovery and waste management: Divert excess product to
              non-profits and compost organic waste
            </li>
            <li className="mb-4">Source compostable packaging</li>
            <li className="mb-4">
              Maximize our square footage through vertical growing racks
            </li>
          </ul>
        </div>

        {/* Technology */}
        <div className="grid md:grid-rows-vision grid-rows-vision_xs">
          {/* <Image
            src="/images/packaging-broccoli.png"
            width={300}
            height={300}
            layout="responsive"
            alt="Microgreens packaging"
          /> */}
          <div className="flex mb-4 gap-2 items-center">
            <IconHome size={36} />
            <h3 id="technology" className="text-xl uppercase font-bold">
              Technology
            </h3>
          </div>
          <p className="font-medium border-b-2 border-gray-200">
            Through practicing circular economy practices, we are consciously
            and deliberating choosing to benefit planet Earth and our local
            communities.
          </p>
          <ul className="font-medium text-sm list-disc mt-8 px-4 md:pt-8">
            <li className="mb-4 list-inside md:list-outside">
              Systemize plant growth cycles for maximum efficiency and less
              wasted product and space
            </li>
            <li className="list-inside md:list-outside">
              Program electrical consumption periods to cause less strain on the
              electrical grid and only consume as much energy as the microgreens
              require
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
