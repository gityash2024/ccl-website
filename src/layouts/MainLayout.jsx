// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PageContainer } from '../styles/Container.styled';

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  margin-top: 80px; // Height of the navbar
`;

const MainLayout = () => {
  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default MainLayout;