import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className=" bg-slate-200 dark:bg-slate-800 min-h-screen flex flex-col items-center transition-colors duration-300 ease-in-out">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout