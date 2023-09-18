import React, {useReducer} from "react";
import ContactsReducer from "./ContactsReducer.jsx";
import {useState} from "react";
import Contact from "./Contact.jsx";

let counter = 1;
export default function ContactList() {
    const [contactName, setContactName] = useState('');
    const initialContacts = [];
    const [contacts, dispatch] = useReducer(ContactsReducer, initialContacts);

    const handleAddContact = (contactName) => {
        dispatch({
            type: 'add',
            id: counter++,
            name: contactName

        });
        console.log(contactName);
    }
    const handleEditContact = (contactId,contactName) => {
        dispatch({
            type: 'edit',
            id: contactId,
            name:contactName
        })
    }
    const handleDeleteContact=(contactId)=>{
        dispatch({
           type:'delete',
            id:contactId
        })
    }


    return (
        <>
            <fieldset>
                <legend>Add new contact</legend>

                <input type='text' onChange={(e) => setContactName(e.target.value)} placeholder="enter contact name"
                       value={contactName}/>
                <button onClick={() => handleAddContact(contactName)}>Add contact</button>
            </fieldset>
            <p>{contactName}</p>
            <ul>
                {contacts.map((contact) => <Contact key={contact.id} contact={contact} handleEditContact={handleEditContact} handleDeleteContact={handleDeleteContact}/>)}
            </ul>


        </>
    );
}