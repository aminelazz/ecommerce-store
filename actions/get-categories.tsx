import { Category } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL)
  
  if (!response.ok) {
    throw new Error("Failed to fetch categories")
  }
  return response.json()
}

export default getCategories