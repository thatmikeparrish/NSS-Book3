
let createContact = require("./Contact");
let getContacts = require("./ContactCollection");

function listContacts() {
    getContacts().forEach(contact => {
        let contactComponent = createContact(contact.name, contact.phone, contact.address, contact.city, contact.ST);
        writeContactsToDOM(contactComponent);
    });
};

function writeContactsToDOM(contact) {
    document.querySelector("#contactList").innerHTML += contact;
};

module.exports = listContacts;