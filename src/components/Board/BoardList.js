import Table from 'react-bootstrap/Table';

function BoardList({ data }) {

  return (
    <>
      <Table hover striped>
        <thead>
          <tr>
            <th className='center'>{data.length}</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>수정일</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.rnum}>
              <td className='center'>{item.rnum}</td>
              <td>{item.title}</td>
              <td>{item.user_id}</td>
              <td>{item.cre_dt}</td>
              <td>{item.udt_dt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default BoardList