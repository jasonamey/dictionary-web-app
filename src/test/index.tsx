import React from 'react'

import { ThemeProvider } from '@/context'

interface TestWrapperProps {
  children: React.ReactNode
}

export const TestWrapper = ({ children }: TestWrapperProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
