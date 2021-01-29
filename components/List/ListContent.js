import ArticleDetail from "./ArticleDetail";

export default function ListContent(props) {

  const { title, href, description, keyWord } = props;

  return (
    <div className="list-content">
      <ArticleDetail title={title}/>
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