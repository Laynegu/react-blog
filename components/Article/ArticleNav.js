export default function ArticleNav({ tocify }) {
  return (
    <div className="detailed-nav">
      <div className="article-nav-title">文章目录</div>
      <div className="toc-list">
        {tocify && tocify.render()}
      </div>
    </div>
  )
}
