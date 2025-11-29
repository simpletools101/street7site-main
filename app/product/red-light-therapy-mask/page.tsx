import ClinicalDifference from '@/components/normal/product/clinicalDifference/clinicalDifference'
import ProductComparison from '@/components/normal/product/productComparison/productComparison'
import ProductDetailPart from '@/components/normal/product/productDetail1/productDetail1'
import ReviewsItem from '@/components/normal/product/reviews/reviewsItem'
import WhatsInside from '@/components/normal/product/whatsInside/whatsInside'

interface IParams {
    id: Promise<string>
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div className="">
            <ProductDetailPart />
            <ClinicalDifference />
            <WhatsInside />
            <ProductComparison />
            <ReviewsItem />
        </div>
    )
}
