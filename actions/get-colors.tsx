import { Color } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL)
  
  if (!response.ok) {
    throw new Error("Failed to fetch colors")
  }
  return response.json()
}

export default getColors