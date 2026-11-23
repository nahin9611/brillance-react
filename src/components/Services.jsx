import { servicesGridData } from "../data/brillanceData";
import ServiceCard from "./ServiceCard";
import ServicesBadgeIcon from "./icons/ServicesBadgeIcon";

export default function Services() {
  return (
    <div id="services" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
            <ServicesBadgeIcon width={12} height={12} />
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
              Services
            </div>
          </div>
          <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            Built for absolute clarity and focused work
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            Stay focused with tools that organize, connect
            <br />
            and turn information into confident decisions.
          </div>
        </div>
      </div>

      <div className="self-stretch flex justify-center items-start">
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block" />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {servicesGridData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              alt={service.alt}
              imgClass={service.imgClass}
              hasBottomBorder={service.hasBottomBorder}
              hasRightBorder={service.hasRightBorder}
            />
          ))}
        </div>
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block" />
      </div>
    </div>
  );
}
