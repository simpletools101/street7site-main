import ClinicalDifference from "@/components/normal/product/clinicalDifference/clinicalDifference";
import ProductComparison from "@/components/normal/product/productComparison/productComparison";
import ProductDetailPart from "@/components/normal/product/productDetail1/productDetail1";
import ReviewsItem from "@/components/normal/product/reviews/reviewsItem";
import WhatsInside from "@/components/normal/product/whatsInside/whatsInside";

export default function Page() {
    return (
        <div className="">
            <ProductDetailPart/>
            <ClinicalDifference/>
            <WhatsInside/>
            <ProductComparison/>
            <ReviewsItem/>
        </div>
    )
}