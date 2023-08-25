import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoardTemplate from '../components/Board/BoardTemplate'
import BoardList from '../components/Board/BoardList';
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
    <BoardTemplate>
      <BoardList data={board}/>
    </BoardTemplate>
  )
}

export default Axios;