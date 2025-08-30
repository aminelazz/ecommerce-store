import { Billboard } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`)

  if (!response.ok) {
    throw new Error("Failed to fetch billboard")
  }
  return response.json()
}

export default getBillboard