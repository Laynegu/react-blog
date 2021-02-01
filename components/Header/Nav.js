import { Menu } from 'antd';
import { HomeOutlined, EditOutlined, BookOutlined, LinkOutlined, BarsOutlined } from '@ant-design/icons';

const {SubMenu, ItemGroup} = Menu;

export default function Nav() {

  return (
    <nav className='header-nav'>
      <Menu mode="horizontal" overflowedIndicator={<BarsOutlined className='header-icon' />}>
        <Menu.Item key="home">
          <HomeOutlined className='header-icon' />首页
        </Menu.Item>
        <Menu.Item key="skill">
          <EditOutlined className='header-icon' />技术杂谈
        </Menu.Item>
        <SubMenu title={<span><BookOutlined className='header-icon' />学习总结</span>}>
            <Menu.Item key="frontend">前端</Menu.Item>
            <Menu.Item key="backend">后端</Menu.Item>
            <Menu.Item key="datastructure">数据结构和算法</Menu.Item>
            <Menu.Item key="computer">计算机基础</Menu.Item>
        </SubMenu>
        <Menu.Item key="about">
          <LinkOutlined className='header-icon' />关于
        </Menu.Item>
      </Menu>
    </nav>
  )
}