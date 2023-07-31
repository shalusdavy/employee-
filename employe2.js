//  *****************************************************  view***************************************************
 var viewdetails= new URLSearchParams(document.location.search);
                        let id=viewdetails.get('id');
                        
                        
                        function bench(id){


                          // alert("guuhyvy8")
                          fetch(`http://localhost:3000/employees/${id}`,{
                            method:"GET",
                        }) 
                        .then(res => res.json())
                        .then(employe =>{
                            // console.log(employe);
                            // alert("warning");
                            var empdetails=document.getElementById("employeedet");
                            empdetails.innerHTML=`
                            <div class="empdet">
                              <div class="bgimg">
                                <div class="backgroundimg">
                                  <img src="img/backgroundimg.png" alt="">
                                </div>
                                  <div class="empfinal">
                                      <img src="img/Avatar.png">
                                  </div>
                                  <div class="namemale">
                                      <div class="name">
                                          <h3>${employe.firstName +" "+ employe.lastName}</h3>
                                      </div>
                                      <div class="email">
                                          <p>${employe.email}</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="row profile">
                                  <div class="col"> <label for="">Gender</label><p>${employe.gender}</p></div>
                                  <div class="col"><label for="">Age</label><p>${employe.email}</p></div>
                                  <div class="col"><label for="">Date of Birth</label><p>${employe.dob}</p></div>
                              </div>
                              <div class="row profile">
                                  <div class="col"> <label for="">Mobile Number</label><p>${employe.phone }</p></div>
                                  <div class="col"> <label for="">Qualifications</label>${employe.qualifications}</p></div>
                              </div>
                              <div class="row profile">
                                  <div class="col"> <label for="">Address</label><p>${employe.address}</p>
                                    </div>
                                  <div class="col"> <label for="">Username</label><p>${employe.username}</p></div>
                              </div> 
                                  <div class="buttoncol">
                                      <button class="btn btn-danger py-3 px-4">Delete</button>
                                      <button class="btn btn-primary py-3 px-4">Edit Details</button>
                                  </div>
                              </div>
                          
                            </div>`

                         })
                       };



              bench(id);