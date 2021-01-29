import { Breadcrumb } from 'antd';

export default function BreadNav() {

  return (
    <div className="bread-nav">
      <Breadcrumb>
        <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
        <Breadcrumb.Item>文章列表</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}