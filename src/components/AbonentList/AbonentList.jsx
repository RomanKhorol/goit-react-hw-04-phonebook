import PropTypes from 'prop-types';
import { Item } from 'components/Item/Item';
import { AbonentListUl } from './AbonentList.styled';
const shortid = require('shortid');

export const ItemList = ({ contacts, deleteItem }) => (
  <div>
    <AbonentListUl>
      {contacts.map(contact => {
        return (
          <Item
            key={shortid.generate()}
            contact={contact}
            deleteContact={deleteItem}
          />
        );
      })}
    </AbonentListUl>
  </div>
);
export default ItemList;
ItemList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(
      { id: PropTypes.string.isRequired },
      { name: PropTypes.string.isRequired, number: PropTypes.number.isRequired }
    )
  ).isRequired,
};
