import Link from "next/link";
import Image from "next/image";
import three from "../images/three.gif";
import four from "../images/four.gif";
import one from "../images/one.gif";
import two from "../images/two.gif";
import five from "../images/five.gif";
import six from "../images/six.gif";
import seven from "../images/seven.gif";
const Features = () => {
  return (
    <>
      <div className="mt-10 sm:px-10 px-6 flex flex-col justify-center gap-10 ">
        <div className=" px-6 sm:px-10 text-blue-900 max-w-[700px] text-2xl md:text-3xl sm:text-6xl xl:text-5xl font-bold">
          Explore Unique <span className="text-shadeYellow">Features</span>
        </div>
        <div className="flex justify-center items-center  sm:justify-start sm:items-start ">
          <div className="flex flex-col sm:flex-row justify-center items-center h-72 sm:h-52 bg-feabg rounded-2xl shadow-[5px_5px_5px_5px_rgba(18,61,100)] ">
            <div className="flex justify-center items-center w-48 sm:w-[250px] py-4">
              <Image
                src={three}
                alt="three_gif"
                width={230}
                height={230}
                className="rounded-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 px-10">
              <button className="bg-navbg text-white rounded-xl w-56 h-7">
                IAS Sathi Chatbot
              </button>

              <div className=" text-sm sm:text-xl font-semibold text-navbg max-w-[400px] ">
                Want to know how toppers write answers, ask anthing and chatbot
                will help in writing answer.
                <Link href="#" className=" text-navbg font-extrabold underline">
                  Ask now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:px-10 px-6 flex flex-col justify-center gap-10 ">
        <div className="flex justify-center items-center  sm:justify-end sm:items-start ">
          <div className="flex flex-col sm:flex-row justify-center items-center h-72 sm:h-52 gap-3 bg-feabg rounded-2xl shadow-[5px_5px_5px_5px_rgba(233,180,14)]  ">
            <div className="flex justify-center items-center w-48 sm:w-[250px]  mt-2">
              <Image
                src={two}
                alt="three_gif"
                width={200}
                height={200}
                
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 px-10">
              <button className="bg-shadeYellow text-white rounded-xl w-56 h-7">
                Main answer evaluation
              </button>

              <div className="text-sm sm:text-xl font-semibold text-shadeYellow max-w-[400px] ">
                Analyse your hand written answers with A.I. powered feedback for
                better answer writing 
                <Link
                  href="#"
                  className=" text-shadeYellow font-extrabold underline"
                >
                  Analyze now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:px-10 px-6 flex flex-col justify-center gap-10 ">
        <div className="flex justify-center items-center  sm:justify-start sm:items-start ">
          <div className="flex flex-col sm:flex-row justify-center items-center h-72 sm:h-52 gap-2 bg-feabg rounded-2xl shadow-[5px_5px_5px_5px_rgba(18,61,100)] ">
            <div className="flex justify-center items-center w-48 sm:w-[250px] py-4">
              <Image
                src={one}
                alt="three_gif"
                width={230}
                height={230}
                
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 px-10">
              <button className="bg-navbg text-white rounded-xl w-56 h-7">
                Live News Panel
              </button>

              <div className="text-sm sm:text-xl font-semibold text-navbg max-w-[400px] ">
                Get live news updates and keeps yourself informed about current
                affairs..
                <Link href="#" className=" text-navbg font-extrabold underline">
                  Read now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:px-10 px-6 flex flex-col justify-center gap-10 ">
        <div className="flex justify-center items-center  sm:justify-end sm:items-start ">
          <div className="flex flex-col sm:flex-row justify-center items-center h-72 sm:h-52 gap-2 bg-feabg rounded-2xl shadow-[5px_5px_5px_5px_rgba(233,180,14)] ">
            <div className="flex justify-center items-center w-48 sm:w-[250px] py-4">
              <Image
                src={seven}
                alt="three_gif"
                width={200}
                height={230}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 px-10">
              <button className="bg-shadeYellow text-white rounded-xl w-56 h-7">
                Stress Management test
              </button>

              <div className="text-sm sm:text-xl font-semibold text-shadeYellow max-w-[400px] ">
                Keep a balance of study & health with a quick stress management
                test.
                <Link
                  href="#"
                  className=" text-shadeYellow font-extrabold underline"
                >
                  Start now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:px-10 px-6 flex flex-col justify-center gap-10 ">
        <div className="flex justify-center items-center  sm:justify-start sm:items-start ">
          <div className="flex flex-col sm:flex-row justify-center items-center h-72 sm:h-52 gap-2 bg-feabg rounded-2xl shadow-[5px_5px_5px_5px_rgba(18,61,100)] ">
            <div className="flex justify-center items-center w-48 sm:w-[250px] ">
              <Image
                src={six}
                alt="three_gif"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 px-10">
              <button className="bg-navbg text-white rounded-xl w-56 h-7">
                Prelims MCQs practice
              </button>

              <div className="text-sm sm:text-xl font-semibold text-navbg max-w-[400px] ">
                Get important MCQs to check your knowledge on various subjects
                and topics. 
                <Link href="#" className=" text-navbg font-extrabold underline">
                  Take Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:px-10 px-6 flex flex-col justify-center gap-10 ">
        <div className="flex justify-center items-center  sm:justify-end sm:items-start ">
          <div className="flex flex-col sm:flex-row justify-center items-center h-72 sm:h-52 gap-2 bg-feabg rounded-2xl shadow-[5px_5px_5px_5px_rgba(233,180,14)] ">
            <div className="flex justify-center items-center w-48 sm:w-[250px]">
              <Image
                src={four}
                alt="three_gif"
                width={190}
                height={190}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 px-10">
              <button className="bg-shadeYellow text-white rounded-xl w-56 h-7">
                AI Guide Group Discussion
              </button>

              <div className="text-sm sm:text-xl font-semibold text-shadeYellow max-w-[400px] ">
                Discuss various topics with peer , assisted with A.I.
                <Link
                  href="#"
                  className=" text-shadeYellow font-extrabold underline"
                >
                  Connect now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:px-10 px-6 flex flex-col justify-center gap-10 ">
        <div className="flex justify-center items-center  sm:justify-start sm:items-start ">
          <div className="flex flex-col sm:flex-row justify-center items-center h-72 sm:h-52 gap-2 bg-feabg rounded-2xl shadow-[5px_5px_5px_5px_rgba(18,61,100)] ">
            <div className="flex justify-center items-center w-48 sm:w-[250px] py-4">
              <Image
                src={five}
                alt="three_gif"
                width={230}
                height={230}
                
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 px-10">
              <button className="bg-navbg text-white rounded-xl w-56 h-7">
                Live Doubt Desk
              </button>

              <div className="text-sm sm:text-xl font-semibold text-navbg max-w-[400px] ">
                Get a personalised teacher for the better understanding of your
                querries and problem.
                <Link href="#" className=" text-navbg font-extrabold underline">
                  Ask now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
