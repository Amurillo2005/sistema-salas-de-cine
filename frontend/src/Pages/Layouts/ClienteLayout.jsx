import { NavBar } from "../../Components/NavBar/NavBar"
import { Footer } from "../../Components/Footer/Footer"
import { Outlet } from "react-router-dom"

export const ClienteLayout = () => {
  return (
    <>
       <NavBar />
       <main>
         <Outlet />
       </main>
       <Footer />

    </>
  )
}
