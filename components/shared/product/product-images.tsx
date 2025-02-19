'use client';

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
const ProductImages = ({ images, productName }: { images: string[], productName: string }) => {

    const [current, setCurrent] = useState(0);

    return (
        <div className="space-y-4">

            <Image
                src={images[current]}
                alt={`${productName} image`}
                width={1000}
                height={1000}
                className="min-h-[300px] object-cover object-center"
            />

            <div className="flex">

                {images.map((image, index) => (
                    <div
                        key={image}
                        onClick={() => setCurrent(index)}
                        className={cn('border mr-2 cursor-pointer hover:border-orange-200 hover:transition-all',
                            current === index && 'border-orange-500'
                        )}
                    >

                        <Image src={image} alt={`${productName} image ${index}`}

                            width={100}
                            height={100}
                        />

                    </div>
                ))}

            </div>

        </div>
    );
}

export default ProductImages;