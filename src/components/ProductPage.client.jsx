import {Product, flattenConnection, useProduct} from '@shopify/hydrogen/client';
import {BUTTON_PRIMARY_CLASSES} from './Button.client';
import ProductOptions from './ProductOptions.client';

export default function ProductPage({product}) {
  const initialVariant = flattenConnection(product.variants)[0];

  return (
    <Product product={product} initialVariantId={initialVariant.id}>
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-16">
        <div>
          <Product.SelectedVariant.Image />
        </div>
        <div>
          <Product.Title
            as="h1"
            className="text-5xl font-bold text-black mb-4"
          />
          <ProductOptions />
          <Product.SelectedVariant.Price className="text-gray-900 text-lg mt-2 mb-2" />
          <AddToCartMarkup />
          <Product.Description className="prose" />
        </div>
      </div>
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
