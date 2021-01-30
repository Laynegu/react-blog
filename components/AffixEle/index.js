import { Affix } from 'antd';

export default function AffixEle(props) {

  const {offsetTop, children} = props;

  return (
    <Affix offsetTop={offsetTop}>
      {children}
    </Affix>
  )
}