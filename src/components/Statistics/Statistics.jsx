import PropTypes from 'prop-types';
import {
  StatisticSec,
  StatList,
  StatsItem,
  StatLabel,
  StatValue,
  Title,
} from './Statistics.styled';

export const Statistics = ({ items, title }) => {
  return (
    <StatisticSec>
      {title && <Title>{title}</Title>}

      <StatList>
        {items.map(({ id, label, percentage }) => (
          <StatsItem key={id} count={items.length}>
            <StatLabel>{label}</StatLabel>
            <StatValue>{percentage}%</StatValue>
          </StatsItem>
        ))}
      </StatList>
    </StatisticSec>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
