var contacts = [{
    Name : "mohamed",
    Number : "54543543564"
}]


function add(){
            var Newcontacts = {};
            Newcontacts.Name = prompt("Enter the name of the contact : ");
            Newcontacts.Number = prompt("Enter the phone number : ");
            contacts.push(Newcontacts);
            
}

function search(){
            var contact_Name_or_phone = prompt("enter contact name or phone : ");
            for (var i = 0; i < contacts.length; i++) {
                var current_contact = contacts[i];
                if(contact_Name_or_phone == current_contact.Name || contact_Name_or_phone == current_contact.Number){
                    alert("name " + current_contact.Name + " Number " + current_contact.Number);
                }
                
            }
}


function runApp(){
    var stop = false;
    do{
        var operation = prompt("Enter The Operation : ");
        switch(operation){
            case "add" :
                add();
            break;
            
            case "search" :
                search();
            break;

            case "exit":
                stop = true;
            break;
                        
    }
    }while(!stop)
}

runApp();
