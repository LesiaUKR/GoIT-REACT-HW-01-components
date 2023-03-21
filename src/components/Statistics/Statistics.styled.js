import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  padding: 32px 0;
  color: midnightblue;
`;

export const StatisticSec = styled.section`
  margin: 60px auto;
  border-radius: 4px;
 background-color: white;
  width: 500px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  text-align: center;
  flex-basis: ${props => `calc(100% / ${props.count})`};
  background-color: ${getRandomHexColor};
`;

export const StatLabel = styled.p`
  margin-top: 18px;
  margin-bottom: 9px;
  color: midnightblue;
`;

export const StatValue = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: bold;
  color: midnightblue;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
