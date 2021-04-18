import { FC, useState } from 'react'
import cn from 'classnames'
import type { Page } from '@framework/api/operations/get-all-pages'
import { Link } from '@components/ui'
import { Container } from '@components/ui'
import s from './Footer.module.css'
import CardStrip from './CardStrip'
import NewsletterSignupForm from './NewsletterSignup'
import SecurityBadge from './SecurityBadge'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const socialLinks = {
  facebook: 'https://www.facebook.com/Jurlique.au/',
  instagram: 'https://www.instagram.com/jurlique/',
  youtube: 'https://www.youtube.com/user/JurliqueAUS/',
}

const footerMenu = [
  {
    label: 'Contact Us',
    children: [
      {
        label: 'Find a Store',
        link: '/store-locator',
      },
      {
        label: 'Contact Us Online',
        link: '/contact-us',
      },
      {
        label: 'COVID-19 Statement',
        link: '/covid-19',
      },
    ],
  },
  {
    label: 'Customer Service',
    children: [
      {
        label: 'Product Recall',
        link: '/product-recall',
      },
      {
        label: 'Returns and Exchanges',
        link: '/returns-and-exchanges',
      },
      {
        label: 'Shipping and Delivery',
        link: '/shipping-and-delivery',
      },
      {
        label: 'About My Account',
        link: '/about-my-account',
      },
      {
        label: 'Customer FAQ',
        link: '/customer-faq',
      },
      {
        label: 'Gift Card Offer T & Cs',
        link: '/gift-card-and-offer-tc',
      },
    ],
  },
  {
    label: 'About Tryzens',
    children: [
      {
        label: 'Our Work',
        link: '/our-work',
      },
      {
        label: 'Our Commitment',
        link: '/our-commitment',
      },
      {
        label: 'Our Method',
        link: '/our-method',
      },
      {
        label: 'Our Careers',
        link: '/our-careers',
      },
    ],
  },
]

const UpDownArrow = ({ open }) => {
  if (open) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-8 w-8 stroke-1 lg:hidden"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    )
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-8 w-8 stroke-1 lg:hidden"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    )
  }
}

const FooterChildren = ({ children }) => {
  if (!children || !children.length) {
    return null
  }

  return (
    <ul className="flex flex-col">
      {children.map((node: any) => (
        <Link href={node.link}>
          <span className={s.link}>{node.label}</span>
        </Link>
      ))}
    </ul>
  )
}

const FooterMenuTitle = (props) => {
  const { nav, onClick } = props
  if (nav.link) {
    return (
      <h3 className="text-lg hover:text-pink font-bold hover:underline text-gray-700 link  border-gray-900">
        <Link href={nav.link}>{nav.label}</Link>
      </h3>
    )
  } else {
    return (
      <h3 className="text-lg text-gray-700 font-bold link border-gray-900">
        <span className="cursor-pointer" onClick={onClick}>
          {nav.label}
        </span>
      </h3>
    )
  }
}

const FooterMenu = (props: any) => {
  const { children, nav, className } = props
  const [open, setOpen] = useState(true)
  const myClass = cn(
    'border-gray-700 border-t py-2 mx-5 lg:border-0',
    className
  )

  return (
    <div className={myClass}>
      <div className="flex justify-between">
        <FooterMenuTitle nav={nav} onClick={() => setOpen(!open)} />
        {(nav.children || children) && (
          <span onClick={() => setOpen(!open)}>
            <UpDownArrow open={open} />
          </span>
        )}
      </div>
      {open && <FooterChildren children={nav.children} />}
      {open && children}
    </div>
  )
}

const Footer: FC<Props> = ({ className, pages }) => {
  const rootClassName = cn(className)

  return (
    <footer className="bg-yellow">
      <Container>
        <div className="flex flex-col pt-5 px-5 md:flex-row">
          <NewsletterSignupForm />

          <div id="socialLinks" className="flex p-5 justify-between md:w-full">
            <span className="text">Get Social</span>
            <Link href={socialLinks.facebook}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </Link>
            <Link href={socialLinks.instagram}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link href={socialLinks.youtube}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </Link>
          </div>
        </div>
        <div
          id="footerContainer"
          className="flex flex-col lg:flex-row lg:justify-between"
        >
          {footerMenu.map((navItem) => (
            <FooterMenu nav={navItem} />
          ))}
          <FooterMenu
            className="border-b lg:border-0"
            nav={{ label: 'Preferences' }}
          >
            <span>Hello World</span>
          </FooterMenu>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:align-middle">
          <CardStrip />
          <div className="flex justify-center">
            <SecurityBadge />
          </div>
        </div>
      </Container>
      <div className="bg-secondary text-white text-sm p-5">
        <Container>
          <div className="flex flex-col">
            <span className="flex justify-center">
              2021 &#169; Tryzens. All Rights Reserved.
            </span>
            <ul className="flex flex-row justify-center">
              <li className="pr-2">
                <Link href="/terms-and-conditions">
                  <span className="hover:text-pink hover:underline">
                    Terms and Conditions
                  </span>
                </Link>
              </li>
              <li className="pr-2">
                <Link href="/privacy">
                  <span className="hover:text-pink hover:underline">
                    Privacy
                  </span>
                </Link>
              </li>
            </ul>
            <span className="flex justify-center">Melbourne, Australia</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
