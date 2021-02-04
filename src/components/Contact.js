import React from "react";

const Contact = () => {
 window.localStorage.setItem('name','manoj')
window.localStorage.setItem('email','manoj@gmail.com')
// console.log(localStorage.getItem('name'));
// console.log(localStorage.key(0));
//localStorage.removeItem('name')

  return <h2>Welcome to contact page</h2>;
};
export default Contact;
