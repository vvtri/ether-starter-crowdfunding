import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CampaignDetail, CreateCampaign, Home, Profile } from './pages';
import { Navbar, Sidebar } from './components';

export default function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row text-white">
      <div class="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div class="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetail />} />
        </Routes>
      </div>
    </div>
  );
}
