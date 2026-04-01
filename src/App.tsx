import ASOServices from "./Landing-Pages/Services/DigitalMarketingSolution/ASOServices";
import AWSCloudServices from "./Landing-Pages/Services/Cloud&Devops/AWSCloudServices";
import AndroidAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/AndroidAppDevelopment";
import CloudManagedServices from "./Landing-Pages/Services/Cloud&Devops/CloudManagedServices";
import CloudMigrationServices from "./Landing-Pages/Services/Cloud&Devops/CloudMigrationServices";
import CloudSecurityServices from "./Landing-Pages/Services/Cloud&Devops/CloudSecurityServices";
import CloudServices from "./Landing-Pages/Services/Cloud&Devops/CloudServices";
import ContentMarketingServices from "./Landing-Pages/Services/DigitalMarketingSolution/ContentMarketingServices";
import ConversionRateOptimization from "./Landing-Pages/Services/DigitalMarketingSolution/ConversionRateOptimization";
import CustomSOftwareDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/CustomSoftwareDevelopment";
import DesignSystemDevelopment from "./Landing-Pages/Services/Design&Experience/DesignSystemDevelopment";
import DevOpsConsultingServices from "./Landing-Pages/Services/Cloud&Devops/DevOpsConsultingServices";
import DevOpsServices from "./Landing-Pages/Services/Cloud&Devops/DevOpsServices";
import DigitalMarketing from "./Landing-Pages/Services/DigitalMarketingSolution/DigitalMarketing";
import FlutterAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/FlutterAppDevelopment";
import Home from "./Home";
import IOSAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/IOSAppDevelopment";
import IOTDevelopment from "./Landing-Pages/Services/Cloud&Devops/IOTDevelopment";
import IPadAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/IPadAppDevelopment";
import LightnigMigrationDevelopment from "./Landing-Pages/Services/SalesForce/LightnigMigration&Development";
import MobileAppDesign from "./Landing-Pages/Services/Design&Experience/MobileAppDesign";
import MobileDevelopement from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/Mobile-Development";
import Navbar from "./Navbar";
import ProductDesignServices from "./Landing-Pages/Services/Design&Experience/ProductDesignServices";
import ReactNativeAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/ReactNativeAppDevelopment";
import SEOServices from "./Landing-Pages/Services/DigitalMarketingSolution/SEOServices";
import SalesForceConsulting from "./Landing-Pages/Services/SalesForce/SalesForceConsulting";
import SalesForceImplementationServices from "./Landing-Pages/Services/SalesForce/SalesForceImplementationServices";
import SalesForceIntegrationServices from "./Landing-Pages/Services/SalesForce/SalesForceIntegrationServices";
import SocialMediaMarketing from "./Landing-Pages/Services/DigitalMarketingSolution/SocialMediaMarketing";
import UIUXDesign from "./Landing-Pages/Services/Design&Experience/UI&UXDesign";
import UXReasearchServices from "./Landing-Pages/Services/Design&Experience/UXResearchServices";
import WebAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/WebAppDevelopment";
import { Route, Routes } from "react-router-dom";
import { PPC } from "./Landing-Pages/Services/DigitalMarketingSolution/PPC";

// Dummy Pages (you replace later)
const Page = ({ name }: { name: string }) => (
  <div style={{ padding: "100px 20px" }}>
    <h1>{name}</h1>
  </div>
);

export default function App() {
  return (
<>
      <Navbar />

      <Routes>
        {/* MAIN ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Page name="Portfolio" />} />
        <Route path="/careers" element={<Page name="Careers" />} />
        <Route path="/contact" element={<Page name="Contact" />} />

        {/* HOME */}
        <Route path="/home/company-overview" element={<Page name="Company Overview" />} />
        <Route path="/home/vision-mission" element={<Page name="Vision & Mission" />} />
        <Route path="/home/leadership-team" element={<Page name="Leadership Team" />} />
        <Route path="/home/our-journey" element={<Page name="Our Journey" />} />
        <Route path="/home/awards-recognition" element={<Page name="Awards" />} />
        <Route path="/home/nasscom-membership" element={<Page name="NASSCOM" />} />
        <Route path="/home/life-at-mtouch-labs" element={<Page name="Life at WorkHolo" />} />

        {/* SERVICES */}
        <Route path="/services/mobile-app-development" element={<MobileDevelopement />} />
        <Route path="/services/ios-app-development" element={<IOSAppDevelopment />} />
        <Route path="/services/android-app-development" element={<AndroidAppDevelopment />} />
        <Route path="/services/ipad-app-development" element={<IPadAppDevelopment />} />
        <Route path="/services/flutter-app-development" element={<FlutterAppDevelopment />} />
        <Route path="/services/react-native-app-development" element={<ReactNativeAppDevelopment />} />
        <Route path="/services/web-application-development" element={<WebAppDevelopment />} />
        <Route path="/services/custom-software-development" element={<CustomSOftwareDevelopment />} />

        {/* CLOUD SERVICES */}
<Route path="/services/cloud-services" element={<CloudServices />} />
<Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
<Route path="/services/cloud-security-services" element={<CloudSecurityServices />} />
<Route path="/services/iot-development" element={<IOTDevelopment />} />
<Route path="/services/devops-services" element={<DevOpsServices />} />
<Route path="/services/devops-consulting-services" element={<DevOpsConsultingServices />} />
<Route path="/services/cloud-managed-services" element={<CloudManagedServices />} />
<Route path="/services/aws-cloud-services" element={<AWSCloudServices />} />

{/* SALESFORCE */}
<Route path="/services/salesforce-consulting" element={<SalesForceConsulting/>} />
<Route path="/services/salesforce-implementation" element={<SalesForceImplementationServices />} />
<Route path="/services/lightning-migration-development" element={<LightnigMigrationDevelopment/>} />
<Route path="/services/salesforce-integration" element={<SalesForceIntegrationServices />} />

{/* DESIGN & EXPERIENCE */}
<Route path="/services/ui-ux-design-company" element={<UIUXDesign />} />
<Route path="/services/product-design-services" element={<ProductDesignServices />} />
<Route path="/services/design-sustem-development" element={<DesignSystemDevelopment />} />
<Route path="/services/mobile-app-design" element={<MobileAppDesign />} />
<Route path="/services/ux-research-services" element={<UXReasearchServices />} />

{/* DIGITAL MARKETING */}
<Route path="/services/digital-marketing" element={<DigitalMarketing />} />
<Route path="/services/ppc-advertising" element={<PPC />} />
<Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
<Route path="/services/content-marketing-services" element={<ContentMarketingServices />} />
<Route path="/services/seo-services" element={<SEOServices />} />
<Route path="/services/aso-services" element={<ASOServices/>} />
<Route path="/services/conversion-rate-optimization" element={<ConversionRateOptimization />} />

        {/* PRODUCTS */}
        <Route path="/products/food-delivery-app" element={<Page name="Food Delivery" />} />
        <Route path="/products/grocery-delivery-app" element={<Page name="Grocery Delivery" />} />
        <Route path="/products/taxi-booking-app" element={<Page name="Taxi Booking" />} />
        <Route path="/products/ecommerce-app" element={<Page name="Ecommerce" />} />

        {/* RESOURCES */}
        <Route path="/resources/web-developers" element={<Page name="Web Developers" />} />
        <Route path="/resources/react-developers" element={<Page name="React Developers" />} />
        <Route path="/resources/node-js-developers" element={<Page name="Node Developers" />} />

      </Routes>
      </>
  );
}