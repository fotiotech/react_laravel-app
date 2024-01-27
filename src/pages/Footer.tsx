const Footer = () => {
  return (
    <div className="flex relative justify-between sm:flex-col p-3 text-white w-full h-[400px] sm:h-full mt-8 bg-[#00000f]">
      <div className="flex-1 ">
        <div className=" flex justify-center items-center w-full h-44 ">
          <img src="/public/logo.png" alt="" className="w-auto h-auto" />
        </div>
        <p className="text-center my-3">
          Faites vos Achats en un <br />
          Clik sur Dyfk
        </p>
        <div className="flex items-center justify-center ">
          <img
            src="/public/perso/twitter-x-line.png"
            alt=""
            className="bg-white p-2 m-2 rounded my-3"
          />
          <img
            src="/public/perso/instagram-line.png"
            alt=""
            className="bg-white p-2 m-2 rounded my-3"
          />
          <p className="my-3">fotiodev@gmail.com</p>
        </div>
        <input
          type="text"
          placeholder="Write us"
          className=" ml-16 w-64 my-3"
        />
        <div className="flex ml-16">
          <img
            src="/public/perso/copyright-line.svg"
            alt=""
            className="w-3 h-3 mt-2 mx-1 rounded bg-white"
          />
          <p>2023 | fotio</p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-32 font-semibold  ml-28 mt-16">Dyfk.com</p>
        <p className="w-56 ml-20 py-3 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="flex-1 sm:invisible sm:absolute">
        <p className="text-32 font-semibold text-center mt-16 ">Dyfk Payment Products</p>
        <p className="w-56 ml-20 py-3 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="flex-1 sm:invisible sm:absolute">
        <p className="text-32 font-semibold text-center mt-16 ">Let Us Help You</p>
        <p className="w-56 ml-20 py-3 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default Footer;
