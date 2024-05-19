export default function ReviewProductDetails({
    params,
}: {
    params: { 
        productId: string 
        reviewsId : string
    };
}) {
    return <h1>Review {params.reviewsId} for Product  Detail {params.productId}</h1>;
}
