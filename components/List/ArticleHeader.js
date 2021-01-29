import { TagsOutlined, FireOutlined, CalendarOutlined } from '@ant-design/icons';

export default function ArticleHeader({title}) {

  return (
    <>
      <div className="list-title">{title}</div>
      <div className="list-icon">
        <span><CalendarOutlined className="calendar" /> 时间日期</span>
        <span><TagsOutlined className="tags" /> 标签分类</span>
        <span><FireOutlined className="fire" /> 阅读人数</span>
      </div>
    </>
  )
}