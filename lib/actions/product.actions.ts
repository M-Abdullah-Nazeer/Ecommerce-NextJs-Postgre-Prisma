'use server';

import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';


// Get latest products

export async function getNewArrivals() {

    const data = await prisma.product.findMany(
        {
            take: 4,
            orderBy: { createdAt: 'desc' },
        }
    );

    return convertToPlainObject(data);

}





// const plainData = convertToPlainObject(data);

// return plainData.map((product) => ({
//     ...product,
//     price: product.price.toString(),
// }));