function Services() {
  return (
    <>
      <section className="container px-10 mx-auto">
        <h1 className=" text-center font-bold text-4xl text-[#048853]">
          Layanan Kami
        </h1>
        <div className="text-center">
          <p>Rumah impian hadir menjadi solusi bagi kamu</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 my-6 ">
          <div className=" text-center border my-6 hover:bg-[#048853]   ">
            <div className="flex items-center justify-center mb-4">
              <img src="src\assets\house 1.png " alt="" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-2xl font-bold leading-tight mb-6 ">
                Property Baru
              </h1>
            </div>
            <div>
              <p>
                Rumah impian kini jadi kenyataan, Beli <br />
                rumah bary dengan fasilitas terbaik <br />
                dengan lingkungan yang nyaman.
              </p>
            </div>
          </div>

          <div className=" text-center border my-6 hover:bg-[#048853]">
            <div className="flex items-center justify-center mb-4">
              <img src="src\assets\assets 1.png" alt="" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-2xl font-bold leading-tight mb-6 ">
                Sewa Rumah
              </h1>
            </div>
            <div>
              <p>
                Sewa rumah yang indah untuk keluarga <br />
                anda, pilihan terbaik untuk tempat <br />
                tinggal keluarga mu.
              </p>
            </div>
          </div>

          <div className=" text-center border my-6 hover:bg-[#048853]">
            <div className="flex items-center justify-center mb-4">
              <img src="src\assets\town 1.png" alt="" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-2xl font-bold leading-tight mb-6 ">
                Beli Rumah
              </h1>
            </div>
            <div>
              <p>
                Beli Rumah sempurna dengan harga <br />
                terbaik kualitas terjamin dari sumber <br />
                terpercaya.
              </p>
            </div>
          </div>
        </div>

        <img
          className="items-center flex justify-center"
          src="src\assets\green-interior-modern-interior-living-room-style-with-soft-sofa-green-wall-3d-rendering 2.png"
          alt=""
        />
      </section>
    </>
  );
}

export default Services;
