# next-gtag
[![npm version](https://badge.fury.io/js/<PACKAGE_NAME>.svg)](http://badge.fury.io/js/next-gtag)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Simple Gtag tracker for Next.js.  
Core source code is copied from [Next.js official example](https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics).

## Requirements
- Next.js (v11.0.0 or later)

## Features
- 👋 Easy and simple to use
- 🚀 High Performance by [next/script](https://nextjs.org/docs/api-reference/next/script)
- 🕳 Zero dependencies

## Installation
Using npm
```
npm install next-gtag
```

or yarn
```
yarn add next-gtag
```

## Usage
in `pages/_app.js`:
```tsx
import { NextGtag } from "next-gtag";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextGtag trackingId="YOUR_TRACKING_ID" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

Then, gtag tracking will be added to your page. 🥳

## Util Functions
### gtagEvent
`gtagEvent` is a helper function to track events.  
See [google document](https://developers.google.com/analytics/devguides/collection/gtagjs/events) for more details.

```tsx
import { gtagEvent } from "next-gtag";

gtagEvent('ACTION_NAME', {
  value: 123,
  category: 'CATEGORY_NAME', // optional
  label: 'LABEL_NAME',       // optional
  nonInteraction: false      // optional
})
```

## Contribution
Please feel free to open an issue or make a pull request.

## License
Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
