"use strict";

let contacts = [
    {
        name: "Mike Parrish",
        phone: "6157886484",
        address: "2324 Chandler Pl.",
        city: "Murfreesboro",
        ST: "TN",
    },
    {
        name: "Kayla Carter",
        phone: "6156491437",
        address: "307 Valley Forge Ct.", 
        city: "LaVergne", 
        ST: "TN",
    },
    {
        name: "Greg Carter",
        phone: "6156491437",
        address: "315 Valley Forge Ct.", 
        city: "LaVergne",
        ST: "TN",
    },
];

localStorage.setItem("contacts", JSON.stringify(contacts));

function getContacts() {
    // console.log(JSON.parse(localStorage.getItem("contacts")));
    return JSON.parse(localStorage.getItem("contacts"));
}

module.exports = getContacts;