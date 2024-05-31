function Hero() {
  return (
    <>
      <section className=" px-10  bg-House bg-no-repeat bg-contain h-screen  bg-right bg-[#048853]">
      
          <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 w-full  text-white container mx-auto sm:text-left text-center  ">
            <div className="w-full lg-text:pr-10">
              <h1 className="-4xl text-5xl text-white font-bold leading-tight mb-6">
                Membantu Temukan <br />
                Rumah Impian.
              </h1>
              <p className="text-lg lg:text-xl text-white mb-6">
                Rumah Impian hadir untuk temukan rumah terbaik <br />
                untukmu, untuk di jual ataupun di sewa dengan sumber <br />
                terpercaya.
              </p>
              <button className="bg-white hover:bg-blue-700 text-[#048853] font-bold py-2 px-4 rounded">
                Temukan Rumah
              </button>
            </div>

          
          </div>
       
      </section>
    </>
  );
}

export default Hero;
