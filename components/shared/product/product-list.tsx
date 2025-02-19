import ProductCard from "./product-card";
import { Product } from "@/types";
const ProductList = ({ data, title, limit }: { data: Product[]; title?: string; limit?: number }) => {

    // const limitedData = limit ? data.slice(0, limit) : data;



    // Ensure data is always an array
    const productArray = Array.isArray(data) ? data : [data];

    const limitedData = limit ? productArray.slice(0, limit) : productArray;


    return (

        <div className="my-10">

            <h2 className="h2-bold mb-4">{title}</h2>

            {data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {limitedData.map((product: Product) => (
                        <ProductCard product={product} key={product.slug} />
                    ))}

                </div>
            ) : (
                <div>
                    <p>No Products Available Currently</p>
                </div>
            )
            }

        </div>

    );
}

export default ProductList;