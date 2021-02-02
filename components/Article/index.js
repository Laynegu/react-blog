import { TagsOutlined, FireOutlined, CalendarOutlined } from '@ant-design/icons';

export default function Article({ article, marked }) {

  const { title, publicTime, tabName, viewCount, articleContent } = article;
  const html = marked(articleContent);

  return (
    <>
      <div className="detailed-header">
        <div className="list-title detailed-title">
          {title}
        </div>
        <div className="list-icon">
          <span><CalendarOutlined className="calendar" /> {publicTime}</span>
          <span><TagsOutlined className="tags" /> {tabName}</span>
          <span><FireOutlined className="fire" /> {viewCount}</span>
        </div>
      </div>
      <div className="detailed-content" dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  )
}