'use client';

import { CartItem } from "@/types";
import { useRouter } from "next/navigation";
import { addItemToCart } from "@/lib/actions/cart.action";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from 'sonner'; // Import the toast function from Sonner

const AddToCart = ({ item }: { item: CartItem }) => {
    const router = useRouter();

    const handleAddToCart = async () => {
        const res = await addItemToCart(item);

        if (!res.success) {

            toast.error(res.message); // Display error toast
            return;
        }

        // Display success toast with action
        toast.success(
            `${item.name} added to cart`,
            {
                action: {
                    label: 'Go To Cart',
                    onClick: () => router.push('/cart'),
                },
            }
        );
    };

    return (
        <Button className='w-full' type='button' onClick={handleAddToCart}>
            <Plus /> Add To Cart
        </Button>
    );
};

export default AddToCart;
