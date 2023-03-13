import PropTypes from 'prop-types';
import { AbonentCard, AbonentText, AbonentDeleteBnt } from './Item.styled';
export const Item = ({ contact, deleteContact }) => (
  <AbonentCard>
    <AbonentText>{contact.name}:</AbonentText>
    <AbonentText>{contact.number}</AbonentText>
    <AbonentDeleteBnt onClick={() => deleteContact(contact.id)}>
      Delete
    </AbonentDeleteBnt>
  </AbonentCard>
);
Item.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
