import Layout from '../../components/Layout.server';
import gql from 'graphql-tag';
import {useShopQuery} from '@shopify/hydrogen';
import ProductPage from '../../components/ProductPage.client';
export default function Product({params}) {
  const {handle} = params;

  const {data} = useShopQuery({
    query: gql`
      query ProductPage($handle: String!) {
        product(handle: $handle) {
          id
          title
        }
      }
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
