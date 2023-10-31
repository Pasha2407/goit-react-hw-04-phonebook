import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      {
        (contacts = contacts.map(item => (
          <ul key={item.id}>
            <li>
              {item.name}: {item.number}
              <button
                type="button"
                style={{ marginLeft: '15px' }}
                onClick={() => deleteContact(item.id)}
              >
                Delete
              </button>
            </li>
          </ul>
        )))
      }
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
