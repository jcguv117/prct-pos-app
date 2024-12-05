import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-row justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <div class="text-zinc-300 font-bold drop-shadow-[0_0_2em_#646cffaa]">
        <h1 class="text-4xl ">
          Preact + Typescript
        </h1>
        <h1 class="text-8xl ">
          Point Of Sale App
        </h1>
      </div>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
