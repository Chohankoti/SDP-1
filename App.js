import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
function App() 
{
  const [studName,setName]=useState("");
  const [studName1,setEmail]=useState("");
  const [studName2,setPassword]=useState("");
  const [studNumber,setNumber]=useState(0);
  const [studList,setStudList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);   
    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{studName:studName,studName1:studName1, studNumber:studNumber,studName2:studName2,});
    console.log(studName,studName1,studNumber,studName2);
  }
  return (
    <div className="App">
      <div id="section1">
        <div class="page-container">
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
              <div class="container">
                <a class="navbar-brand" href="#" >
                  <img
                    src="\logoc.png"
                    class="food-munch-logo"
                  />
                </a>
                <p class="t">CHOHAN logistics</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav ml-auto">
                        <a class="nav-link active" id="navItem" href="#section1.1">
                            Explore services
                            <span class="sr-only">(current)</span>
                          </a>                   
                    <a class="nav-link" href="#section2.1" id="navItem">Why choose us </a>
                    <a class="nav-link" href="#section1.3" id="navItem">Sign in</a>   
                    <a class="nav-link" href="#section2.3" id="navItem">Follow us</a>                          
                  </div>
                </div>
               </div>
              </nav>
            <div class="page-body">
                 <div class="sidebar "> 
                     <h3 class="side-head">About :</h3>
                     <p class="side-content">
                      In simple terms, the goal of logistics management is to have the right amount of a resource or input at the right time, getting it to the appropriate location in proper condition, and delivering it to the correct internal or external customer.
                      In the modern era, the technology boom and the complexity of logistics processes have spawned logistics management software and specialized logistics-focused firms that expedite the movement of resources along the supply chain.
                     </p>
                 </div>
                  <div>
                    <img class="image1 im" src="https://img.freepik.com/free-vector/isometric-logistics-flowchart-composition-with-isolated-images-delivery-techniques-vehicles-human-characters-with-text-vector-illustration_1284-30930.jpg?w=740&t=st=1664345927~exp=1664346527~hmac=d1381400abc570b9e475246e2aeee635c9fcef4eb9afeff3707c8fdfdc7f2425"  />
                    <img class="image2 im img" src="https://www.logisticsbureau.com/blog/wp-content/uploads/2017/08/Logistics-Disruption.png"  />
                  </div>
                </div>           
          </div>
      </div>
      <div id="section1.1">    
        <div class="explore-menu-section pt-5 pb-5 ">
            <div class="container ">
              <div class="row">
                <div class="col-12">
                  <h1 class="menu-section-heading">Explore the services</h1>
                </div>        
          
                <div class="col-12">
                  <div class="menu-item-card shadow p-3 mb-3">
                    <img
                      src="https://fishtrade-bg.com/wp-content/uploads/2020/01/tr-2-opt.jpg"
                      class="menu-item-image w-100"
                    />
                    <h1 class="menu-card-title">Land transport</h1>
                    <a href="" class="menu-item-link">
                      View more
                      <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="col-12">
                  <div class="menu-item-card shadow p-3 mb-3">
                    <img
                      src="https://cdn.britannica.com/06/166306-050-0D839F24/Cargo-ship-freight-containers.jpg"
                      class="menu-item-image w-100"
                    />
                    <h1 class="menu-card-title">Water transport</h1>
                    <a href="" class="menu-item-link">
                      View more
                      <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="col-12">
                  <div class="menu-item-card shadow p-3 mb-3">
                    <img
                      src="https://www.stattimes.com/h-upload/2022/06/05/26340-virus-and-war-headwinds-to-remain.webp"
                      class="menu-item-image w-100"
                    />
                    <h1 class="menu-card-title">Air transport</h1>
                    <a href="" class="menu-item-link">
                      View more
                      <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>        
      </div>        
      <div id="section2.1">
        <div class="wcu-section pt-5 pb-5">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1 class="wcu-section-heading">Why Choose Us?</h1>
                  <p class="wcu-section-description">
                    we the best in transport in goods
                  </p>
                </div>
                <div class="col-12 col-md-4">
                  <div class="wcu-card p-3 mb-3">
                     <img src ="\fast.png" class="i1"  />
                    <h1 class="wcu-card-title mt-3">Fast delivery</h1>
                    <p class="wcu-card-description">
                     we are providing fastest delivery than compare to any other , most our customers trusted on our delivery service
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="wcu-card p-3 mb-3">
                    <img src="\care.png" class="i1"/>
                    <h1 class="wcu-card-title mt-3">Safety</h1>
                    <p class="wcu-card-description">
                      we are providing safe delivery with out any damage to your goods , most our customers trusted on our delivery service
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="wcu-card p-3 mb-3">
                      <img src="\like.png" class="i1"/>
                    <h1 class="wcu-card-title mt-3">Trusted</h1>
                    <p class="wcu-card-description">
                     The most valueble thing of we are the customers trust and we don't lost their trust at any point of time same vice versa to our customers
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="wcu-card p-3 mb-3">
                      <img src="\best.png" class="i1"/>
                    <h1 class="wcu-card-title mt-3">Value for money</h1>
                    <p class="wcu-card-description">
                     we are providing the best services and we also best in value for the customer money satisfaction too
                    </p>
                  </div>
                </div>                
              </div>             
            </div>          
          </div>         
      </div>
      <div id="section1.3">
      <div className="stylesign"id="sign in" >
    <h1 className="textstyle">Sign In</h1>
<label className="textstylebot">Name</label><br/>
<input type="text"
onChange={(event)=>setName(event.target.value)}/><br/>
<label>Email</label><br/>
<input type="text"
onChange={(event)=>setEmail(event.target.value)}/><br/>
<label>Phone Number</label><br/>
<input type="number"
onChange={(event)=>setNumber(event.target.value)}/><br/>
<label>Password</label><br/>
<input type="text"
onChange={(event)=>setPassword(event.target.value)}/><br/>
<label>Confirm Password</label><br/>
<input type="password"
onChange={(event)=>setPassword(event.target.value)}/><br/>
<button class="outline-button" onClick={addToList}>Submit</button>
  
    {studList.map((val,key)=>{
  return <div key={key}>
    <h1>{val.name}</h1>
    <h1>{val.name1}</h1>
    <h1>{val.htno}</h1>
    <h1>{val.name2}</h1>
  </div>
  })}
  </div>
      </div>
      <div id="section2.3">
        <div class="follow-us-section pt-5 pb-5">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1 class="follow-us-section-heading">Follow Us</h1>
                </div>
                <div class="col-12">
                  <div class="d-flex flex-row justify-content-center">
                    <div class="follow-us-icon-container">
                      <i class="fab fa-twitter icon"></i>
                    </div>
                    <div class="follow-us-icon-container">
                      <i class="fab fa-instagram icon"></i>
                    </div>
                    <div class="follow-us-icon-container">
                      <i class="fab fa-facebook icon"></i>
                    </div>
                    <div class="follow-us-icon-container">
                      <i class="fab fa-brands fa-whatsapp icon"></i>
                    </div>
                    <div class="follow-us-icon-container">
                      <i class="fab fa-brands fa-youtube icon"></i>
                    </div>                   
                  </div>                 
                </div>              
              </div>            
            </div>          
          </div>            
      </div>      
      <div class="footer-section pt-2 pb-2">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <img
                src="\logoc.png"
                class="food-munch-logo"
              />
              <h1 class="footer-section-mail-id">chohanlogistics.com</h1>
              <p class="footer-section-address"> contact us :7337044983</p>
              <p class="footer-section-address">AP , krishna district , vijayawada , chohanlogistics</p>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;