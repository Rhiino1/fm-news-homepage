import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Header/Navbar";

import {
  mainImgMobile,
  mainImgDesktop,
  firstImg,
  secondImg,
  thirdImg,
} from "@/assets/images/index";

import SmallNews from "@/components/SmallNews";
import MainNews from "@/components/MainNews";
import SecondNews from "@/components/SecondNews";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-auto gap-8 bg-[#FFFDFA] px-5 py-10 lg:mx-28 lg:mt-10">
        <Navbar></Navbar>
        <main className="flex flex-col items-center lg:grid-cols-3 lg:grid gap-14 lg:pt-8 lg:gap-x-10 lg:gap-y-20 lg:items-start">
          <section className="flex flex-col items-center lg:col-span-2">
            <MainNews
              desktopImg={mainImgDesktop}
              mobileImg={mainImgMobile}
            ></MainNews>
          </section>
          <section className="flex flex-col gap-5 item-center bg-[#000019] lg:pt-6 lg:px-6 lg:pr-10 lg:pb-8 p-6 w-full lg:gap-5 lg:col-span-1">
            <SecondNews></SecondNews>
          </section>
          <section className="flex flex-col gap-5 item-center lg:grid lg:grid-cols-3 lg:col-span-3 lg:gap-x-10">
            <SmallNews
              num="01"
              title="Reviving Retro PCs"
              text="What happens when old PCs are given modern upgrades?"
              img={firstImg}
            ></SmallNews>
            <SmallNews
              num="02"
              title="Top 10 Laptops of 2022"
              text="Our best picks for various needs and budgets."
              img={secondImg}
            ></SmallNews>
            <SmallNews
              num="03"
              title="The Growth of Gaming"
              text="How the pandemic has sparked fresh opportunities."
              img={thirdImg}
            ></SmallNews>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
