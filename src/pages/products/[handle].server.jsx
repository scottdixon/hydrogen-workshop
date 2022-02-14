import Layout from '../../components/Layout.server';
import gql from 'graphql-tag';
import {useShopQuery} from '@shopify/hydrogen';
export default function Product({params}) {
  const {handle} = params;

  const {data} = useShopQuery({
    query: gql`
      query ProductPage {
        product(handle: "snowboard") {
          id
          title
        }
      }
    `,
  });

  console.log(data);

  return (
    <Layout>
      <p>Product page for: {handle}</p>
    </Layout>
  );
}
