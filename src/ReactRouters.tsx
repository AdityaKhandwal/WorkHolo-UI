import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Dummy Pages (you replace later)
const Page = ({ name }: { name: string }) => (
  <div style={{ padding: "100px 20px" }}>
    <h1>{name}</h1>
  </div>
);

export default function ReactRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* MAIN ROUTES */}
        <Route path="/" element={< Home/>} />
        <Route path="/services" element={<Page name="Services" />} />
        <Route path="/products" element={<Page name="Products" />} />
        <Route path="/resources" element={<Page name="Resources" />} />
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
        <Route path="/services/mobile-app-development" element={<Page name="Mobile App Development" />} />
        <Route path="/services/ios-app-development" element={<Page name="iOS App Development" />} />
        <Route path="/services/android-app-development" element={<Page name="Android App Development" />} />
        <Route path="/services/ipad-app-development" element={<Page name="iPad App Development" />} />
        <Route path="/services/flutter-app-development" element={<Page name="Flutter App Development" />} />
        <Route path="/services/react-native-app-development" element={<Page name="React Native" />} />
        <Route path="/services/web-application-development" element={<Page name="Web App Development" />} />
        <Route path="/services/custom-software-development" element={<Page name="Custom Software" />} />

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
    </BrowserRouter>
  );
}