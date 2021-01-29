import Title from '../components/Title';
import Header from '../components/Header';
import BreadNav from '../components/BreadNav';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function List() {
  return (
    <>
      <Title titleName={"List"} />
      <Header />
      <Main BreadNav={<BreadNav />}/>
      <Footer />
    </>
  )
}