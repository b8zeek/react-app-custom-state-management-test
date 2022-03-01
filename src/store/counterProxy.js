import { createProxy } from "./proxy";

const counterProxy = createProxy({
    counter: 3
})

export function incrementCounter() {
    ++counterProxy.counter
}

export function decrementCounter() {
    --counterProxy.counter
}

export default counterProxy