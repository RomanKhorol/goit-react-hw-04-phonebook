import PropTypes from 'prop-types';
import { FitrTitle, FitrWrap, FitrInput } from './Filtr.styled';

export const Filter = ({ value, onChange }) => (
  <FitrWrap>
    <FitrTitle>Find contact by name</FitrTitle>

    <FitrInput type="text" name="filter" value={value} onChange={onChange} />
  </FitrWrap>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
