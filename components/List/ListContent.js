import ArticleHeader from "./ArticleHeader";
import { FileOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function ListContent(props) {

  const { id, title, href, introduction, publicTime, typeName, viewCount } = props;

  return (
    <div className="list-content">
      <ArticleHeader id={id} title={title} publicTime={publicTime} typeName={typeName} viewCount={viewCount} />
      <div className="list-description">{introduction}</div>
      {href ? (
        <div className="list-img">
          <img src={href} />
        </div>
      ) : ''}
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