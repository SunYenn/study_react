import React from 'react';
import { Table } from 'antd';

function BoardList({ data }) {
  const columns = [
    {
      title: '',
      dataIndex: 'rnum',
      key: 'rnum',
      render: (text) => <div className='center'>{text}</div>,
    },
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '작성자',
      dataIndex: 'user_id',
      key: 'user_id',
    },
    {
      title: '작성일',
      dataIndex: 'cre_dt',
      key: 'cre_dt',
    },
    {
      title: '수정일',
      dataIndex: 'udt_dt',
      key: 'udt_dt',
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey={(record) => record.rnum}
      pagination={false}
      bordered
      size='middle'
    />
  );
}

export default BoardList;
