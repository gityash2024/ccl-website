import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import TeamsPage from '../pages/TeamsPage';
import SchedulePage from '../pages/SchedulePage';
import TeamDetailPage from '../pages/TeamDetailPage';
import GalleryPage from '../pages/GalleryPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="teams" element={<TeamsPage />} />
        <Route path="teams/:teamId" element={<TeamDetailPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;