import React from 'react'

import {IconPlant, IconRocket, IconHome} from '@tabler/icons'

export default function ThreeSections() {
  return (
    <section id="vision" className="my-20 md:my-40 px-8">
      <h2 className="text-5xl md:text-7xl max-w-7xl m-auto my-10 md:my-20">
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
            <h3 className="text-xl uppercase">Sustainability</h3>
          </div>
          <p className="font-medium border-b-2 border-gray-200">
            Through practicing circular economy practices, we are consciously
            and deliberating choosing to benefit planet Earth and our local
            communities.
          </p>
          <ul className="font-medium text-sm list-disc mt-8 px-4 md:pt-8">
            <li className="mb-4">
              Our energy efficient systems reduce energy resources while also
              recapturing and recycling current resources
            </li>
            <li className="mb-4">
              Our waste diversion processes recycle waste back into our closed
              system loop through composting organic waste and packaging
            </li>
            <li className="mb-4">
              Maintaining local delivery stations to ensure quality and fresh
              microgreens
            </li>
            <li>
              Reinvesting in materials, infrastructure, and systems that are
              poised to be future proof, thus reducing the need to require more
              resources
            </li>
          </ul>
        </div>
        {/* Innovation */}
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
            <h3 className="text-xl uppercase">Innovation</h3>
          </div>
          <p className="font-medium border-b-2 border-gray-200">
            Through practicing circular economy practices, we are consciously
            and deliberating choosing to benefit planet Earth and our local
            communities.
          </p>
          <ul className="font-medium text-sm list-disc mt-8 px-4 md:pt-8">
            <li>
              Our lab continually experiments with new materials, growth cycles,
              and technology to become more efficient with energy and product
              yields
            </li>
          </ul>
        </div>
        {/* Community */}
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
            <h3 className="text-xl uppercase">Community</h3>
          </div>
          <p className="font-medium border-b-2 border-gray-200">
            We believe in the idea of the local farmer and knowing where your
            produce comes from.
          </p>
          <ul className="font-medium text-sm list-disc mt-8 px-4 md:pt-8">
            <li className="mb-4 list-inside md:list-outside">
              Our local urban farm enables us to deliver fresh and nutritious
              microgreens to get to know are customers on a personal level
            </li>
            <li className="list-inside md:list-outside">
              Our proximity to a large city allows us to deliver otherwise
              imported microgreens using zero emission transportation
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
