import Title from '../components/Title';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import BreadNav from '../components/BreadNav';
import Article from '../components/Article';
import ArticleNav from '../components/Article/ArticleNav';
import axios from 'axios';

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../public/lib/tocify.tsx';

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

export default function Detail({data}) {

  return (
    <>
      <Title titleName={"Detail"} />
      <Header />
      <Main
        BreadNav={<BreadNav />}
        ArticleNav={<ArticleNav tocify={tocify}/>}
        Article={<Article article={data[0]} marked={marked}/>}
      />
      <Footer />
    </>
  )
}

// 获取博客详情页文章数据
Detail.getInitialProps = async(ctx) => {
  // ctx: 路由跳转的上下文
  try {
    let id = ctx.query.id;
    const ret = await axios.get(`http://localhost:7001/default/getArticleById/${id}`);
    return ret.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
