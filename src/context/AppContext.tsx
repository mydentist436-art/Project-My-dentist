'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

const AppContext = createContext<AppContextType>({
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <AppContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
