export const revalidate = 0

import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import Gallery from "@/components/gallery"
import Info from "@/components/info"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"
import { Product } from "@/types"

interface ProductPageProps {
  params: { productId: string }
}

async function ProductPage({ params }: ProductPageProps) {
  const { productId } = params

  const product: Product = await getProduct(productId)
  const suggestedProducts = await getProducts(
    {
      categoryId: product?.category?.id
    }
  )

  return (
    <div className="bg-white">
      <Container>
        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Gallery */}
            <Gallery images={product?.images} />
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              {/* Infos */}
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}
export default ProductPage