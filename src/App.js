import { useState } from 'react'

import { useStore } from './store/useStore'
import counterProxy, { incrementCounter, decrementCounter } from './store/counterProxy'

const Counter = () => {
  const counter = useStore(counterProxy).counter
  console.log('Rendering Counter component!')

  return <h1>Counter: {counter}</h1>
}

function App() {
  const [checkboxChecked, setCheckboxChecked] = useState(true)

  return (
    <div className="App">
      <input
        type='checkbox'
        value={checkboxChecked}
        onClick={setCheckboxChecked.bind(null, currentState => !currentState)}
      />
      {checkboxChecked && <Counter />}
      {checkboxChecked && <Counter />}
      {checkboxChecked && <Counter />}
      <button onClick={decrementCounter}>Decrement Counter</button>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}

export default App;
