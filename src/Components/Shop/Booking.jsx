// import React, { Component } from 'react'

// export class Booking extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Place Your Order Form</h1>
//                 <form>
//                     <h1>PERSONAL INFORMATION</h1>
//                     <br />
//                     <label for="firstname">Firstname:</label>
//                     <input type="text" id="fname" placeholder="Firstname" />
//                     <label for="Lastname">Lastname:</label>
//                     <input type="text" id="lname" placeholder="Lastname" /><br /><br />
//                     <label for="Phone Number">Phone Number:</label>
//                     <input type="number" id="phno" placeholder="xxxxx-xxxxx" />
//                     <label for="Email">Your Email</label>
//                     <input type="email" id="email" placeholder="abc@example.com" /><br /><br />
//                     <label for="city">City:</label>
//                     <input type="text" id="city" placeholder="city" />
//                     <br />

//                     <h1>BOOKING DETAILS</h1>
//                     <label for="Occasion">Select Occasion:</label>
//                     <br />
//                     <label for="Birthday">Birthday</label>
//                     <input type="radio" id="bday" name="bday" />
//                     <br />
//                     <label for="Anniversary">Anniversary</label>
//                     <input type="radio" id="anniversary" name="bday" />
//                     <br />
//                     <label for="Others">Others</label>
//                     <input type="radio" id="others" name="bday" />
//                     <br /><br />
//                     <label for="Flavours">Flavours:</label>
//                     <input type="text" list="Flavours" placeholder="Flavours" />
//                     <datalist id="Flavours">
//                         <option value="chocolate chocochip" />
//                         <option value="Oreo Cookie" />
//                         <option value="Mixed Fruit" />
//                         <option value="Red Velvet" />
//                         <option value="Strawberry" />
//                         <option value="Rainbow" />
//                         <option value="Butterscoth" />
//                         <option value="Black Forest" />
//                         <option value=" white forest" />
//                         <option value=" Biscoff" />
//                     </datalist><br /><br />
                    
//                     <label for="date">Date Of Occasion:</label>
//                     <input type="date" id="date " />
//                     <br /><br />
//                     <label for="No. Of Services">No. Of Services</label>
//                     <select id="no of servies" name="no of servies">
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                         <option value="7">7</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                     </select>
//                     <br /><br />
//                     <label for="nameoncake">Name On Cake:</label>
//                     <input type="text" id="cname" placeholder="name on cake" /><br /><br />
//                     <label for="Any ref">Any Reference Link </label>
//                     <input type="file" id="link" />
//                     <legend class="ab">CONFORMATION</legend><br />
//                     <label for="Are you sure?">Are You Sure ?</label>
//                     <input type="button" id="yes" value="yes" />
//                     <input type="button" id="No" value="No" /> <br /><br />
//                     <label for="pickup / Delivery">Pickup / Delivery :</label><br /><br />
//                     <label for="pickup">Pick up</label>
//                     <input type="checkbox" id="pickup" name="pod" /><br />
//                     <label for="Delivery">Delivery</label>
//                     <input type="checkbox" id="delivery" name="pod" />
//                     <br /><br />
//                     <label for="time">Pick up Time:</label>
//                     <input type="time" id="time" /><br /><br />
//                     <label for="time">Delivery Time:</label>
//                     <input type="time" id="time" /><br /><br />
//                     <label for="Address">Delivery Address:</label>
//                     <input type="address" id="address" /><br /><br />
//                     <label for="Payment method">Payment Method:</label><br />
//                     <label for="paytm">Paytm</label>
//                     <input type="radio" id="pay" name="paytm" /><br />
//                     <label for="Google pay">Google Pay</label>
//                     <input type="radio" id="google" name="paytm" /><br />
//                     <label for="COD">COD</label>
//                     <input type="radio" id="COD" name="paytm" /><br />
//                     <br />
//                     <div class="ab">
//                         <input type="button" id="Submit" value="SUBMIT" />
//                         <input type="button" id="RESET" value="RESET" />
//                     </div>


//                     <fieldset />
//                     <br /><br />




//                 </form>
//             </>
//         )
//     }
// }

// export default Booking