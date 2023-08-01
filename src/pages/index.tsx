import Banner from "@/Components/Home/Banner/Banner";
import AwardsSlider from "@/Components/Home/OurAwards/AwardSlider";
import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUse";
import PlaceGallery from "@/Components/Home/popularPlace/PalceGallary";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestDeals from "@/Components/Home/BestDeals/BestDeals";
import Continents from "@/Components/Home/Continents/Continents";
import Footer from "@/Components/shared/Footer/Footer";
import RecentTrips from "@/Components/Home/RecentTrips/RecentTrips";

const Home = () => {
  return (
    <>
      <Head>
        <title>MR-TRavel</title>
      </Head>
      <main>
        <Banner />
        <Continents />
        <BestDeals />
        <RecentTrips />
        <PlaceGallery />
        <WhyChooseUs />

        <AwardsSlider />

        <Footer />
      </main>
    </>
  );
};

export default Home;
