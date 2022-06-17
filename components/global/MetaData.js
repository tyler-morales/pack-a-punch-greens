import React from 'react'
import Head from 'next/head'

export default function MetaData({title, description}) {
  return (
    <Head>
      <title>
        {title} | {description}
      </title>
      <meta
        property="og:title"
        content={`${title} | ${description}`}
        key="title"
      />

      {/* Description */}
      <meta
        name="description"
        content="Pack A Punch Greens is a local urban farm in the Chicagoland area that sells fresh, healthy, and delicious microgreens."
      />

      <meta
        property="og:description"
        content="Pack A Punch Greens is a local urban farm in the Chicagoland area that sells fresh, healthy, and delicious microgreens."
      />

      {/* Misc */}
      <meta name="twitter:card" content="summary" />
      <meta property="og:url" content="https://packapunchgreens.com /" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/tyler-morales/pack-a-punch-greens/main/public/images/logo/Logo-green.svg"
      />
      <meta property="og:type" content="website" />
      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
  )
}
