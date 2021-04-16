import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const COOKIE_NAME = 'close_feature'

export const useCloseSiteNotice = () => {
  const [siteNoticeClosed, setCloseSiteNotice] = useState(true)

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setCloseSiteNotice(false)
    }
  }, [])

  const closeSiteNotice = () => {
    setCloseSiteNotice(true)
    Cookies.set(COOKIE_NAME, 'accepted', { expires: 365 })
  }

  return {
    siteNoticeClosed,
    onCloseSiteNotice: closeSiteNotice,
  }
}
