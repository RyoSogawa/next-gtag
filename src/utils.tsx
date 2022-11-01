import React from 'react'

export interface EventOptions {
  value: number
  category?: string
  label?: string
  nonInteraction?: boolean
}

export const gtagEvent = (
  action: string,
  { value, category, label, nonInteraction }: EventOptions
) => {
  window.gtag('event', action, {
    value,
    event_category: category,
    event_label: label,
    non_interaction: nonInteraction,
  })
}

export const gtagScript = (
  <script
    dangerouslySetInnerHTML={{
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
    }}
  />
)
