const proxySubscribersMap = new WeakMap()

function createProxy(obj) {
    const subscribers = new Set()

    const result = new Proxy(obj, {
        get(target, prop) {
            console.log(`Getting ${prop}`)

            return target[prop]
        },
        set(target, prop, value) {
            console.log(this)
            console.log(`Setting ${prop} to ${value}`)
            target[prop] = value

            subscribers.forEach(sub => {
                console.log('Invoking Sub!')
                sub()
            })

            return true
        }
    })

    proxySubscribersMap.set(result, subscribers)

    return result
}

function subscribe(proxyObject, callback) {
    proxySubscribersMap.get(proxyObject).add(callback)

    return () => proxySubscribersMap.get(proxyObject).delete(callback)
}

export {
    createProxy,
    subscribe
}