import ArticleHeader from "./ArticleHeader";
import { FileOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';

import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

export default function ListContent(props) {

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  const { id, introduction } = props;

  return (
    <div className="list-content">
      <ArticleHeader {...props} />
      <div className="list-description" dangerouslySetInnerHTML={{ __html: marked(introduction) }}></div>
      <div className="list-footer">
        <Link href={{ pathname: '/detail', query: { id } }}>
          <a>
            <FileOutlined />
            <span className="look-alltext">查看全文</span>
            <RightOutlined />
          </a>
        </Link>
      </div>
    </div>
  )
}
