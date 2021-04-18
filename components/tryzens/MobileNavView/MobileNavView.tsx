import { FC } from 'react'
import cn from 'classnames'
import { UserNav } from '@components/common'
import { Link } from '@components/ui'
import { Bag, Cross, Check } from '@components/icons'
import { useUI } from '@components/ui/context'
import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/use-price'
import s from './MobileNavView.module.css'
import MobileNavData from './MobileNavData'

const MobileNavView: FC = () => {
  const { closeMobileNavbar } = useUI()
  const { data, isEmpty } = useCart()
  const { price: subTotal } = usePrice(
    data && {
      amount: data.base_amount,
      currencyCode: data.currency.code,
    }
  )
  const { price: total } = usePrice(
    data && {
      amount: data.cart_amount,
      currencyCode: data.currency.code,
    }
  )
  const handleClose = () => closeMobileNavbar()

  const items = data?.line_items.physical_items ?? []

  const error = null
  const success = null

  return (
    <div
      className={cn(s.root, {
        [s.empty]: error,
        [s.empty]: success,
        [s.empty]: isEmpty,
      })}
    >
      <header className="px-2 pt-6 pb-4">
        <div className="flex flex-col items-end space-x-3">
          <div className="h-7 flex items-center">
            <button
              onClick={handleClose}
              aria-label="Close panel"
              className="hover:text-gray-500 transition ease-in-out duration-150"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <div className="flex-1">
        <ul className="bg-primary">
          {MobileNavData.map((node: any) => (
            <li className="bg-gray-300 hover:bg-gray-200 m-2 w-64 justify-between text-xl bold p-3">
              <Link href={node.link}>
                <a className="block">{node.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNavView
