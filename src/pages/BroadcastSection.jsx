import React from 'react';
import styled from 'styled-components';
import excitinglogo from '../assets/excitinglogo.png';
import match from '../assets/match.png';

const BroadcastContainer = styled.section`
  background: linear-gradient(to right, #1a1a3e, #2a1a4a);
  padding: 40px 20px;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 120px;
  height: auto;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChannelTable = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  color: white;
  width: 45%;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: bold;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ImagesContainer = styled.div`
  width: 45%;
  display: flex;
  gap: 10px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const BroadcastSection = () => {
  return (
    <BroadcastContainer>
      <Logo src={excitinglogo} alt="CCL Logo" />
      <ContentContainer>
        <ChannelTable>
          <TableHeader>
            <div>CHANNEL</div>
            <div>LANGUAGE</div>
            <div>MATCH</div>
          </TableHeader>
          {/* Add channel data here */}
        </ChannelTable>
        <ImagesContainer>
          <img src={match} alt="Match Highlights" />
        </ImagesContainer>
      </ContentContainer>
    </BroadcastContainer>
  );
};

export default BroadcastSection;