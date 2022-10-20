import Navbar from './navbar'
import Footer from './footer'
import Back from './back'
import StickySearch from './stickySearch'

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>{props.children}</main>
      <Back/>
      <StickySearch/>
    </div>
  )
}
