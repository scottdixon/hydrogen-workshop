export default function Product({params}) {
  const {handle} = params;
  return <p>Product page for: {handle}</p>;
}
