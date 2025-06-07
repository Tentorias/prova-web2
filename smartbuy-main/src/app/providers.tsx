"use client"
import { NextUIProvider } from "@nextui-org/react"
import { CartProvider } from "@/context/CartContext"
import { AuthProvider } from "@/components/AuthProvider" 

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </AuthProvider>
    </NextUIProvider>
  )
}
