let baseUrl = 'http://localhost:7001/default/';

let servicePath = {
  getArticleList: baseUrl + 'getArticleList',    //   首页文章列表接口
  getArticleById: baseUrl + 'getArticleById/',   //   文章详细页内容接口 ,需要接收参数
  getTypeInfo: baseUrl + 'getTypeInfo',          //   文章类型数据接口
  getListById: baseUrl + 'getListById/',          //   根据类别ID获得文章列表
}

export default servicePath;