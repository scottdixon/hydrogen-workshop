import {Product} from '@shopify/hydrogen/client';

export default function ProductPage({product}) {
  return (
    <Product product={product}>
      <Product.Title />
      <Product.Description />
    </Product>
  );
}
