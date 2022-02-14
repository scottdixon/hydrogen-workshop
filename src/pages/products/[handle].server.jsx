import Layout from '../../components/Layout.server';

export default function Product({params}) {
  const {handle} = params;

  return (
    <Layout>
      <p>Product page for: {handle}</p>
    </Layout>
  );
}
