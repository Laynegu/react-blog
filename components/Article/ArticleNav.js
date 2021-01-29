import { Affix } from 'antd';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

export default function ArticleNav({ markdown }) {

  return (
    <>
      <Affix offsetTop={70}>
        <div className="detailed-nav">
          <div className="article-nav-title">文章目录</div>
          <MarkNav
            source={markdown}
            ordered={false}
          />
        </div>
      </Affix>
    </>
  )
}