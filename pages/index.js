export default function Home() {

  return (
    <>
      <h1>Home page</h1>
      <div>{process.env.NEXT_PUBLIC_NAME}</div>
      <div>{process.env.NEXT_PUBLIC_ID}</div>
    </>
  )
}
