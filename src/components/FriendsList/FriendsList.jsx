import { FriendItem } from 'components/FriendItem/FriendItem';
import PropTypes from 'prop-types';
import { FriendWrapper, FriendWrapperItem} from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrapper>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendWrapperItem key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline}></FriendItem>
        </FriendWrapperItem>
        
      ))}
    </FriendWrapper>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
