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
        <meta property="og:title" content="MR-TRavel" />
        <meta property="og:description" content="Description of your page" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1698046828316-9219096ab432?auto=format&fit=crop&q=80&w=1636&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta
          property="og:url"
          content="https://images.unsplash.com/photo-1698046828316-9219096ab432?auto=format&fit=crop&q=80&w=1636&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Head>
      <main className="container mx-auto">
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
