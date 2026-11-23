export default function PricingCard({ name, price, cadence, summary, cta }) {
  return (
    <div className="p-6 sm:p-8 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r last:border-r-0 border-[rgba(55,50,47,0.12)]">
      <div className="flex flex-col gap-3">
        <div className="text-[#49423D] text-base font-semibold">{name}</div>
        <div className="flex items-baseline gap-1">
          <span className="text-[#37322F] text-3xl sm:text-4xl font-semibold tracking-tight">
            {price}
          </span>
          {cadence && <span className="text-[#605A57] text-sm font-normal">{cadence}</span>}
        </div>
        <p className="text-[#605A57] text-sm leading-6">{summary}</p>
      </div>
      <button
        type="button"
        className="w-full py-2.5 px-4 rounded-full bg-[#37322F] text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
      >
        {cta}
      </button>
    </div>
  );
}
