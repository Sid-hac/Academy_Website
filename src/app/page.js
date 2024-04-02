import BlogSection from "@/components/BlogSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";
import JoinSystem from "@/components/JoinSystem";
import Navbar from "@/components/Navbar";
import Personalised from "@/components/Personalised";
import ReviewSection from "@/components/ReviewSection";



export default function Home() {
  return (
      <div > 
         <Navbar/>
         <HeroSection/>
         <Personalised/>
         <Features/>
         <ReviewSection/>
         <JoinSystem/>
         <BlogSection/>
         <Footer/>
         
      </div>
  );
}
