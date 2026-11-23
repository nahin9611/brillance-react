export default function TestimonialCard({ quote, author, role, image, alt, logoImage, logoAlt }) {
  return (
    <div className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-background border border-b border-l-0 border-r-0 border-t-0">
      <div className="flex-1 py-12 md:py-16 flex flex-col md:flex-row justify-center items-end gap-6">
        <div className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row">
          <img
            src={image}
            alt={alt}
            className="w-48 h-50 rounded-lg object-cover"
          />

          <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6">
            {logoImage && (
              <img
                src={logoImage}
                alt={logoAlt || "Logo"}
                className="h-6 w-auto object-contain"
              />
            )}
            <div className="self-stretch justify-start flex flex-col text-[#49423D] text-2xl md:text-[32px] font-medium leading-10 md:leading-[42px] h-auto tracking-tight">
              {quote}
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.90)] text-lg font-medium leading-[26px]">
                {author}
              </div>
              <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.70)] text-lg font-medium leading-[26px]">
                {role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
