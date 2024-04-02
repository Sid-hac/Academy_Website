import Image from "next/image";
import logo from "../images/logo.png";
// import quotation from "../images/quotation.png";
const JoinSystem = () => {
  return (
    <section className="flex flex-row mt-10 mb-10 justify-center px-4 sm:px-20 items-center w-full">
        <div className="bg-navbg px-5 py-4 flex flex-col sm:flex-row justify-center items-center w-full h-30 sm:h-52 rounded-2xl gap-3 shadow-[5px_5px_5px_4px_rgba(233,180,14)]">
          <div className="bg-white rounded-2xl px-5 py-1 flex  ">
            <button className="text-navbg text-sm font-extrabold sm:w-40 w-30 h-8 sm:text-xl">
              Join For Free
            </button>
          </div>
          <div className="text-white font-normal sm:text-3xl md:text-2xl text-xl">
            <p>An investment in knowledge always pays the best interest</p>
          </div>
          <div className="sm:block ">
            <Image src={logo} alt="logo" width={190} height={190}  />
          </div>
        </div>
    
    </section>
  );
};

export default JoinSystem;
