import { Input, Button, Link } from '../../ui';
import {RightArrow} from '../../icons';

const NewsletterSignupForm = (props) => {
  return (
    <form action="#" className="w-100 flex-col">
      <div className="">
        <label
          className="block text-sm font-semibold pb-2 text-gray-700"
          htmlFor="email"
        >
          Subscribe To Our Newsletter and Receive 10% Off Your First Order
        </label>
        <div className="flex relative">
          <Input className="w-96" placeholder="Enter your email" />
          <div className="relative -inset-x-5">
            <Button>
              <RightArrow />
            </Button>
          </div>
        </div>
      </div>
      <input type="checkbox"></input>{' '}
      <span className="text-xs text-gray-700">
        By ticking this box I agree that I would like to be kept informed about
        Jurlique's products and promotions in accordance with the{' '}
        <Link
          href="/privacy"
          className="semibold underline text-maroon hover:text-pink"
        >
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link
          href="/terms"
          className="semibold underline text-maroon hover:text-pink"
        >
          Terms &amp; Conditions of Sale
        </Link>{' '}
        and understand that I can opt out at any time.
      </span>
    </form>
  )
}

export default NewsletterSignupForm;
