import logo from "./assets/Group 1.png"

function Navbar() {
    return(
        <>
 <header className="flex justify-between items-center px-10  py-5  bg-[#048853]">


 <div> 
          <span className="flex justify-start items-center">
            <img src={logo} alt="" />
            <span className="text-xl font-bold">Rumah Impian</span>
          </span>
        </div>

        <nav className=" sm:flex justify-center items-center gap-x-5">
          <span>
            <a href="#">BRANDA</a>
          </span>
          <span>
            <a href="#">LAYANAN</a>
          </span>
          <span>
            <a href="#">FITUR</a>
          </span>
          <span>
            <a href="#">KONTAK</a>
          </span>
        </nav>

        <div className=" sm:inline-block">
          <button className=" rounded px-4 py-1">DAFTAR</button>
        </div>

      


 </header>
        </>
    )
}

export default Navbar;