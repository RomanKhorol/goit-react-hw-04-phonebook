import { AddForm } from './AddAbonentForm/AddAbonentForm';
import { ItemList } from './AbonentList/AbonentList';
import { Filter } from './Filtr/Filtr';

const { Component } = require('react');
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const existContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existContact) {
      return alert(`${data.name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleItems = this.getVisibleContact();
    return (
      <div
        style={{
          height: '100%',
          padding: '15px',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div
          style={{
            width: '300px',
            border: '1px solid black',
            borderRadius: '4px',
          }}
        >
          <h1
            style={{
              paddingLeft: '40px',
              fontSize: '40px',
              margin: '0px',
            }}
          >
            Phonebook
          </h1>
          <AddForm onSubmit={this.formSubmitHandler} />
        </div>

        <h2
          style={{
            margin: '0',
            paddingLeft: '40px',
            padding: '40px',
            fontSize: 40,
          }}
        >
          Contacts
        </h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ItemList contacts={visibleItems} deleteItem={this.deleteContact} />
      </div>
    );
  }
}
export default App;
