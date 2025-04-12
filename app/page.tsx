// import CrmDashboard from "@/components/crmDashboard";

import CrmDashboard from "@/components/crmDashboard";
import DiscordCard from "@/components/discord.Card";
import FeaturesSection from "@/components/features";
import FeaturesShowcase from "@/components/featuresShowcase";
import NewsSection from "@/components/productNews";

export default function Home() {
  return (<div>
    <CrmDashboard/>
    <FeaturesSection/>
    <FeaturesShowcase/>
    {/* <DiscordCard/> */}
    {/* <NewsSection/> */}
  </div>);
}
