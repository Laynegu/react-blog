import { Menu } from 'antd';
import { HomeOutlined, EditOutlined, BookOutlined, LinkOutlined, BarsOutlined } from '@ant-design/icons';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Menu mode="horizontal" overflowedIndicator={<BarsOutlined className="header-icon"/>}>
          <Menu.Item key="home">
            <HomeOutlined className="header-icon"/>首页
          </Menu.Item>
          <Menu.Item key="skill">
            <EditOutlined />技术杂谈
          </Menu.Item>
          <SubMenu title={<span><BookOutlined className="header-icon"/>学习总结</span>}>
            <MenuItemGroup title="分组1">
              <Menu.Item key="setting:1">选项1</Menu.Item>
              <Menu.Item key="setting:2">选项2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="分组2">
              <Menu.Item key="setting:3">选项3</Menu.Item>
              <Menu.Item key="setting:4">选项4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="about">
            <LinkOutlined className="header-icon"/>关于
          </Menu.Item>
        </Menu>
      </nav>
      <div className="header-banner">
        <div className="header-banner-info">
          <div className="header-banner-info-title">LF-GのBlog</div>
          <div className="header-banner-info-subtitle">
            Don't talk it, &nbsp; just show me the code
          </div>
        </div>
      </div>
    </header>
  )
}