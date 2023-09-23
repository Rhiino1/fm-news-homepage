function MainNews(props: { desktopImg: string; mobileImg: string }) {

  const {desktopImg, mobileImg} = props;
  return (
    <article className="flex flex-col gap-5 item-center lg:grid lg:grid-cols-2 lg:gap-y-5">
      <div className="hidden w-full col-span-2 h-72 lg:block">
        <img
          src={desktopImg}
          alt="web-3-image-desktop"
          className="w-full h-full "
        />
      </div>
      <img src={mobileImg} alt="web-3-image-mobile" className="lg:hidden" />
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:col-span-2 item-center lg:gap-x-10">
        <h1 className="row-span-2 font-extrabold text-[39px] text-5xl font-inter text-start text-[#000019] lg:text-6xl">
          The Bright Future of Web 3.0?
        </h1>
        <p className="text-[15px] font-normal font-inter text-[#5D5F79] lg:pr-8">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="col-start-2 uppercase w-[56%] lg:w-48 transition-all bg-[#F15E50] font-bold font-inter text-lg text-[#FFFDFA] py-3 lg:py-1 tracking-wider hover:bg-[#000019]">
          Read more
        </button>
      </div>
    </article>
  );
}

export default MainNews;
