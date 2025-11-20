interface blogDataProps {
  category: string;
  date: string;
  title: string;
}

const blogData: blogDataProps[] = [
  {
    category: "Bitcoin",
    date: "2025-10-15",
    title: "Bitcoin Reaches New All-Time High After SEC Approves ETF",
  },
  {
    category: "Altcoins",
    date: "2025-08-19",
    title: "Top Promising Altcoins to Watch in 2025",
  },
  {
    category: "Security",
    date: "2025-06-02",
    title: "How to Protect Your Crypto from Phishing Attacks",
  },
];

function TableBottom() {
  return (
    <div className="text-white bg-[#1F243A] rounded-2xl lg:col-start-5 lg:col-end-7 lg:row-start-4 lg:row-end-7 md:col-start-3 md:col-end-5 md:row-start-7 md:row-end-9 col-start-2 col-end-3 row-start-6 row-end-8 flex flex-col">
      <div className="p-container text-center">
        <span className="font-bold">Check our blog</span>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 hover:bg-[#4A90E2] h-full group p-item duration-200"
          >
            <div className="flex items-center gap-2">
              <span className="font-black text-[0.7rem] lg:text-[0.9rem] md:[0.8rem]">
                {blog?.category}
              </span>
              <div className="w-2 h-2 bg-[#4A90E2] group-hover:bg-[#FFF] rounded-full" />
              <span className="font-light text-[0.7rem] lg:text-[0.9rem] md:[0.8rem]">
                {blog?.date}
              </span>
            </div>
            <a className="flex items-center justify-between cursor-pointer">
              <p className="text-[0.85rem] md:text-[0.95rem] font-light mr-2 group-hover:underline">
                {blog?.title}
              </p>
              <div className="text-[#4A90E2] group-hover:text-[#FFF]">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableBottom;
