var contacts = [{

}]


function addContact(){
            var Newcontacts = {};
            Newcontacts.name = prompt("Enter the name of the contact : ");
            Newcontacts.number = prompt("Enter the phone number : ");
            contacts.push(Newcontacts);
            
            console.log("Name : " + Newcontacts.name + " Number = " + Newcontacts.number );
            
}

function searchContact(){
            var contact_Name_or_phone = prompt("enter contact name or phone : ");
            for (var i = 0; i < contacts.length; i++) {
                var current_contact = contacts[i];
                if(contact_Name_or_phone == current_contact.name || contact_Name_or_phone == current_contact.Number){
                    alert("name " + current_contact.name + " Number " + current_contact.Number);
                }
                else{
                    alert("Contact Not found");
                }
                
                
            }
}

var operation = prompt("Enter The Operation : ");

while (operation != null){
    switch(operation){
        case "add" :
            addContact();
            break;
        
        case "search" :
            searchContact();
            break;
            
    }
    
    var operation = prompt("Enter The Operation : ");
}



