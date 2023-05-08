async function getData() {
	const res = await fetch('http://localhost:3000/api/getStudents', {
		cache: "no-store"
	});
	const data = await res.json();
	// console.log(data);
	return data;
}

function rewriteDate(date: string) {
	let day = date.slice(8, 10);
	let month = date.slice(5, 7);
	let year = date.slice(0, 4);
	return day + "-" + month + "-" + year;
}

export default async function Table() {
	let students = await getData()
	return (
	  <div className="container">
		<table className="table rounded-xl m-[1.5em] bg-secondary-content border-spacing-0.5" id="table">
		  <thead>
			<tr>
			  <th className="text-[1em] text-neutral-content bg-neutral" id="index">STT</th>
			  <th className="text-[1em] text-neutral-content bg-neutral" id="id">Mã SV</th>
			  <th className="text-[1em] text-neutral-content bg-neutral" id="name">Họ và tên</th>
			  <th className="text-[1em] text-neutral-content bg-neutral" id="dob">Ngày sinh</th>
			  <th className="text-[1em] text-neutral-content bg-neutral" id="hometown">Quê quán</th>
			  <th className="text-[1em] text-neutral-content bg-neutral" id="edit">Sửa</th>
			  <th className="text-[1em] text-neutral-content bg-neutral" id="delete">Xóa</th>
			</tr>
		  </thead>
		  <tbody>
			{students.map((student: any, index: any) => (
			  <tr key={index}>
				<th>{index + 1}</th>
				<td>{student.id}</td>
				<td>{student.name}</td>
				<td>{rewriteDate(student.birthDate)}</td>
				<td>{student.hometown}</td>
				<td className="hover:text-primary hover:cursor-pointer">edit</td>
                <td className="hover:text-error hover:cursor-pointer">delete</td>
				{/* <td><DeleteBtn id={student.id} /></td> */}
			  </tr>
			))}
		  </tbody>
		</table>
	  </div>
	)
  }  