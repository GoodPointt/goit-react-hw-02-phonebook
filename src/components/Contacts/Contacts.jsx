export const Contacts = ({ contacts, filter }) => {
  return (
    <>
      {filter ? (
        <ul>
          {contacts
            .filter(
              contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                contact.number.includes(filter)
            )
            .map(filteredContact => (
              <li key={filteredContact.id}>
                {filteredContact.name} {filteredContact.number}
              </li>
            ))}
        </ul>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
