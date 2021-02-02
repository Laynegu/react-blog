import ArticleHeader from "./ArticleHeader";
import { FileOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function ListContent(props) {

  const { id, introduction } = props;

  return (
    <div className="list-content">
      <ArticleHeader {...props} />
      <div className="list-description">{introduction}</div>
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
