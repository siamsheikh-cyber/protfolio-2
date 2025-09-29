
import { Outlet } from "react-router"
import Footer from "./component/module/main/footer"
import Header from "./component/module/main/header"


function App() {

  return (
    <>

      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
