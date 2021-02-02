import { Row, Col } from 'antd';
import AffixEle from '../AffixEle';
import Author from '../Author';

export default function Main(props) {

  const { BreadNav, List, Article, ArticleNav } = props;

  return (
    <main>
      <Row className="main" type="flex" justify="center" >
        <Col className='main-left' xs={24} sm={24} md={16} lg={18} xl={12} >
          {BreadNav ? BreadNav : ''}
          {List ? List : ''}
          {Article ? Article : ''}
        </Col>
        <Col className='main-right' xs={0} sm={0} md={7} lg={5} xl={4} >
          {ArticleNav ? <Author /> : <AffixEle offsetTop={70}><Author /></AffixEle>}
          {ArticleNav ? <AffixEle offsetTop={70}>{ArticleNav}</AffixEle> : ''}
        </Col>
      </Row>
    </main>
  )
}