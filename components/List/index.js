import React, { useState } from 'react';
import { List } from 'antd';
import ListContent from './ListContent';


export default function ListTable() {

  const data = [];

  for (let i = 0; i < 23; i++) {
    data.push({
      href: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      title: `ant design part ${i}`,
      keyWord: [{content: '#js', color: '#ffffff', bgColor: '#f52988c5'},
      {content: '#js', color: '#ffffff', bgColor: '#f52988c5'},
      {content: '#js', color: '#ffffff', bgColor: '#f52988c5'}],
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    });
  }

  const [listData, setListData] = useState(data);

  return (
    <List
      header={<div>最新日志</div>}
      loading={listData.length ? false : true}
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={listData}
      renderItem={item => (
        <List.Item>
          <ListContent {...item}/>
        </List.Item>
      )}
    />
  )
}