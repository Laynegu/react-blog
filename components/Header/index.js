import Banner from "./Banner";
import Nav from "./Nav";

export default function Header() {

  return (
    <header className='header'>
      <Nav></Nav>
      <Banner></Banner>
    </header>
  )
}