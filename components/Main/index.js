import { Row, Col, Divider } from 'antd';
import Advert from '../Advert';
import Author from '../Author';
import List from '../List';

export default function Main(props) {

  const { BreadNav } = props;

  return (
    <main>
      <Row className="main" type="flex" justify="center" >
        <Col className='main-left' xs={24} sm={24} md={16} lg={18} xl={10} >
          {BreadNav ? BreadNav : ''}
          <List />
        </Col>
        <Col className='main-right' xs={0} sm={0} md={7} lg={5} xl={5} >
          <Author />
          <Divider />
          <Advert />
        </Col>
      </Row>
    </main>
  )
}