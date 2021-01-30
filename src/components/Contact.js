import React, { Component } from "react";

class Contact extends Component{

PostData(){ // here postdata is a method
try{
let manoj = fetch('http:localhost:8000/api/users',{
  mathod:'post',
  mode:'no-cors',
  headers:{
    'content-type':'application/json', // content type decide the what kind of responce client sending to the server. 
    'Accept':'application/json' // Accept headers decline the what kind of responce accepted. the responce should be in the json format
  },
  body:JSON.stringify({
    key1:'myusername'
  })
});
console.log('result' + manoj)
}catch(e) {
  console.log(e)
}  

}

render(){
  return(
    <div>
      <button onClick={()=>this.PostData()}>Post data here</button>
    </div>
  )
}



}
export default Contact; 
