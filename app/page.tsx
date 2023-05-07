import Image from 'next/image'

export default function Home() {
  return (
    <body className='bg-secondary h-screen'>
      <div className="container">
        <button id="button" className="btn btn-info m-[1.5em] mb-0 b">Thêm mới</button>
      </div>
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
        </table>
      </div>
    </body>
  )
}