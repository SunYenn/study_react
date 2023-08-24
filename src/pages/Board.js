import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Board.css'

function GetBoard() {
  const [boardData, setBoardData] = useState([]);
  const [paging, setPaging] = useState({
    page_size: 10,
    current_page: 1,
    total_page: 0,
  });

  useEffect(() => {
    axios.post('http://localhost:8080/editor/get/list', paging)
      .then((res) => {
        setPaging(prevPaging => ({ ...prevPaging, total_page: res.data.total_page }));
        setBoardData(res.data.boardList);
      })
      .catch((error) => {
        console.log('error : ' + error);
      });
  }, []);

  return boardData
}

function Axios() {

  const board = GetBoard()

  return (
    <div className='container-wrap'>
      <div className="title-area">
        <h3>게시판</h3>
      </div>
      <div className="board-area">
        <table>
          <thead>
            <tr>
              <th>{board.length}</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>수정일</th>
            </tr>
          </thead>
          <tbody>
            {board.map((item) => (
              <tr key={item.rnum}>
                <td>{item.rnum}</td>
                <td>{item.title}</td>
                <td>{item.user_id}</td>
                <td>{item.cre_dt}</td>
                <td>{item.udt_dt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Axios;