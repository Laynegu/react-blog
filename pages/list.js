import Title from '../components/Title';
import Header from '../components/Header';
import BreadNav from '../components/BreadNav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import BlogList from '../components/List';
import servicePath from '../config/apiUrl';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function List({ data }) {

  const [list, setList] = useState(data);
  useEffect(() => {
    setList(data);
  }, [data]);

  const { typeId, typeName } = list[0];

  return (
    <>
      <Title titleName={"List"} />
      <Header typeId={typeId} />
      <Main
        BreadNav={<BreadNav typeId={typeId} typeName={typeName} />}
        List={<BlogList data={list} isHome={false} />}
      />
      <Footer />
    </>
  )
}

// 获取博客列表页文章数据
List.getInitialProps = async (ctx) => {
  // ctx: 路由跳转的上下文
  try {
    let id = ctx.query.id;
    const ret = await axios.get(servicePath.getListById + id);
    console.log(ret);
    return ret.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
