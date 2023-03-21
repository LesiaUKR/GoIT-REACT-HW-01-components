import styled from 'styled-components';

export const Table = styled.table`
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
    margin: 60px auto 0 auto;
    text-align: center;
    width: 40%;
    & thead {
    background-color: lightskyblue;
  }
  & tr:hover {
    background-color: lightskyblue;
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
  }
  & th,
  & td {
    padding: 8px 16px;
    border: 1px solid lightskyblue;
    border-radius: 10px;}
`;
