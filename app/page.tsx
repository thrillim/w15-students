import Table from "./components/table/page"

export default function Home() {
  return (
    <main className='min-h-screen p-2 min-w-screen'>
      <div className="container">
        <button id="button" className="btn btn-info m-[1.5em] mb-0 b">Thêm mới</button>
      </div>
      {/* @ts-expect-error Server Component */}
      <Table />
    </main>
  )
}