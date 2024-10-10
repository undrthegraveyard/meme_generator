import '../App.less'
import logo from '../assets/Trollface.png'

export default function Header() {
  return(
    <header className='header'>
      <img src={logo} alt="A logo of smiling meme face" className='header--image'/>
      <h1 className='header--title'>Meme Generator</h1>
    </header>
  )
}
