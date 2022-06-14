import {FaShoppingCart} from 'react-icons/fa'

import {useCart} from '../hooks/useCart'

import products from '../data/products.json'

import Table from '../components/global/Table'

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name',
  },
  {
    columnId: 'quantity',
    Header: 'Quantity',
  },
  {
    columnId: 'pricePerUnit',
    Header: 'Price Per Item',
  },
  {
    columnId: 'total',
    Header: 'Item Total',
  },
]

export default function Home() {
  const {cartItems, checkout, updateItem} = useCart()

  const data = cartItems.map(({id, quantity, pricePerUnit}) => {
    const product = products.find(({id: pid}) => pid === id)
    const {title} = product || {}

    const Quantity = () => {
      function handleOnSubmit(e) {
        e.preventDefault()

        const {currentTarget} = e
        const inputs = Array.from(currentTarget.elements)
        const quantity = inputs.find(
          (input) => input.name === 'quantity'
        )?.value

        updateItem({
          id,
          quantity: quantity && parseInt(quantity),
        })
      }

      return (
        <form onSubmit={handleOnSubmit}>
          <input
            name="quantity"
            type="number"
            min={0}
            defaultValue={quantity}
          />
          <button>Update</button>
        </form>
      )
    }

    return {
      id,
      title,
      quantity: <Quantity />,
      pricePerUnit: pricePerUnit,
      total: quantity * pricePerUnit,
    }
  })

  return (
    <div>
      <main>
        <Table data={data} columns={columns} />

        <p>
          <button onClick={checkout}>Check Out</button>
        </p>
      </main>
    </div>
  )
}
