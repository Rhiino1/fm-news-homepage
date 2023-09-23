import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Header/Navbar";

import mainImgMobile from "@/assets/images/image-web-3-mobile.jpg";
import mainImgDesktop from "@/assets/images/image-web-3-desktop.jpg";
import firstImg from "@/assets/images/image-retro-pcs.jpg";
import secondImg from "@/assets/images/image-top-laptops.jpg";
import thirdImg from "@/assets/images/image-gaming-growth.jpg";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-auto gap-8 bg-[#FFFDFA] px-5 py-10 lg:mx-28 lg:mt-16">
        <Navbar></Navbar>
        <main className="flex flex-col sm:items-center lg:grid-cols-3 lg:grid gap-14 lg:pt-8 lg:gap-8">
          <section className="flex flex-col items-center lg:col-span-2">
            <article className="flex flex-col gap-5 item-center lg:grid lg:grid-cols-2">
              <div className="hidden w-full h-64 col-span-2 lg:block">
                <img
                  src={mainImgDesktop}
                  alt="web-3-image-desktop"
                  className="object-cover w-full h-full"
                />
              </div>
              <img
                src={mainImgMobile}
                alt="web-3-image-mobile"
                className="lg:hidden"
              />
              <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:col-span-2 item-center">
                <h1 className="row-span-2 font-extrabold text-[39px] text-5xl font-inter text-start text-[#000019] lg:text-6xl">
                  The Bright Future of Web 3.0?
                </h1>
                <p className="text-[15px] font-normal font-inter text-[#5D5F79] lg:pr-10">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="col-start-2 uppercase w-[56%] lg:w-48 transition-all bg-[#F15E50] font-bold font-inter text-lg text-[#FFFDFA] py-1 tracking-wider hover:bg-[#000019]">
                  Read more
                </button>
              </div>
            </article>
          </section>
          <section className="flex flex-col gap-5 item-center bg-[#000019] p-5">
            <h1 className="text-3xl font-extrabold font-inter text-[#E9AB53]">
              New
            </h1>
            <article className="flex flex-col gap-2">
              <h2 className="text-xl font-bold font-inter text-[#FFFDFA]">
                Hydrogen VS Electric Cars
              </h2>
              <p className="text-[#C5C6CE]">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </article>
            <hr className="my-1 bg-[#FFFDFA]"></hr>
            <article className="flex flex-col gap-2">
              <h2 className="text-xl font-bold font-inter text-[#FFFDFA]">
                The Downsides of AI Artistry
              </h2>
              <p className="text-[#C5C6CE]">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </article>
            <hr className="my-1 bg-[#FFFDFA]"></hr>
            <article className="flex flex-col gap-2">
              <h2 className="text-xl font-bold font-inter text-[#FFFDFA]">
                Is VC Funding Drying Up?
              </h2>
              <p className="text-[#C5C6CE]">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </article>
          </section>
          <section className="flex flex-col gap-5 item-center">
            <article className="grid grid-cols-12 grid-rows-1">
              <img
                src={firstImg}
                alt="Retro PCs"
                className="col-span-4 col-start-1 row-span-1 row-start-1 pr-4"
              />
              <div className="flex flex-col col-start-5 row-start-1 row-end-2 gap-1 pl-1 col-span-full">
                <h1 className="font-inter text-3xl font-bold text-[#C5C6CE]">
                  01
                </h1>
                <h2 className="font-inter text-lg font-bold text-[#000019]">
                  Reviving Retro PCs
                </h2>
                <p className="font-inter text-[15px] font-base text-[#5D5F79]">
                  What happens when old PCs are given modern upgrades?
                </p>
              </div>
            </article>
            <article className="grid grid-cols-12 grid-rows-1">
              <img
                src={secondImg}
                alt="Retro PCs"
                className="col-span-4 col-start-1 row-span-1 row-start-1 pr-4"
              />
              <div className="flex flex-col col-start-5 row-start-1 row-end-2 gap-1 pl-1 col-span-full">
                <h1 className="font-inter text-3xl font-bold text-[#C5C6CE]">
                  02
                </h1>
                <h2 className="font-inter text-lg font-bold text-[#000019]">
                  Top 10 Laptops of 2022
                </h2>
                <p className="font-inter text-[15px] font-base text-[#5D5F79]">
                  Our best picks for various needs and budgets.
                </p>
              </div>
            </article>
            <article className="grid grid-cols-12 grid-rows-1">
              <img
                src={thirdImg}
                alt="Retro PCs"
                className="col-span-4 col-start-1 row-span-1 row-start-1 pr-4 conta"
              />
              <div className="flex flex-col col-start-5 row-start-1 row-end-2 gap-1 pl-1 col-span-full">
                <h1 className="font-inter text-3xl font-bold text-[#C5C6CE]">
                  03
                </h1>
                <h2 className="font-inter text-lg font-bold text-[#000019]">
                  The Growth of Gaming
                </h2>
                <p className="font-inter text-[15px] font-base text-[#5D5F79]">
                  How the pandemic has sparked fresh opportunities.
                </p>
              </div>
            </article>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
