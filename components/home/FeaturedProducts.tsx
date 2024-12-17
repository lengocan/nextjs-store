import { fetchFeauturedProducts } from '@/utils/actions'
import React from 'react'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'

async function FeaturedProducts() {
    const products = await fetchFeauturedProducts()
    if (products.length === 0) return <EmptyList />

    return (
        <section>
            <SectionTitle text='features product' />
            <ProductsGrid products={products} />


        </section>
    )
}

export default FeaturedProducts