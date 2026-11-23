import { extraFeaturesData } from "../data/brillanceData";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div id="features" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-6 py-8 border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center text-center gap-2">
        <span className="text-xs font-medium text-[#49423D] uppercase tracking-wider">
          Features
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#37322F] tracking-tight">
          Designed for custom contract operations
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {extraFeaturesData.map((feature) => (
          <FeatureCard key={feature.id} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
}
