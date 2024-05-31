import logo from "./assets/Group 1.png";

function Footer() {
  return (
    <>
      <footer className="bg-launch bg-no-repeat backdrop-blur bg-cover bg-center h-screen bg-slate-500 mt-10">
        <div className="grid  sm:grid-cols-2 grid-cols-1 pt-20 w-full  text-white container mx-16 sm:text-left text-center  ">
          <div className="w-full lg-text:pr-10">
            <h1 className="-4xl text-5xl  font-bold leading-tight mb-6">
              Butuh Konsultasi..? <br />
              Silahkan kontak kami <br />
              Kami Siap Membantu
            </h1>

            <p className="  font-bold py-2 px-4 rounded">Kontak</p>

            <div className=" flex items-center mt-3">
              <img src="src\assets\Vector.png" alt="" />
              <p className="pl-3">
                Jl. Pelajar Pejuang 123 Majalaya Bandung <br />
                Indonesia
              </p>
            </div>

            <div className=" flex items-center mt-3">
              <img src="src\assets\Vector (1).png" alt="" />
              <p className="pl-3">022-6545-2041</p>
            </div>

            <div className=" flex items-center mt-3">
              <img src="src\assets\Vector (2).png" alt="" />
              <p className="pl-3">rumahimpian@gmail.com</p>
            </div>

            <p className="  font-bold py-2 px-4 ">Social Media</p>

            <div className="flex gap-3">
              <img
                className="hover:bg-blue-800"
                src="src\assets\Vector (3).png"
                alt=""
              />
              <img
                className="hover:bg-blue-500"
                src="src\assets\Group.png"
                alt=""
              />
              <img
                className="hover:bg-pink-600"
                src="src\assets\Group (1).png"
                alt=""
              />

              <p>Rumahimpian</p>
            </div>
          </div>

          <div className="bg-white  text-black items-center">
            <h1 className="text-4xl font-bold text-[#048853] text-center">
              ada pertanyaan..?
            </h1>

            <div className="flex justify-center ">
              <div className="w-5/6">
                <input
                  className="flex h-12 w-full  rounded-md border  border-black/30 bg-transparent px-4 py-4 my-5 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Masukan email anda disini..."
                  id="name"
                ></input>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-5/6">
                <input
                  className="flex h-12 w-full rounded-md border border-black/30 bg-transparent px-4 py-4 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Pertanyaan Anda.."
                  id="name"
                ></input>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <div className="w-5/6">
                <button
                  type="button"
                  className="rounded-md w-full h-12 bg-green-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80  focus-visible:outline-green-600"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-black text-white">
        <div className="flex justify-between items-center px-10 py-5">
          <div>
            <span className="flex justify-start items-center mx-5">
              <img src={logo} alt="" />
              <span className="text-xl font-bold">Rumah Impian</span>
            </span>
          </div>

          <div className=" sm:flex justify-center items-center mx-5 gap-x-5">
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
          </div>
        </div>

        <div className="text-center py-8">
          <p>Copyright bg Creative Academy All Right Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
