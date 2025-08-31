import { Size } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL)
  
  if (!response.ok) {
    throw new Error("Failed to fetch sizes")
  }
  return response.json()
}

export default getSizes