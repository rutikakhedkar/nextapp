import { get } from "http"
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";


 const  ContactPage=async()=>{
  const user=await getSession();
  if(!user){
    return <div>Please <a href="/login" className="text-blue-500">login</a> to view contacts.</div>
  }

  const contacts=await getContacts(user.id);

  if(contacts.length===0){
    return <div>No contacts found. <a href="/contact/new" className="text-blue-500">Add a new contact</a></div>
  }

  return (
    <div className="flex justify-between items-center mb-6">
      <h1>Your contacts</h1>
      <a href="/contact/new" className="bg-blue-500 text-white px-4 py-2 rounded">Add Contact</a>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact:any)=>(
    </div>
  )
}

export default ContactPage;