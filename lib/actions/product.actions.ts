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


//  Get single product by its slug

export async function getProductBySlug(slug: string) {

    return await prisma.product.findFirst({
        where: { slug: slug }
    })
}

