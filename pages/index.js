export default function Home() {

  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_PRODUCT_NAME}</h1>
      <div>{process.env.NEXT_PUBLIC_PRODUCT_ID}</div>
    </>
  )
}
