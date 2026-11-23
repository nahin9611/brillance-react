export default function FeatureCard({ title, description }) {
  return (
    <div className="p-6 flex flex-col justify-start items-start gap-2 border-b sm:border-b-0 sm:border-r last:border-r-0 border-[rgba(55,50,47,0.12)]">
      <h3 className="text-[#37322F] text-base font-semibold leading-6">{title}</h3>
      <p className="text-[#605A57] text-sm font-normal leading-relaxed">{description}</p>
    </div>
  );
}
