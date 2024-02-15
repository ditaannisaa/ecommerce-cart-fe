import { useState } from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Home from './pages/home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Home/>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
