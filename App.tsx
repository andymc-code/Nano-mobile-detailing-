
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import FaqPage from './pages/FaqPage';
import ExteriorDetailingPage from './pages/ExteriorDetailingPage';
import InteriorRestorationPage from './pages/InteriorRestorationPage';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import PaintCorrectionPage from './pages/PaintCorrectionPage';
import OfficialInfoPage from './pages/OfficialInfoPage';
import BlackTrimRestorationPage from './pages/BlackTrimRestorationPage';
import OdorEliminationPage from './pages/OdorEliminationPage';
import MoldRemovalPage from './pages/MoldRemovalPage';
import FleetDetailingPage from './pages/FleetDetailingPage';
import DeepInteriorShampooPage from './pages/DeepInteriorShampooPage';

// Services Sub-Pages
import ServicesLayout from './pages/services/ServicesLayout';
import SpecializedPage from './pages/services/SpecializedPage';
import PackagesPage from './pages/services/PackagesPage';
import ProcessPage from './pages/services/ProcessPage';
import AddonsPage from './pages/services/AddonsPage';

// Location Pages
import VancouverPage from './pages/locations/VancouverPage';
import BurnabyPage from './pages/locations/BurnabyPage';
import RichmondPage from './pages/locations/RichmondPage';
import WestVancouverPage from './pages/locations/WestVancouverPage';
import SurreyPage from './pages/locations/SurreyPage';
import LangleyPage from './pages/locations/LangleyPage';
import NorthVancouverPage from './pages/locations/NorthVancouverPage';

// Dynamic Landing Page
import DynamicLandingPage from './pages/DynamicLandingPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Multi-Page Services Refactor */}
          <Route path="/services" element={<ServicesLayout />}>
            <Route index element={<SpecializedPage />} />
            <Route path="packages" element={<PackagesPage />} />
            <Route path="how-it-works" element={<ProcessPage />} />
            <Route path="add-ons" element={<AddonsPage />} />
          </Route>

          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FaqPage />} />
          
          <Route path="/exterior-detailing" element={<ExteriorDetailingPage />} />
          <Route path="/interior-restoration" element={<InteriorRestorationPage />} />
          <Route path="/deep-interior-shampoo" element={<DeepInteriorShampooPage />} />
          <Route path="/ceramic-coating" element={<CeramicCoatingPage />} />
          <Route path="/paint-correction" element={<PaintCorrectionPage />} />
          <Route path="/black-trim-restoration" element={<BlackTrimRestorationPage />} />
          <Route path="/odor-elimination" element={<OdorEliminationPage />} />
          <Route path="/mold-removal" element={<MoldRemovalPage />} />
          <Route path="/fleet-detailing" element={<FleetDetailingPage />} />
          <Route path="/official-info" element={<OfficialInfoPage />} />
          
          <Route path="/locations/vancouver/mobile-car-detailing" element={<VancouverPage />} />
          <Route path="/locations/burnaby/mobile-car-detailing" element={<BurnabyPage />} />
          <Route path="/locations/richmond/mobile-car-detailing" element={<RichmondPage />} />
          <Route path="/locations/west-vancouver/mobile-car-detailing" element={<WestVancouverPage />} />
          <Route path="/locations/surrey/mobile-car-detailing" element={<SurreyPage />} />
          <Route path="/locations/langley/mobile-car-detailing" element={<LangleyPage />} />
          <Route path="/locations/north-vancouver/mobile-car-detailing" element={<NorthVancouverPage />} />

          <Route path="/locations/:city/:service" element={<DynamicLandingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
