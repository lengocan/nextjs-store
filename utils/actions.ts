import db from '@/utils/db'

export const fetchFeauturedProducts = async () => {
    const products = await db.product.findMany({
        where: {
            featured: true
        },
    })
    return products
}

export const fetchAllProducts = async () => {
    return db.product.findMany({
        orderBy: {
            createAt: 'desc'
        }
    })
}