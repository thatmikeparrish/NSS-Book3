"use strict";

function createContact(name,phone,address,city,ST){
    return  `<h3> Name: ${name}</h3>
            <h5> Phone: ${phone}</h5>
            <h5> Address: ${address}</h5>
            <h5> City, ST: ${city}, ${ST}</h5>`;
};

module.exports = createContact;