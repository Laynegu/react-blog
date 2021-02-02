import { Breadcrumb } from 'antd';
import Router from 'next/router';

export default function BreadNav({ title, typeName, typeId }) {

  const changeUrl = (e) => {
    e.preventDefault();
    let id = e.target.id + '';
    id == "0" ? Router.push('/') : Router.push(`/list?id=${id}`);
  }

  return (
    <div className="bread-nav">
      <Breadcrumb>
        <Breadcrumb.Item><a id="0" onClick={changeUrl} >首页</a></Breadcrumb.Item>
        {title ?
          <Breadcrumb.Item><a id={typeId} onClick={changeUrl} >{typeName}</a></Breadcrumb.Item> :
          <Breadcrumb.Item>{typeName}</Breadcrumb.Item>
        }
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}