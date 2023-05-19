import '@/styles/globals.css'
import '@/styles/media.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Menu from '@/components/menu'

export default function App({ Component, pageProps }) {
  
  return  (
    <div>
    <Header />
    <Menu /> 
   <Component {...pageProps} />
    <Footer/>
   </div>
   
  )
}
