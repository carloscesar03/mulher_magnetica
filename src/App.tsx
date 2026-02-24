import { Suspense, lazy } from 'react';
import Hero from './components/Hero';

const Imagine = lazy(() => import('./components/Imagine'));
const Unlock = lazy(() => import('./components/Unlock'));
const Difference = lazy(() => import('./components/Difference'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Truth = lazy(() => import('./components/Truth'));
const Bonus = lazy(() => import('./components/Bonus'));
const Offer = lazy(() => import('./components/Offer'));
const Guarantee = lazy(() => import('./components/Guarantee'));
const Summary = lazy(() => import('./components/Summary'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Suspense fallback={<div className="h-screen bg-white" />}>
        <Imagine />
        <Unlock />
        <Difference />
        <HowItWorks />
        <Testimonials />
        <Truth />
        <Bonus />
        <Offer />
        <Guarantee />
        <Summary />
        <FAQ />
        <Footer />
      </Suspense>
    </div>
  );
}
