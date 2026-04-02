import ASOServices from "./Landing-Pages/Services/DigitalMarketingSolution/ASOServices";
import AWSCloudServices from "./Landing-Pages/Services/Cloud&Devops/AWSCloudServices";
import AndroidAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/AndroidAppDevelopment";
import CarWashApp from "./Landing-Pages/Products/OnDemand&DeliveryApps/CarWashApp";
import ChefManagementApp from "./Landing-Pages/Products/OnDemand&DeliveryApps/ChefManagementApp";
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
import ECommerceApp from "./Landing-Pages/Products/E-Commerce&MarketPlaceSolution/e-CommerceApp";
import ELearningApp from "./Landing-Pages/Products/Education&Entertainment/E-LearningApp";
import FlutterAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/FlutterAppDevelopment";
import FoodDeliveryApp from "./Landing-Pages/Products/OnDemand&DeliveryApps/FoodDeliveryApp";
import GamingApp from "./Landing-Pages/Products/Education&Entertainment/GamingApp";
import GroceryDeliveryApp from "./Landing-Pages/Products/OnDemand&DeliveryApps/GroceryDeliveryApp";
import Home from "./Home";
import HotelBookingApp from "./Landing-Pages/Products/Booking&ServicePlatform/HotelBookingApp";
import IOSAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/IOSAppDevelopment";
import IOTDevelopment from "./Landing-Pages/Services/Cloud&Devops/IOTDevelopment";
import IPadAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/IPadAppDevelopment";
import LightnigMigrationDevelopment from "./Landing-Pages/Services/SalesForce/LightnigMigration&Development";
import MilkDeliveryApp from "./Landing-Pages/Products/OnDemand&DeliveryApps/MilkDeliveryApp";
import MobileAppDesign from "./Landing-Pages/Services/Design&Experience/MobileAppDesign";
import MobileDevelopement from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/Mobile-Development";
import MultiVendorMarketPlace from "./Landing-Pages/Products/E-Commerce&MarketPlaceSolution/MultiVendorMarketPlace";
import Navbar from "./Navbar";
import ProductDesignServices from "./Landing-Pages/Services/Design&Experience/ProductDesignServices";
import ReactNativeAppDevelopment from "./Landing-Pages/Services/Services_SoftwareDevelopment.tsx/ReactNativeAppDevelopment";
import RealEstateApp from "./Landing-Pages/Products/Booking&ServicePlatform/RealEstateApp";
import SEOServices from "./Landing-Pages/Services/DigitalMarketingSolution/SEOServices";
import SalesForceConsulting from "./Landing-Pages/Services/SalesForce/SalesForceConsulting";
import SalesForceImplementationServices from "./Landing-Pages/Services/SalesForce/SalesForceImplementationServices";
import SalesForceIntegrationServices from "./Landing-Pages/Services/SalesForce/SalesForceIntegrationServices";
import SocialMediaMarketing from "./Landing-Pages/Services/DigitalMarketingSolution/SocialMediaMarketing";
import SportsAndFitness from "./Landing-Pages/Products/HealthCare&WellNess/Sports&FitnessApp";
import TaxiBookingApp from "./Landing-Pages/Products/Booking&ServicePlatform/TaxiBookingApp";
import TicketBookingApp from "./Landing-Pages/Products/Booking&ServicePlatform/TicketBookingApp";
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

{/* ON-DEMAND & DELIVERY */}
<Route path="/products/food-delivery-app" element={<FoodDeliveryApp />} />
<Route path="/products/Grocery-delivery-app" element={<GroceryDeliveryApp />} />
<Route path="/products/milk-delivery-app" element={<MilkDeliveryApp />} />
<Route path="/products/car-wash-app" element={<CarWashApp />} />
<Route path="/products/chef-management-app" element={<ChefManagementApp />} />

{/* BOOKING */}
<Route path="/products/taxi-booking-app" element={<TaxiBookingApp />} />
<Route path="/products/hotel-booking-app" element={<HotelBookingApp />} />
<Route path="/products/ticket-booking-app" element={<TicketBookingApp />} />
<Route path="/products/real-estate-app" element={<RealEstateApp />} />

{/* E-COMMERCE */}
<Route path="/products/ecommerce-app" element={<ECommerceApp />} />
<Route path="/products/online-shopping-app" element={<Page name="Online Shopping App" />} />
<Route path="/products/multi-vendor-marketplace" element={<MultiVendorMarketPlace />} />

{/* EDUCATION & ENTERTAINMENT */}
<Route path="/products/e-learning-app" element={<ELearningApp />} />
<Route path="/products/gaming-app" element={<GamingApp />} />

{/* HEALTHCARE */}
<Route path="/products/diagnostic-app" element={<Page name="Diagnostic App" />} />
<Route path="/products/sports-fitness-app" element={<SportsAndFitness />} />




{/* MOBILE APP DEVELOPERS */}
<Route path="/resources/mobile-app-developers" element={<MobileAppDesign />} />
<Route path="/resources/android-app-developers" element={<AndroidAppDevelopment />} />
<Route path="/resources/ios-app-developers" element={<IOSAppDevelopment />} />
<Route path="/resources/ipad-app-developers" element={<IPadAppDevelopment />} />
<Route path="/resources/custom-software-developers" element={<CustomSOftwareDevelopment />} />
<Route path="/resources/native-app-developers" element={<Page name="Native App Developers" />} />
<Route path="/resources/hybrid-app-developers" element={<Page name="Hybrid App Developers" />} />
<Route path="/resources/flutter-app-developers" element={<FlutterAppDevelopment />} />
<Route path="/resources/react-native-developers" element={<ReactNativeAppDevelopment />} />

{/* WEB DEVELOPERS */}
<Route path="/resources/web-developers" element={<WebAppDevelopment />} />
<Route path="/resources/wordpress-developers" element={<Page name="WordPress Developers" />} />
<Route path="/resources/php-developers" element={<Page name="PHP Developers" />} />
<Route path="/resources/custom-cms-developers" element={<Page name="Custom CMS Developers" />} />
<Route path="/resources/angular-developers" element={<Page name="Angular Developers" />} />
<Route path="/resources/react-developers" element={<Page name="React Developers" />} />
<Route path="/resources/swift-developers" element={<Page name="Swift Developers" />} />
<Route path="/resources/laravel-developers" element={<Page name="Laravel Developers" />} />
<Route path="/resources/magento-developers" element={<Page name="Magento Developers" />} />
<Route path="/resources/woocommerce-developers" element={<Page name="WooCommerce Developers" />} />

{/* ENTERPRISE & CLOUD */}
<Route path="/resources/javascript-developers" element={<Page name="JavaScript Developers" />} />
<Route path="/resources/full-stack-developers" element={<Page name="Full Stack Developers" />} />
<Route path="/resources/mean-stack-developers" element={<Page name="MEAN Stack Developers" />} />
<Route path="/resources/mern-stack-developers" element={<Page name="MERN Stack Developers" />} />
<Route path="/resources/vue-js-developers" element={<Page name="Vue.js Developers" />} />
<Route path="/resources/node-js-developers" element={<Page name="Node.js Developers" />} />
<Route path="/resources/aws-developers" element={<Page name="AWS Developers" />} />
<Route path="/resources/dedicated-developers" element={<Page name="Dedicated Developers" />} />
<Route path="/resources/salesforce-developers" element={<Page name="Salesforce Developers" />} />

{/* DESIGN & CREATIVE */}
<Route path="/resources/ui-ux-designers" element={<UIUXDesign />} />
<Route path="/resources/mobile-app-designers" element={<MobileAppDesign />} />
<Route path="/resources/quality-analysts" element={<Page name="Quality Analysts" />} />
<Route path="/resources/pwa-developers" element={<Page name="PWA Developers" />} />
<Route path="/resources/shopify-developers" element={<Page name="Shopify Developers" />} />
      </Routes>
      </>
  );
}