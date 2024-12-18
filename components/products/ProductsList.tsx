import { formatCurrency } from '@/utils/format';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@prisma/client';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';

function ProductsList({ products }: { products: Product[] }) {
    return (
        <div className='mt-12 grid gap-y-8'>
            {products.map((product) => {
                const { name, price, image, company } = product
                const productId = product.id
                const dollarAmount = formatCurrency(price)
                return (
                    <article key={productId} className='group relative'>
                        <Link href={`/products/${productId}`}>
                            <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                                <CardContent className='p-8 gap-y-4 grid  md:grid-cols-3'>
                                    <div className='relative h-64 md:h-48 rounded md:w-48'>
                                        <Image src={image} alt={name} fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' priority className='rounded w-full object-cover'></Image>
                                    </div>
                                    <div className='text-xl font-semibold capitalize'>
                                        <h2>{name}</h2>
                                        <h4 className='text-muted-foreground '>{company}</h4>
                                    </div>
                                    <p className='text-sm hover:text-red-500'>{dollarAmount}</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <div className='absolute top-7 right-7 z-5'>
                            <FavoriteToggleButton productId={productId} />
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ProductsList