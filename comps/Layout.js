import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
    <Navbar />
    <div className="my-0 mx-auto max-w-5xl items-center">
        {children}
    </div> 
    </>
  )
}