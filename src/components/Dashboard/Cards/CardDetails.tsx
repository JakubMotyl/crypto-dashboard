interface CardDetailsProps {
  name?: string;
  price?: number | undefined;
}

const CardDetails = ({ name, price }: CardDetailsProps) => {
  function formatNumber(value?: number) {
    if (value === undefined || value === null) return "-";

    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(value);
  }
  return (
    <div className="rounded-2xl bg-[#1F243A] p-item flex flex-col gap-2 justify-between">
      <span className="uppercase text-gray-300 lg:text-[1.05rem] md:text-[0.95rem] text-sm">
        {name}
      </span>
      <div className="flex items-center justify-center gap-2">
        <span className="uppercase md:text-xl lg:text-[1.3rem] text-[1.15rem] text-white font-bold">
          ${formatNumber(price)}
        </span>
        <span className="uppercase text-gray-300">USD</span>
      </div>
    </div>
  );
};

export default CardDetails;
