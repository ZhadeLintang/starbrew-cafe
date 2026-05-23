import { Outlet } from 'react-router-dom';
import { BackToTop } from '../components/BackToTop';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ToastStack } from '../components/ToastStack';

export const MainLayout = () => (
  <div className="min-h-screen bg-mesh-light text-zinc-950 transition-colors dark:bg-mesh-dark dark:text-white">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
    <ToastStack />
  </div>
);
