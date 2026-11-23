import { testimonialsData } from "../data/brillanceData";
import TestimonialCard from "./TestimonialCard";
import TestimonialBadgeIcon from "./icons/TestimonialBadgeIcon";

export default function Testimonials() {
  return (
    <div id="testimonials" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
            <TestimonialBadgeIcon width={12} height={10} />
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
              Testimonials
            </div>
          </div>
          <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            Confidence backed by results
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            Our customers achieve more each day
            <br className="hidden sm:block" />
            because their tools are simple, powerful, and clear.
          </div>
        </div>
      </div>

      {testimonialsData.map((item) => (
        <TestimonialCard
          key={item.id}
          quote={item.quote}
          author={item.author}
          role={item.role}
          image="./assets/images/avatar/professional-man-avatar-with-beard-and-glasses-loo.jpg"
          alt={item.alt}
          logoImage="./assets/logo.svg"
          logoAlt="Logo"
        />
      ))}
    </div>
  );
}
