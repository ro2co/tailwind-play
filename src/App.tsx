import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="text-3xl font-bold underline">
          Hello world!
        </div>
      </div>
      <p className="text-lable1">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
