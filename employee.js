
function refresh(){


 fetch ( "http://localhost:3000/employees")
    .then((res) =>res.json())
    .then((employees)=>
    {
        console.log(employees);
        const table = document.getElementById("employee-Table");
        table.innerHTML="";

        // alert("warning")

var i=1;

        employees.forEach((employ) => {


        var id=employ.id;



        
            const element=table.insertRow();
            var sino=element.insertCell();
            sino.innerHTML =i;

            var name=element.insertCell();
            name.innerHTML=employ.firstName+ " "+employ.lastName;

            var email=element.insertCell();
            email.innerHTML=employ.email;

            var phone=element.insertCell();
            phone.innerHTML=employ.phone;

            var gender=element.insertCell();
            gender.innerHTML=employ.gender;

            var state=element.insertCell();
            state.innerHTML=employ.state;

            var country=element.insertCell();
            country.innerHTML=employ.country;

            var dots=element.insertCell();
           dots.innerHTML=
           `
           <button class="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           <i class="fa-solid fa-ellipsis"></i>
           </button>
           <ul class="dropdown-menu "id="boot" aria-labelledby="dropdownMenuButton1">
                 <button class="action"><a  href="http://127.0.0.1:5500/employee2.html?id=${id}" target="_blank"><i class="fa-solid fa-eye"></i>view</a></button>
                 <button class="action" data-bs-toggle="modal" data-bs-target="#updateform" onclick="changes('${id}')">  <i class="fa-solid fa-pen"></i> edit</button>
                 <button class="action" data-bs-toggle="modal" data-bs-target="#db" onclick="trash('${id}')"><i class="fa fa-sharp fa-light fa-trash" id="buttonDropdown_action"></i>delete</button>
           </ul>`
          
               
          
           i++;
        });

    })
  }

  refresh();


    var modal=document.getElementById("formmodal");
    modal.addEventListener('submit', (e)=>{
        e.preventDefault();
      // alert("got it ")

      var salutation=document.getElementById("validationCus").value;
      console.log(salutation);

      var Firstname=document.getElementById("validationCustom01").value;
      console.log(Firstname);

     var Lastname=document.getElementById("validationCustom02").value;
     console.log(Lastname);

     var Emailaddress=document.getElementById("exampleInputEmail1").value;
     console.log( Emailaddress);

     var mobilenumber=document.getElementById("typePhone").value;
     console.log(mobilenumber);

     var dateofbirth=document.getElementById("date").value;
    var date=objectdate(dateofbirth);
    function objectdate (dob){
        const birth= dob.split ("-")
        let day=birth[0];
        let month=birth[1];
        let year=birth[2];
        let dateofbirth=year+"-"+month+"-"+day ;
        return dateofbirth;
    }




     var gender=document.getElementsByName("inlineRadioOptions");
     for( i=0;i<gender.length;i++){
        if(gender[i].checked){
    var togender=gender[i].value;
        }
     }
    console.log(togender);




     var Qualifications=document.getElementById("Qualifications") .value;
     console.log(Qualifications);

     var Address=document.getElementById("Address").value;
     console.log(Address);

     var Username=document.getElementById("username").value;
     console.log(Username)

     var Password=document.getElementById("password01").value;
     console.log(Password)

     var country=document.getElementById("inputcountry").value;
     console.log(country);

     var State=document.getElementById("inputState").value;
     console.log( State);

     var city=document.getElementById("inputCity") .value;
     console.log(city);

     var pinzip=document.getElementById("inputZip") .value;
     console.log( pinzip);
    
    
 
    const object={
        address:Address,
        city:city,
        country:country,
        dob:date,
        email:Emailaddress,
        firstName:Firstname,
        gender:togender,
        lastName:Lastname,
        password:Password,
        phone:mobilenumber,
        qualifications:Qualifications,
        salutation:salutation,
        state:State,
        username:Username,
    }


    // /------------------------ add empl---------------------------------------------
    fetch ( "http://localhost:3000/employees",{
        method: "post",headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(object)

    })
    .then(res =>res.json())
    .then(data=>{
        console .log (data);
    
    })
    // document.getElementById ("exampleModal").style.display="none";
    refresh();


})
// ----------------------------------------------validation----------------------------------------------------------

var firstName=document.forms["formmodal"]["validationCustom01"];

var  LastName=document.forms["formmodal"]["validationCustom02"];

var Emailaddress=document.forms["formmodal"]["exampleInputEmail1"]

var phone=document.forms["formmodal"]["typePhone"]

var Qualifications=document.forms["formmodal"]["Qualifications"]

var Address=document.forms["formmodal"]["Address"]

var Username=document.forms["formmodal"]["username"]

var Password=document.forms["formmodal"]["password01"]

var country=document.forms["formmodal"]["inputcountry"]

var State=document.forms["formmodal"]["inputState"]

var city=document.forms["formmodal"]["inputCity"]

var pinzip=document.forms["formmodal"]["inputZip"]




function loop(){

      var element=document.getElementById("validationCustom01").value;
      // var firstName=(/^[a-z;A-Z]/);
      if(firstName.value==""){ 

          firstName.style.border="1px solid red";
          firstName.focus();
          //  alert("Name must be filled out");
          return false;

         
          }
          else{
          firstName.style.border="1px solid green";
        
          }

        
        
          if (LastName.value== "") {
            LastName.style.border="1px solid red";
            LastName.focus();
            return false;
           
            }
            else{
            LastName.style.border="1px solid green";
            }


          if(Emailaddress.value==""){
            Emailaddress.style.border="1px solid red"
            Emailaddress.focus();
            return false;
          }
          else{
          Emailaddress.style.border="1px solid green";
          }


      var mobvalidation=document.getElementById("typePhone").value;
      var mobsvalidation=(/^[7-9][0-9]{9}/);
      if (mobsvalidation.test(mobvalidation)){
        document.getElementById("typePhone").style.border="1px solid green";

      }
      else{
        document.getElementById("typePhone").style.border="1px solid red";
        document.getElementById("typePhone").focus;
      }
         

          // if(phone.value=="") {
          //   phone.style.border="1px solid red";
          //     alert("Name must be filled out");
          //   phone.focus();
          //   return false;
          //   alert("Name must be filled out");
           
          //   }
          //   else{
          //   phone.style.border="1px solid green";
          //   }



            if (Qualifications.value== "") {
                Qualifications.style.border="1px solid red";
                Qualifications.focus();
                return false;
               
                }
                else{
                Qualifications.style.border="1px solid green";
                }



                if (Address.value== "") {
                    Address.style.border="1px solid red";
                    Address.focus();
                    return false;
                   
                    }
                    else{
                    Address.style.border="1px solid green";
                    }

                    if (Username.value== "") {
                      Username.style.border="1px solid red";
                      Username.focus();
                      return false;
                     
                      }
                      else{
                      Username.style.border="1px solid green";
                      }
          
                      if (Password.value=="") {
                        Password.style.border="1px solid red";
                        Password.focus();
                        return false;
                       
                        }
                        else{
                        Password.style.border="1px solid green";
                        }

          
           
                        if (country.value== "") {
                          country.style.border="1px solid red";
                          country.focus();
                          return false;
                         
                          }
                          else{
                          country.style.border="1px solid green";
                          }

                          if(State.value==""){
                          State.style.border="1px solid red";
                          State.focus();
                          return false;

                            } 
                          else {
                          State.style.border=" 1px solid green";
                          }

                          if(city.value==""){
                          city.style.border="1px solid red";
                          city.focus();
                          return false;

                            } 
                            else {
                            city.style.border=" 1px solid green";
                            }

                            
                            if(pinzip.value==""){
                              pinzip.style.border="1px solid red";
                              pinzip.focus();
                              return false;

                            } 
                            else {
                            pinzip.style.border=" 1px solid green";
                            }


                            if(exampleModal.value=""){
                              document.getElementById ("exampleModal").style.display="block";
                              refresh()
                            }
                            else{
                              document.getElementById ("exampleModal").style.display="none";
                              refresh();
                            }
                            refresh();
                            reload();
                        };
                        

                        // *********************** delete************************



function trash(id){

  var pop=document.getElementById("editok")
  pop.addEventListener('click', ()=>{



  
 
    fetch(`http://localhost:3000/employees/${id}`,{
      method:"DELETE",


  }) 

  
  // alert ("delete successfully");
  document.getElementById ("db").style.display="none";
  refresh()
  document.getElementById ("edit-cmplt").style.display="none";
  refresh();

})


}

// *************************************************update**************************************************

function changes(id){
  // alert(id);
  fetch(`http://localhost:3000/employees/${id}`,{
    method:"GET",
    
}) 


.then(res=> res.json())
.then(employees =>{
  console.log(employees)

// alert("hai")
document.getElementById("edit-salutation").value=employees.salutation;

document.getElementById("edit-edu").value=employees.qualifications;
// // console.log(Qualifications);

document.getElementById("edit-address").value=employees.address;

document.getElementById("edit-username").value=employees.username;
// //console.log(Username)

document.getElementById("edit-password").value=employees.Password;
// //console.log(Password)

document.getElementById("edit-ourcnrt").value=employees.country;
// //console.log(country);

document.getElementById("edit-oursat").value=employees.state;
// //console.log( State);

document.getElementById("edit-city").value=employees.city;
// // console.log(city);

document.getElementById("edit-pincode").value=employees.pin;
// // console.log( pinzip);
document.getElementById("edit-date") .value=employees.dob;
document.getElementById("edit-lastname") .value=employees.lastName;
document.getElementById("edit-firstname") .value=employees.firstName;
document.getElementById("edit-number") .value=employees.phone;
document.getElementById("edit-email") .value=employees.email;
document.getElementsByClassName("inlineRadioOptions").value=employees.gender;



})
// }



// function changes(id){
 
 
  
 
    
    var upobject=document.getElementById("edit-method")
    upobject.addEventListener('submit',(e) =>{
      e.preventDefault();
      

      let upobj={
        salutation:document.getElementById("edit-salutation").value,
        firstName:document.getElementById("edit-firstname").value,
        lastName:document.getElementById("edit-lastname").value,
        email:document.getElementById("edit-email").value,
        phone:document.getElementById("edit-number").value,
        dob:document.getElementsByTagName("edit-date").value,
        Gender:document.getElementById("ingender").value,
        qualifications:document.getElementById("edit-edu").value,
        address:document.getElementById("edit-address" ).value,
        country:document.getElementById("edit-ourcnrt" ).value,
        username:document.getElementById("edit-username" ).value,
        password:document.getElementById("edit-password" ).value,
        state:document.getElementById("edit-oursat" ).value,
        city:document.getElementById("edit-city" ).value,
        pincode:document.getElementById("edit-pincode" ).value
      }

      console.log(upobj);

      fetch(`http://localhost:3000/employees/${id}`,{
    method:"PUT",
    headers:{
      "content-type":"application/json",
    },

    body:JSON.stringify(upobj),

        
    })
    .then(res=> res.json())
    .then(employees =>{console.log(employees)
      
      refresh();
      document.getElementById ("updateform").style.display="none";
    })
    
   
})
}

function set(){
    document.getElementById ("completed").style.display="none";
refresh();
}
function macked(){
  document.getElementById ("changescmplt").style.display="none";
refresh();
}

// function 
// document.getElementById ("big-cmplt").style.display="none";
function reload(){
  location.reload();
}