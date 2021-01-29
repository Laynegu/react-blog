import Title from '../components/Title';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import BreadNav from '../components/BreadNav';
import Article from '../components/Article';

export default function Detail() {
  return (
    <>
      <Title titleName={"Detail"} />
      <Header />
      <Main BreadNav={<BreadNav />} Article={<Article />}/>
      <Footer />
    </>
  )
}