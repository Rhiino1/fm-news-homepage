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
      <div className="flex flex-col h-screen w-auto gap-8 bg-[#FFFDFA] px-5 py-10">
        <Navbar></Navbar>
        <main className="flex flex-col items-center gap-10 lg:hidden">
          <section className="flex flex-col items-center lg:hidden">
            <article className="flex flex-col gap-5 item-center">
              <img src={mainImgMobile} alt="web-3-image" />
              <h1 className="font-extrabold text-[39px] text-5xl font-inter text-start text-[#000019]">
                The Bright Future of Web 3.0?
              </h1>
              <p className="text-[15px] font-normal font-inter text-[#5D5F79]">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="uppercase w-[56%] transition-all bg-[#F15E50] font-bold font-inter text-lg text-[#FFFDFA] py-3 tracking-wider hover:bg-[#000019]">
                Read more
              </button>
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
            <article>
              <img src={firstImg} alt="Retro PCs" />
              <h1>01</h1>
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given modern upgrades?</p>
            </article>
            <article>
              <img src={secondImg} alt="Retro PCs" />
              <h1>02</h1>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks for various needs and budgets.</p>
            </article>
            <article>
              <img src={thirdImg} alt="Retro PCs" />
              <h1>03</h1>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </article>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;