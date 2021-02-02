import { useState, useEffect } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import Router from 'next/router';
import Link from 'next/link';

export default function Nav({ navArr, typeId }) {

  const [current, setCurrent] = useState('0');
  useEffect(() => {
    setCurrent(typeId + '');
  }, []);

  const handleClick = e => {
    setCurrent(e.key);
    // 跳转列表页
    e.key === '0' ? Router.push('/') : Router.push(`/list?id=${e.key}`);
  };

  return (
    <nav className='header-nav'>
      <Row type="flex" justify="center">
        <Col xs={14} sm={14} md={14} lg={14} xl={8}>
          <Link href="/">
            <a><span className="header-logo">gulinfei</span></a>
          </Link>
        </Col>
        <Col className="memu-div" xs={6} sm={6} md={6} lg={6} xl={10}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            overflowedIndicator={<Icon type="unordered-list" className='header-icon'/>}
          >
            <Menu.Item key="0" >
              <Icon type="home" className='header-icon'/>首页
            </Menu.Item>
            {
              navArr.map(item => {
                const { type_name, id, icon_type } = item;
                return (
                  <Menu.Item key={id} >
                    <Icon type={icon_type} className='header-icon'/>{type_name}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </nav>
  )
}
