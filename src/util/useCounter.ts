import { useCallback, useState } from 'react'

export type UseCounter = [number, (amount: number) => void]

export const useCounter = (): UseCounter => {
  const [counter, counterSet] = useState(0)
  const increment = useCallback(
    (amount: number) => {
      if (amount < 0) {
        throw Error("Can't increment a counter with a negative amount!")
      }
      counterSet((counter) => counter + amount)
    },
    []
  )
  return [counter, increment]
}
