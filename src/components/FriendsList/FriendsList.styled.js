import styled from 'styled-components';

export const FriendWrapper = styled.ul`
display:flex;
  flex-direction: column;
 gap: 10px;
`;

export const FriendWrapperItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 250px;
  border: 1px solid lightskyblue;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  transition: transform var(--animation-duration) var(--timing-function),
    box-shadow var(--animation-duration) var(--timing-function);
  :hover, :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    transform: scale(1.03);
  }
`;