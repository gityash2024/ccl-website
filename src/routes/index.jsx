import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import TeamsPage from '../pages/TeamsPage';
import SchedulePage from '../pages/SchedulePage';
import TeamDetailPage from '../pages/TeamDetailPage';
import GalleryPage from '../pages/GalleryPage';
import Home from '../pages/Home';
import News from '../pages/News';
import Aboutus from '../pages/Aboutus';
import BengalTeam from '../pages/BengalTeam';
import BhojpuriTeam from  '../pages/BhojpuriTeam';
import ChennalTeam from '../pages/ChennalTeam';
import KarnatkaTeam from '../pages/KarnatkaTeam';
import KerlaTeam from '../pages/KerlaTeam';
import MumbaiTeam from '../pages/MumbaiTeam';
import PunjabTeam from '../pages/PunjabTeam';
import TeluguTeam from '../pages/TeluguTeam';
import PhotoGallary from '../pages/PhotoGallary';
import VideoGallary from '../pages/VideoGallery';
import CclSchedule from '../pages/CclSchedule';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<TeamsPage />} />
        <Route path="teams/:teamId" element={<TeamDetailPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="news" element={<News />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="home" element={<Home />} />
        <Route path="bengal" element={<BengalTeam />}/>
        <Route path="bhojpuri" element={<BhojpuriTeam />}/>
        <Route path="chennai" element={<ChennalTeam />}/>
        <Route path="karnataka" element={<KarnatkaTeam />}/>
        <Route path="kerala" element={<KerlaTeam />}/>
        <Route path="mumbai" element={<MumbaiTeam />}/>
        <Route path="punjab" element={<PunjabTeam />}/>
        <Route path="telugu" element={<TeluguTeam />}/>
        <Route path="photos" element={<PhotoGallary />}/>
        <Route path="videos" element={<VideoGallary />}/>
        <Route path="standings" element={<CclSchedule />}/>
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;