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
          <ItemGroup title="分组1">
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
          </ItemGroup>
          <ItemGroup title="分组2">
            <Menu.Item key="setting:3">选项3</Menu.Item>
            <Menu.Item key="setting:4">选项4</Menu.Item>
          </ItemGroup>
        </SubMenu>
        <Menu.Item key="about">
          <LinkOutlined className='header-icon' />关于
        </Menu.Item>
      </Menu>
    </nav>
  )
}