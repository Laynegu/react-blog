import { TagsOutlined, FireOutlined, CalendarOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function ArticleHeader({ id, title, publicTime, tabName, viewCount }) {
  return (
    <>
      <div className="list-title">
        <Link href={{ pathname: '/detail', query: { id } }}>
          <a>
            {title}
          </a>
        </Link>
      </div>
      <div className="list-icon">
        <span><CalendarOutlined className="calendar" /> {publicTime}</span>
        <span><TagsOutlined className="tags" /> {tabName}</span>
        <span><FireOutlined className="fire" /> {viewCount}</span>
      </div>
    </>
  )
}
