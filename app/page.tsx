import SeventyOff from "@/components/normal/main/70%/seventy";
import FavSectionsCarousel from "@/components/normal/main/favsSectionCarousel/favsSectionCarousel";
import HeroSection from "@/components/normal/main/heroSection/heroSection";
import PersonalizedDesign from "@/components/normal/main/personalizedDesign/personalizedDesign";
// import TrendingRightNow from "@/components/normal/main/trendingrightnow/trendingrightnow";
import WhatsNewSection from "@/components/normal/main/whatsNew/whatsNew";

export default function Page() {
  return (
      <div className="flex w-full flex-col ">
        <HeroSection/>
        <FavSectionsCarousel/>
        <PersonalizedDesign/>
        <SeventyOff/>
        {/* <TrendingRightNow/> */}
        <WhatsNewSection/>

      </div>
  )
}