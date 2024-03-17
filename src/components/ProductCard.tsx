import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: Number;
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: string;
};

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <Link href={`/product/${product.id}`} className='group'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className='h-full w-full object-cover object-center group-hover:opacity-75'
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
      <p className='mt-1 text-lg font-medium text-gray-900'>{product.price}</p>
    </Link>
  );
}
