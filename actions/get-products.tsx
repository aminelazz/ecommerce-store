import qs from "query-string"

import { Product } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
  categoryId? : string
  sizeId?     : string
  colorId?    : string
  isFeatured? : boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured
    }
  })
  
  const response = await fetch(`${url}`)

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }
  return response.json()
}

export default getProducts