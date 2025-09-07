'use client'

import { useState, useEffect } from 'react'
import Loading from './Loading'

interface LoadingProviderProps {
  children: React.ReactNode
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return <>{children}</>
}

export default LoadingProvider
