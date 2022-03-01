import { useReducer, useEffect } from 'react'

import { subscribe } from './proxy'

export function useStore(proxyState) {
    const forceUpdate = useReducer(c => c + 1, 0)[1]

    useEffect(() => {
        subscribe(proxyState, forceUpdate)

        return () => subscribe(proxyState, forceUpdate)()
    })

    return proxyState
}