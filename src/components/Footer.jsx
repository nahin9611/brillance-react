import { socialLinksData, footerColumnsData } from "../data/brillanceData";

export default function Footer() {
  return (
    <div id="footer" className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex justify-start items-center gap-3">
            <div className="text-center text-[#49423D] text-xl font-semibold leading-4">
              Brillance
            </div>
          </div>
          <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">
            Coding made effortless
          </div>
          <div className="flex justify-start items-start gap-4">
            {socialLinksData.map(({ id, name, href, Icon }) => (
              <a
                key={id}
                href={href}
                aria-label={name}
                className="w-6 h-6 relative overflow-hidden flex items-center justify-center hover:opacity-75 transition-opacity"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {footerColumnsData.map((col) => (
            <div key={col.id} className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
              <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                {col.heading}
              </div>
              <div
                className={`flex flex-col ${
                  col.alignCenter ? "justify-center items-center" : "justify-end items-start"
                } gap-2`}
              >
                {col.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`${
                      col.alignCenter ? "self-stretch" : ""
                    } text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative" />
        </div>
      </div>
    </div>
  );
}
