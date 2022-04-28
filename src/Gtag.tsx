import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'

interface GtagProps {
  trackingId: string
}

const Gtag: React.FC<GtagProps> = ({ trackingId }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      window.gtag('config', trackingId, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events, trackingId])

  return (
    <React.Fragment>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${trackingId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </React.Fragment>
  )
}

export default Gtag
