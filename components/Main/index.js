import { Row, Col } from 'antd';
import List from '../List'

export default function Main() {

  return (
    <main>
      <Row className="main" type="flex" justify="center" >
        <Col className='main-left' xs={24} sm={24} md={16} lg={18} xl={10} >
          <List></List>
        </Col>
        <Col className='main-right' xs={0} sm={0} md={7} lg={5} xl={4} >
          右侧
        </Col>
      </Row>
    </main>
  )
}