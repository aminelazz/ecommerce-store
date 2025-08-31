"use client"

import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"

import Button from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  const cart = useCart()
  const { items, addItem, removeItem, removeAll } = cart

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center px-4 py-2"
      >
        <ShoppingBag
           size={20}
           color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </Button>
    </div>
  )
}
export default NavbarActions