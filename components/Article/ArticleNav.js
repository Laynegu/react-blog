import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

export default function ArticleNav({ markdown }) {

  return (
    <div className="detailed-nav">
      <div className="article-nav-title">文章目录</div>
      <MarkNav
        source={markdown}
        ordered={false}
      />
    </div>
  )
}