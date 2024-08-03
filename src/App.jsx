import Display from './components/DisplayCount'
import IncrementButton from './components/IncrementButton'
import DecrementButton from './components/DecrementButtom'

import { CountProvider } from './Contexts/CountCountext';

export default function App() {
  return (
      <CountProvider>
          <IncrementButton />
          <Display />
          <DecrementButton />
      </CountProvider>
  )
}
