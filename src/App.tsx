import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Header/Navbar";
import firstImgMobile from "@/assets/images/image-web-3-mobile.jpg";
import firstImgDesktop from "@/assets/images/image-web-3-desktop.jpg";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-auto gap-8 bg-[#FFFDFA] px-5 py-10">
        <Navbar></Navbar>
        <section className="flex flex-col items-center lg:hidden">
          <article className="flex flex-col gap-5 item-center">
            <img src={firstImgMobile} alt="web-3-image" />
            <h1 className="font-extrabold text-[39px] text-5xl font-inter text-start text-[#000019]">
              The Bright Future of Web 3.0?
            </h1>
            <p className="text-[15px] font-normal font-inter text-[#5D5F79]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
          </article>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
