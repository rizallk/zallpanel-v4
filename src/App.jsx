import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/scss/main.scss';
import { createContext, useState, useEffect } from 'react';
import CustomCards from './pages/CustomCards';
import ScrollToTop from './components/ScrollToTop';
import Donate from './pages/Donate';

export const SidebarContext = createContext(null);

function App() {
  // Global state for sidebar
  const sidebarMinimizedLS = localStorage.getItem('sidebar-minimized')
    ? localStorage.getItem('sidebar-minimized')
    : localStorage.setItem('sidebar-minimized', false);

  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(
    JSON.parse(sidebarMinimizedLS)
  );
  const [dropdownActive, setDropdownActive] = useState('');
  const [menuScrollTo, setMenuScrollTo] = useState(0);

  useEffect(() => {
    // if (window.matchMedia('(min-width: 768px)').matches)
    if (window.matchMedia('(min-width: 1027px)').matches)
      setOpenSidebarMobile(true);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        openSidebarMobile: openSidebarMobile,
        setOpenSidebarMobile: setOpenSidebarMobile,
        sidebarMinimized: sidebarMinimized,
        setSidebarMinimized: setSidebarMinimized,
        dropdownActive: dropdownActive,
        setDropdownActive: setDropdownActive,
        menuScrollTo: menuScrollTo,
        setMenuScrollTo: setMenuScrollTo,
      }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/custom-cards" element={<CustomCards />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <ScrollToTop />
    </SidebarContext.Provider>
  );
}

export default App;
