export default function SmallNews(props: {
  num: string;
  title: string;
  text: string;
  img: string;
}) {
  const { num, title, text, img } = props;
  return (
    <article className="grid grid-cols-12 grid-rows-1">
      <img
        src={img}
        alt="Small news"
        className="col-span-4 col-start-1 row-span-1 row-start-1 pr-4"
      />
      <div className="flex flex-col col-start-5 row-start-1 row-end-2 gap-1 pl-1 lg:justify-evenly col-span-full">
        <h1 className="font-inter text-3xl font-bold text-[#C5C6CE]">{num}</h1>
        <h2 className="font-inter text-lg font-bold text-[#000019] hover:text-[#F15E50]">
          <a href="#">{title}</a>
        </h2>
        <p className="font-inter text-[15px] font-base text-[#5D5F79] lg:text-base lg:pr-4">
          {text}
        </p>
      </div>
    </article>
  );
}
