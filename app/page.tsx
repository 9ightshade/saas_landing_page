// import CrmDashboard from "@/components/crmDashboard";

import ClientTestimonials from "@/components/clientTestimonials";
import CrmDashboard from "@/components/crmDashboard";
import DiscordCard from "@/components/discord.Card";
import FeaturesSection from "@/components/features";
import FeaturesShowcase from "@/components/featuresShowcase";
import NewsSection from "@/components/productNews";
import TransparentOpenSource from "@/components/transparentOpenSource";

export default function Home() {
  return (<div>
    <CrmDashboard/>
    <FeaturesSection/>
    <FeaturesShowcase/>
    <TransparentOpenSource/>
    <ClientTestimonials/>
    <DiscordCard/>
    <NewsSection/>
  </div>);
}
