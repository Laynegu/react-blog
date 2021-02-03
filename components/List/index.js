import { useState, useEffect } from 'react';
import { List } from 'antd';
import ListContent from './ListContent';


export default function ListTable({ data, isHome }) {

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    }
  });

  return (
    <List
      header={isHome ? <div className="home-title">最新日志</div> : ''}
      loading={isLoading}
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <ListContent {...item} />
        </List.Item>
      )}
    />
  )
}
