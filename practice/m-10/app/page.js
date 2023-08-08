'use client'

export default function Home() {
  return (
    <main className="">
      <h1>Home
      </h1>
      <p>This is home</p>

      <button type="button" className="btn bg-green-400 p-2 rounded-lg text-white" onClick={ () => console.log("Hello") }>Click</button>
    </main>
  )
}
