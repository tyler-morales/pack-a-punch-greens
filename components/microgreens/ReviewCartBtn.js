import {useState} from 'react'
import {useCart} from '../../hooks/useCart'
import Link from 'next/link'

export default function ReviewCartBtn() {
  const {cartItems} = useCart()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      {cartItems.length > 0 && (
        <Link href="/cart">
          <a
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
            className="fixed flex justify-center w-auto gap-2 px-4 py-4 m-auto text-white transition-all bg-blue-600 rounded-full right-10 bottom-10">
            <span>🛍</span>
            <span>{showDetails ? 'Checkout' : cartItems.length}</span>
          </a>
        </Link>
      )}
    </>
  )
}
