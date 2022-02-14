import {Product, flattenConnection, useProduct} from '@shopify/hydrogen/client';
import {BUTTON_PRIMARY_CLASSES} from './Button.client';
import ProductOptions from './ProductOptions.client';

export default function ProductPage({product}) {
  const initialVariant = flattenConnection(product.variants)[0];

  return (
    <Product product={product} initialVariantId={initialVariant.id}>
      <Product.SelectedVariant.Image />
      <Product.Title />
      <ProductOptions />
      <Product.SelectedVariant.Price />
      <AddToCartMarkup />
      <Product.Description />
    </Product>
  );
}

function AddToCartMarkup() {
  const {selectedVariant} = useProduct();
  const isOutOfStock = !selectedVariant.availableForSale;

  return (
    <div className="space-y-2 mb-8">
      <Product.SelectedVariant.AddToCartButton
        className={BUTTON_PRIMARY_CLASSES}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? 'Out of stock' : 'Add to bag'}
      </Product.SelectedVariant.AddToCartButton>
    </div>
  );
}
