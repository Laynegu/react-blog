import { TagsOutlined, FireOutlined, CalendarOutlined } from '@ant-design/icons';

export default function ListContent(props) {

  const { title, href, description, keyWord } = props;

  return (
    <div className="list-content">
      <div className="list-title">{title}</div>
      <div className="list-icon">
        <span><CalendarOutlined className="calendar"/> 时间日期</span>
        <span><TagsOutlined className="tags"/> 标签分类</span>
        <span><FireOutlined className="fire"/> 阅读人数</span>
      </div>
      <ul className="list-keyWord">
        {
          keyWord.map((word, index) => {
            return (<li key={index} style={{ color: word.color, borderColor: word.color, backgroundColor: word.bgColor }}>
                      {word.content}
                    </li>)
          })          
        }
      </ul>
      <div className="list-description">{description}</div>
      {href ? (
        <div className="list-img">
          <img src={href} />
        </div>
      ) : ''}
    </div>
  )
}