import { Currency } from '@uniswap/sdk-core'
import { FeeAmount, Pool, tickToPrice, TICK_SPACINGS } from '@uniswap/v3-sdk'
import JSBI from 'jsbi'
import { PoolState, usePool } from './usePools'
import { useEffect, useMemo, useState } from 'react'
import computeSurroundingTicks from 'utils/computeSurroundingTicks'
// import { useAllV3TicksQuery } from 'state/data/enhanced'
import { skipToken } from '@reduxjs/toolkit/query/react'
import ms from 'ms.macro'
import cloneDeep from 'lodash/cloneDeep'
// import { AllV3TicksQuery } from 'state/data/generated'

const PRICE_FIXED_DIGITS = 8

// Tick with fields parsed to JSBIs, and active liquidity computed.
export interface TickProcessed {
  tickIdx: number
  liquidityActive: JSBI
  liquidityNet: JSBI
  price0: string
}

const getActiveTick = (tickCurrent: number | undefined, feeAmount: FeeAmount | undefined) =>
  tickCurrent && feeAmount ? Math.floor(tickCurrent / TICK_SPACINGS[feeAmount]) * TICK_SPACINGS[feeAmount] : undefined

// Fetches all ticks for a given pool
export function useAllV3Ticks(
  currencyA: Currency | undefined,
  currencyB: Currency | undefined,
  feeAmount: FeeAmount | undefined
) {
  const [poolAddress, setPoolAddress] = useState<string | undefined>()
  if (currencyA && currencyB && feeAmount) {
    Pool.getAddress(currencyA?.wrapped, currencyB?.wrapped, feeAmount).then((address) => {
      setPoolAddress(address)
    })
  }

  //TODO(judo): determine if pagination is necessary for this query
  // const { isLoading, isError, data } = useAllV3TicksQuery(
  //   poolAddress ? { poolAddress: poolAddress?.toLowerCase(), skip: 0 } : skipToken,
  //   {
  //     pollingInterval: ms`2m`,
  //   }
  // )

  return {
    isLoading: false,
    isError: false,
    ticks: [],
  }
}

export function usePoolActiveLiquidity(
  currencyA: Currency | undefined,
  currencyB: Currency | undefined,
  feeAmount: FeeAmount | undefined
): {
  isLoading: boolean
  isError: boolean
  activeTick: number | undefined
  data: TickProcessed[]
} {
  const [ticksProcessed, setTicksProcessed] = useState<TickProcessed[]>([])

  const pool = usePool(currencyA, currencyB, feeAmount)

  const { isLoading, isError, ticks } = useAllV3Ticks(currencyA, currencyB, feeAmount)

  // Find nearest valid tick for pool in case tick is not initialized.
  const activeTick = useMemo(() => getActiveTick(pool?.tickCurrent, feeAmount), [pool, feeAmount])

  useEffect(() => {
    if (!currencyA || !currencyB || !activeTick || !pool || !ticks || ticks.length === 0) {
      setTicksProcessed([])
      return
    }

    const token0 = currencyA?.wrapped
    const token1 = currencyB?.wrapped

    const sortedTickData = cloneDeep(ticks as any['ticks'])
    sortedTickData.sort((a: { tickIdx: number }, b: { tickIdx: number }) => a.tickIdx - b.tickIdx)

    // find where the active tick would be to partition the array
    // if the active tick is initialized, the pivot will be an element
    // if not, take the previous tick as pivot
    const pivot = sortedTickData.findIndex(({ tickIdx }: any) => tickIdx > activeTick) - 1

    if (pivot < 0) {
      // consider setting a local error
      console.error('TickData pivot not found')
      return
    }

    const activeTickProcessed: TickProcessed = {
      liquidityActive: JSBI.BigInt(pool[1]?.liquidity ?? 0),
      tickIdx: activeTick,
      liquidityNet:
        sortedTickData[pivot].tickIdx === activeTick ? JSBI.BigInt(sortedTickData[pivot].liquidityNet) : JSBI.BigInt(0),
      price0: tickToPrice(token0, token1, activeTick).toFixed(PRICE_FIXED_DIGITS),
    }

    const subsequentTicks = computeSurroundingTicks(token0, token1, activeTickProcessed, sortedTickData, pivot, true)

    const previousTicks = computeSurroundingTicks(token0, token1, activeTickProcessed, sortedTickData, pivot, false)

    const newTicksProcessed = previousTicks.concat(activeTickProcessed).concat(subsequentTicks)

    setTicksProcessed(newTicksProcessed)
  }, [currencyA, currencyB, activeTick, pool, ticks])

  return {
    isLoading: isLoading,
    isError: isError,
    activeTick,
    data: ticksProcessed,
  }
}
