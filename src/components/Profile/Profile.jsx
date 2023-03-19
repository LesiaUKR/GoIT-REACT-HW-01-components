import PropTypes from 'prop-types';
import { Wrapper,Description, Avatar, Name, Info, Stats, StatsItem, StatLabel, StatValue } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Description>
        <Avatar
          src={avatar}
          alt={tag}
        />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <StatsItem>
          <StatLabel>Followers</StatLabel>
          <StatValue>{followers}</StatValue>
        </StatsItem>
        <StatsItem>
          <StatLabel>Views</StatLabel>
          <StatValue>{views}</StatValue>
        </StatsItem>
        <StatsItem>
          <StatLabel>Likes</StatLabel>
          <StatValue>{likes}</StatValue>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
