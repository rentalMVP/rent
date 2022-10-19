import Navbar from './navbar'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>{props.children}</main>
    </div>
  )
}
