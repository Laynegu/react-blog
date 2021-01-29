import Title from '../components/Title';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import List from '../components/List';

export default function Home() {
  return (
    <>
      <Title titleName={"Home"} />
      <Header />
      <Main List={<List />}/>
      <Footer />
    </>
  )
}
