import Image from 'next/image'
import {useCart} from '../../hooks/useCart'

export default function ProductCard({products}) {
  const {addToCart, cartItems} = useCart()

  const findProductByID = (id) => {
    return cartItems.find((item) => id == item.id)
  }

  return (
    <>
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
            <div className="w-[350px] py-20 grid-rows-product_card grid">
              <Image
                src={image}
                width={300}
                height={300}
                layout="responsive"
                alt={altText}
              />
              <h3
                style={{color: colorDark}}
                className="font-serif text-3xl text-center rounded-lg">
                {title}
              </h3>
              <p className="mt-6 font-medium">{description}</p>
              <button
                onClick={() => addToCart({id})}
                className={`w-full py-2 mt-4 font-bold text-center  rounded-lg border-2 border-green-600 ${
                  findProductByID(id)?.quantity > 0
                    ? 'bg-green-600 text-white'
                    : 'text-green-600 '
                }`}>
                {findProductByID(id)
                  ? `Added to cart Qty: ${findProductByID(id).quantity} `
                  : 'Start a subscription'}
              </button>
              <p className="mt-4 text-sm font-medium text-center">
                Starting at ${price} per 2oz container
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}
