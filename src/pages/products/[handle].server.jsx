import Layout from '../../components/Layout.server';
import gql from 'graphql-tag';
import {useShopQuery, ProductProviderFragment} from '@shopify/hydrogen';
import ProductPage from '../../components/ProductPage.client';
export default function Product({params}) {
  const {handle} = params;

  const {data} = useShopQuery({
    query: gql`
      query product(
        $handle: String!
        $includeReferenceMetafieldDetails: Boolean = true
        $numProductMetafields: Int = 20
        $numProductVariants: Int = 250
        $numProductMedia: Int = 6
        $numProductVariantMetafields: Int = 10
        $numProductVariantSellingPlanAllocations: Int = 0
        $numProductSellingPlanGroups: Int = 0
        $numProductSellingPlans: Int = 0
      ) {
        product(handle: $handle) {
          id
          title
          ...ProductProviderFragment
        }
      }

      ${ProductProviderFragment}
    `,
    variables: {
      handle,
    },
  });

  return (
    <Layout>
      <ProductPage product={data.product} />
    </Layout>
  );
}
