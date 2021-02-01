import React, { useState } from 'react';
import { List } from 'antd';
import ListContent from './ListContent';


export default function ListTable({data}) {

  const [list, setList] = useState(data);

  return (
    <List
      header={<div className="home-title">最新日志</div>}
      loading={list ? false : true}
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <ListContent {...item}/>
        </List.Item>
      )}
    />
  )
}
