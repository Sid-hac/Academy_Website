import Image from "next/image";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";

const ReviewSection = () => {
  return (
    <section className="  mt-20 ">
      <div >
        <div className=" px-20 text-blue-900 max-w-[700px] text-2xl md:text-3xl sm:text-6xl xl:text-5xl font-bold">
          Review <span className="text-shadeYellow ">Section</span>
        </div>
        <div className="overflow-x-auto scrollbar-hidden px-20 py-5">
            {/* 1st review */}
        <div className="flex flex-row justify-start items-start gap-10 mt-10 ">
          <div className="relative flex flex-col justify-center items-center gap-3  bg-feabg shadow-[3px_3px_3px_3px_rgba(18,61,100)] rounded-xl p-8 mt-10 min-w-[400px] flex-shrink-0">
            <div className="absolute -top-14 left-30">
              <Image
                src={person1}
                alt="review_1_image"
                width={150}
                height={150}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-16">
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className="text-navbg text-sm font-bold">Amit Sharma</h3>
                <p className="text-navbg text-sm font-bold">
                  2nd Rank IAS 2020 Rank
                </p>
              </div>
              <div className="max-w-[330px] ">
                <span className="text-navbg">&quot;</span>
                <p className="text-xs text-navbg">
                  Useful resource for UPSC Aspirants, The chatbot is a great
                  feature. It provides quick solution to all the doubts anytime,
                  anywhere. The Live Doubt Counter is also equally helpful as it
                  connects me with professional teacher who solves all my doubts
                  in no time. Also , the news panel keeps me updated about the
                  current affairs, While the Stress Management feature keeps me
                  less stressed during my intense study sessions....
                </p>
              </div>
            </div>
          </div>
          {/* 2nd review */}
          <div className="relative flex flex-col justify-center items-center gap-3  bg-feabg shadow-[3px_3px_3px_3px_rgba(18,61,100)] rounded-xl p-8 mt-10 min-w-[400px] flex-shrink-0">
            <div className="absolute -top-14 left-30">
              <Image
                src={person2}
                alt="review_2_image"
                width={150}
                height={150}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-16">
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className="text-navbg text-sm font-bold">Namitha B N</h3>
                <p className="text-navbg text-sm font-bold">
                  Aspirant 2025 batch
                </p>
              </div>
              <div className="max-w-[330px] ">
                <span className="text-navbg">&quot;</span>
                <p className="text-xs text-navbg">
                  This website is a treasure trove for the UPSC Aspirants like
                  me. The Chatbot is my go-to for instant solution, while the
                  Live Doubt Counter have been really helpful in clarifying the
                  difficult concepts. The News Panel keeps me updated with all
                  the essential updates . and after all this Stress Management
                  has been comes out as a blessing in managing the anxiety &
                  stress. Kudos to the team for creating such a user-friendly
                  platform.
                </p>
              </div>
            </div>
          </div>

          {/* 3rd review */}

          <div className="relative flex flex-col justify-center items-center gap-3  bg-feabg shadow-[3px_3px_3px_3px_rgba(18,61,100)] rounded-xl p-8 mt-10 min-w-[400px] flex-shrink-0">
            <div className="absolute -top-14 left-30">
              <Image
                src={person2}
                alt="review_2_image"
                width={150}
                height={150}
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-16">
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className="text-navbg text-sm font-bold">Namitha B N</h3>
                <p className="text-navbg text-sm font-bold">
                  Aspirant 2025 batch
                </p>
              </div>
              <div className="max-w-[330px] ">
                <span className="text-navbg">&quot;</span>
                <p className="text-xs text-navbg">
                  This website is a treasure trove for the UPSC Aspirants like
                  me. The Chatbot is my go-to for instant solution, while the
                  Live Doubt Counter have been really helpful in clarifying the
                  difficult concepts. The News Panel keeps me updated with all
                  the essential updates . and after all this Stress Management
                  has been comes out as a blessing in managing the anxiety &
                  stress. Kudos to the team for creating such a user-friendly
                  platform.
                </p>
              </div>
            </div>
          </div>
          {/* 4th review */}
          
        </div>
            
        </div>
        
      </div>
    </section>
  );
};

export default ReviewSection;
