const supported = ('contacts' in navigator && 'ContactsManager' in window);
const props = ['name', 'email', 'tel', 'address', 'icon'];
const opts = { multiple: true };
const resultDiv = document.querySelector('#result');
const getContactsButton = document.querySelector('#getContacts');

function handleContacts(contacts) {
    // if(contacts.length <= 0){
    //     resultDiv.innerHTML = "<p>No contact selected</p>";
    //     return
    // }
    resultDiv.innerHTML = "<p>"+JSON.stringify(contacts)+"</p>";
    /*for (const contact in contactlist) {
        let contactP = document.createElement('div');
        contactP.innerHTML = "<p>" + JSON.stringify(contact) + "</p";
        resultDiv.appendChild(contactP);
    }*/
}

getContactsButton.addEventListener('click', async () => {
    resultDiv.innerHTML = "";
    if (!supported) {
        resultDiv.innerHTML = "<p>The Contact API is not available in your browser.</p>";
    } else {
        try {
            const contacts = await navigator.contacts.select(props, opts);
            handleContacts(contacts);
        } catch (ex) {
            resultDiv.innerHTML = "<p>Error while getting contacts: " +JSON.stringify(ex)+"</p>";
        }
    }
});
