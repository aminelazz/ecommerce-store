"use client"

import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"

import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency"
import { Product } from "@/types"
import { useRouter } from "next/navigation"

interface ProductCardProps {
  data: Product
}

function ProductCard({ data }: ProductCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer border rounded-xl p-3 space-y-4">
      {/* Images & Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative overflow-hidden">
        <Image
          src={data.images?.[0]?.url}
          alt={data.name}
          fill
          className="aspect-square object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
        />
        <div className="z-10 absolute bottom-5 w-full px-6 opacity-0 group-hover:opacity-100 transition duration-200">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} />}
              className="text-gray-600"
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} />}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  )
}
export default ProductCard