function SecondNews() {
  const news = [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at whatthat means.",
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-extrabold font-inter text-[#E9AB53]">New</h1>
      {news.map((item, index) => {
        return (
          <>
            <article key={index} className="flex flex-col gap-4">
              <h2 className="text-xl font-bold font-inter text-[#FFFDFA] hover:text-[#E9AB53]">
                <a href="#">{item.title}hola</a>
              </h2>
              <p className="text-[#C5C6CE]">{item.text}</p>
            </article>
            {index != news.length - 1 ? (
              <hr className="my-1 bg-[#FFFDFA]"></hr>
            ) : (
              <></>
            )}
          </>
        );
      })}
    </>
  );
}

export default SecondNews;
