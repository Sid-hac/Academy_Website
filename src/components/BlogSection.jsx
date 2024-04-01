import Image from "next/image";
import profile from "../images/profile.jpg";
import book from "../images/book.jpg";
import arrow from "../images/arrow.jpg";

const BlogSection = () => {
  return (
    <section className="mt-20 mb-10 px-20">
      <div className="  flex justify-between">
        <h1 className="text-blue-900 max-w-[700px] text-2xl md:text-3xl sm:text-6xl xl:text-5xl font-bold">
          Learn Through <span className="text-shadeYellow ">Blogs</span>
        </h1>
        <p className="text-sm">
          SEE MORE <span className="text-blue-900  text-xl">&rarr;</span>{" "}
        </p>
      </div>
      <div className="flex flex-row justify-start  items-center gap-8 mt-6">
        <div className="flex flex-col justify-center items-start gap-4 bg-feabg  shadow-[3px_3px_3px_3px_rgba(18,61,100)] p-5 rounded-xl">
          <div className="flex flex-row justify-center items-center gap-2">
            <Image
              src={profile}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full "
            />
            <p className="text-navbg text-sm font-bold">Karthik Sharma</p>
          </div>
          <div>
            <p className="text-blue-900 max-w-[400px] text-xl  font-bold">
              Unleash the Power of AI: Introducing Our Chatbot Feature to Ace
              Your UPSC Prep
            </p>
          </div>
          <span
            aria-hidden="true"
            className="w-full h-[4px] bg-shadeYellow rounded-xl mt-4"
          />
          <div className="flex flex-row justify-between items-center">
            <button className="bg-navbg p-3 text-white flex gap-2 rounded-3xl justify-center items-center">
              <Image
                src={book}
                alt="book"
                width={30}
                height={30}
                className="object-contain "
              />
               <p className="text-sm ">3 min read</p>
            </button>
            <span>&rarr;</span> 
            
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 bg-feabg  shadow-[3px_3px_3px_3px_rgba(18,61,100)] p-5 rounded-xl">
          <div className="flex flex-row justify-center items-center gap-2">
            <Image
              src={profile}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full "
            />
            <p className="text-navbg text-sm font-bold">Karthik Sharma</p>
          </div>
          <div>
            <p className="text-blue-900 max-w-[400px] text-xl  font-bold">
              Unleash the Power of AI: Introducing Our Chatbot Feature to Ace
              Your UPSC Prep
            </p>
          </div>
          <span
            aria-hidden="true"
            className="w-full h-[4px] bg-shadeYellow rounded-xl mt-4"
          />
          <div className="flex flex-row justify-between items-center ">
            <button className="bg-navbg p-3 text-white flex gap-2 rounded-3xl justify-center items-center">
              <Image
                src={book}
                alt="book"
                width={30}
                height={30}
                className="object-contain "
              />
               <p className="text-sm ">3 min read</p>
            </button>
            <span> &rarr;</span>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default BlogSection;
