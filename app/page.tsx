import Table from "./components/table/page"
export default function Home() {

	return (
		<main className='bg-secondary h-full w-full p-[0.5em]'>
			<div className="container">
				<button id="button" className="btn btn-info m-[1.5em] mb-0 b">Thêm mới</button>
			</div>
			<div className="container">
				{/* @ts-expect-error Server Component */}
				<Table />
			</div>
		</main>
	)
}