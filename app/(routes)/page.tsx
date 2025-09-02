import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

export const revalidate = 0

async function HomePage() {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard("6429a649-7a27-446e-bf74-6009eefc7187")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title={"Featured Products"} items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage