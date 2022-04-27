import { useCallback } from 'react'

interface EventOptions {
  value: number
  category?: string
  label?: string
  nonInteraction?: boolean
}

const useGtagEvent = () =>
  useCallback(
    (
      action: string,
      { value, category, label, nonInteraction = false }: EventOptions
    ) => {
      window.gtag('event', action, {
        value,
        event_category: category,
        event_label: label,
        non_interaction: nonInteraction,
      })
    },
    []
  )

export default useGtagEvent
