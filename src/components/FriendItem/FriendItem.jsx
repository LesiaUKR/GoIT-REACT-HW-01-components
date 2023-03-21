import PropTypes from 'prop-types';
import { Status, Avatar,Name} from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <Status isonline={isOnline}></Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </>
          
      )
}

FriendItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
}