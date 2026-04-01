import { Suspense, lazy } from 'react';
import Hero from './components/Hero';

const Benefits = lazy(() => import('./components/Benefits'));
const ForWho = lazy(() => import('./components/ForWho'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Bonus = lazy(() => import('./components/Bonus'));
const Offer = lazy(() => import('./components/Offer'));
const Guarantee = lazy(() => import('./components/Guarantee'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Suspense fallback={<div className="h-screen bg-white" />}>
        <Benefits />
        <ForWho />
        <HowItWorks />
        <Bonus />
        <Offer />
        <Guarantee />
        <Footer />
      </Suspense>
    </div>
  );
}
