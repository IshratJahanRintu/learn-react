import React from "react";

export default function ContactsReducer(contacts, action) {
    if (action.type === 'add') {
        contacts = [
            ...contacts,
            {
                id: action.id,
                name: action.name,
            }
        ]
        return contacts;
    }
    if (action.type === 'edit') {
        contacts = contacts.map((contact) => {
            if (contact.id === action.id) {
                return {
                    id: action.id,
                    name: action.name
                }
            } else {
                return contact;
            }
        })
        return contacts;
    }

    if (action.type==='delete'){
        return contacts.filter((contact)=>contact.id!==action.id);
    }
}