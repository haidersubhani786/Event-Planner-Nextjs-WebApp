import Image from "next/image";
import BrideGroomCards from "../components/homepage/BrideGroomCards";
import CounterArea from "../components/homepage/CounterArea";
import WeddingEventArea from "../components/homepage/WeddingEventArea";
import AboutArea from "../components/homepage/AboutArea";
import AboutArea2 from "../components/homepage/AboutArea2";
import BestFriendArea from "../components/homepage/BestFriendArea";
import GalleryArea from "../components/homepage/GalleryArea";
import ContactArea from "../components/homepage/ContactArea";
import TestimonialArea from "../components/homepage/TestimonialArea";
import BlogArea from "../components/homepage/BlogArea";
import BrandArea from "../components/homepage/BrandArea";
import LovebirdSliderNavbar from "../components/homepage/LovebirdSlider";
import FooterArea from "../components/FooterArea";



export default function Home() {
  return (
    <>
     
    <LovebirdSliderNavbar />
    <BrideGroomCards />
    <CounterArea />
    <WeddingEventArea />
    <AboutArea />
    <AboutArea2 />
    <BestFriendArea />
    <GalleryArea />
    <ContactArea />
    <TestimonialArea />
    <BlogArea />
    <BrandArea />
    
    </>
    
  );
}
