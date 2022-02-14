import {Product, flattenConnection} from '@shopify/hydrogen/client';
export default function ProductPage({product}) {
  const initialVariant = flattenConnection(product.variants)[0];

  return (
    <Product product={product} initialVariantId={initialVariant.id}>
      <Product.Title />
      <Product.Description />
    </Product>
  );
}
