import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Locations from './pages/Locations.jsx';
import LocationDetail from './pages/LocationDetail.jsx';
import Menu from './pages/Menu.jsx';
import Events from './pages/Events.jsx';
import EventDetail from './pages/EventDetail.jsx';
import ArbourClub from './pages/ArbourClub.jsx';
import Memberships from './pages/Memberships.jsx';
import Careers from './pages/Careers.jsx';
import Wholesale from './pages/Wholesale.jsx';
import Community from './pages/Community.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="locations" element={<Locations />} />
          <Route path="locations/:slug" element={<LocationDetail />} />
          <Route path="menu" element={<Menu />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />
          <Route path="arbour-club" element={<ArbourClub />} />
          <Route path="arbour-club/memberships" element={<Memberships />} />
          <Route path="careers" element={<Careers />} />
          <Route path="wholesale-enquiries" element={<Wholesale />} />
          <Route path="community-requests" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
