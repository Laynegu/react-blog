import Title from '../components/Title';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import List from '../components/List';
import axios from 'axios';

export default function Home({data}) {
  return (
    <>
      <Title titleName={"Home"} />
      <Header />
      <Main List={<List data={data} />} />
      <Footer />
    </>
  )
}

// 获取博客首页列表数据
Home.getInitialProps = async () => {
  try {
    const ret = await axios.get("http://localhost:7001/default/getArticleList");
    return ret.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
