import Title from '../components/Title';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import BreadNav from '../components/BreadNav';
import Article from '../components/Article';
import ArticleNav from '../components/Article/ArticleNav';
import servicePath from '../config/apiUrl';

import axios from 'axios';
import { Spin } from 'antd';
import { useState, useEffect } from 'react';

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../public/lib/tocify.tsx';

export default function Detail({ data }) {

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  }, [data]);

  const renderer = new marked.Renderer();
  const tocify = new Tocify();

  // 设置文章导航
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  // 设置markdown语法的渲染配置
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: (code) => hljs.highlightAuto(code).value
  });

  const { title, typeName, typeId } = data[0];
  return (
    <>
      <Title titleName={"Detail"} />
      <Header typeId={typeId} />
      <Spin spinning={isLoading}>
      <Main
        BreadNav={<BreadNav title={title} typeName={typeName} typeId={typeId} />}
        ArticleNav={<ArticleNav tocify={tocify} />}
        Article={<Article article={data[0]} marked={marked} />}
      />
      </Spin>
      <Footer />
    </>
  )
}

// 获取博客详情页文章数据
Detail.getInitialProps = async (ctx) => {
  // ctx: 路由跳转的上下文
  try {
    let id = ctx.query.id;
    const ret = await axios.get(servicePath.getArticleById + id);
    return ret.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
