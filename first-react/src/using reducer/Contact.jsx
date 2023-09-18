import React from "react";
import {useState} from "react";
export default  function  Contact({contact,handleEditContact,handleDeleteContact}){
    const [editingStatus,setEditingStatus]=useState(false);
    const[editText,setEditText]=useState(contact.name);


    const changeEditStatus=()=>{
        if(editingStatus===false) {
            setEditingStatus(true);


        }
        else {
            setEditingStatus(false);

        }
    }

   const handleEditContactSave=(contactId,contactName)=>{
        changeEditStatus();
        handleEditContact(contactId,contactName);

    }
    return(

            <div>{editingStatus?(<>
                    <input type='text'  value={editText} onChange={(e)=>{
                        setEditText(e.target.value)
                    }}/>
                    <button onClick={()=>handleEditContactSave(contact.id,editText)}>save</button>
                </> ):
                (<>
                        <input type='radio'/>
                        {contact.id} {contact.name}
                        <button onClick={changeEditStatus}>Edit</button>
                    </>
                )
            }
                <button onClick={()=>handleDeleteContact(contact.id)} >Delete</button>
            </div>


    )
}