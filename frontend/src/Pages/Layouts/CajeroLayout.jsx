import { Outlet } from "react-router-dom"
import { NavBar } from "../../Components/NavBar/NavBar"
import { Footer } from "../../Components/Footer/Footer"

export const CajeroLayout = () => {
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
