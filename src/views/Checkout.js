import axios from "axios";
import { useState, useContext } from 'react';
import { DataContext } from "../DataProvider";
import '../css/Checkout.css'


let Checkout = () => {

    
    let getMainCharData = async () => {
        let data = await axios.get('http://127.0.0.1:5000/api/cart/items?id=1');
        return data.status === 200 ? data.data : null
    }

    
    let loadMainCharData = async () => {
        let data = await getMainCharData();
        let result = []
        for (var i in data){
            result.push(data[i])
        }
        console.log(result);
        setCharacters(result);

    }


    const [characters, setCharacters] = useState(() => { loadMainCharData(); });

    const {cart, setCart} = useContext(DataContext);



    return (
        <div>
            <div>
            <h1 className='mt-1 ml-5 mr-5 text-center bg-dark text-white border header'>Checkout</h1>
            <img src="https://halo.wiki.gallery/images/4/42/Johnson_%26_Vergil.png" className="rounded mx-auto d-block"></img>
            </div>
            <div className='mt-5 border rounded border-dark container'>
                <div className='row justify-content-center'>
                    
                </div>
                <div className=' row'>
                <div className='col border rounded border-info col m-4 text-black bg-info'>
                    Items:
                </div>
                <div className='col border rounded border-info col m-4 text-black bg-info'>
                    Type of Items:
                </div>
                </div>

                    <div>
                            {characters && characters.map(({ item, total_cost, item_type }) => (
                        <div className='row'>
                            <div className='col'>
                                <h4 className=' text-center border rounded bg-light items'>{item}</h4>
                        </div>
                        <div className='col'>
                            <h className=' border rounded bg-light items'>{item_type}</h>
                                <h2 className=' bg-success total'>{total_cost}</h2>
                            </div>    
                    </div>
                    ))}
                
                </div>
                <div className='row'>
                        <div id = 'Billing' className='border rounded border-info col m-4 text-white bg-dark'>Billing Information</div>
                        <div id ='Payment' className='border rounded border-info col m-4 text-white bg-dark'>Payment Method</div>
                        </div>
                <div className='row'>
                            <div className='col'>
                        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
            <label class="form-check-label" for="gridCheck">
        Save Defautl Address
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit Address</button>
</form>
</div>
<div className='col'>
                        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="First Name"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Last Name"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Card Number</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="4444 4444 4444 4444"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Expiration</label>
      <input type="text" class="form-control" id="06/22"></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">CV</label>
      <select id="inputState" class="form-control">
        <option selected>??</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
            <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Checkout</button>
</form>
</div>
</div>
                        
                        </div>
            </div>
            
        )
    }

export default Checkout;