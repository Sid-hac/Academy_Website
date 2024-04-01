import BlogSection from "@/components/BlogSection";
import Features from "@/components/Features";
import HeroSection from "@/components/Herosection";
import JoinSystem from "@/components/JoinSystem";
import Navbar from "@/components/Navbar";
import ReviewSection from "@/components/ReviewSection";



export default function Home() {
  return (
      <div > 
         <Navbar/>
         <HeroSection/>
         <Features/>
         <ReviewSection/>
         <JoinSystem/>
         <BlogSection/>
         
      </div>
  );
}
