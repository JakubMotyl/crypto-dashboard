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
    <div className="text-white p-container bg-[#1F243A] rounded-2xl col-start-5 col-end-7 row-span-3 flex flex-col gap-6">
      <div>
        <span className="font-bold">Check our blog</span>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        {blogData.map((blog, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-black text-xs">{blog?.category}</span>
              <div className="w-2 h-2 bg-[#4A90E2] rounded-full" />
              <span className="font-light text-xs">{blog?.date}</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.9rem] mr-2">{blog?.title}</p>
              <div className="text-[#4A90E2] cursor-pointer">
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableBottom;
