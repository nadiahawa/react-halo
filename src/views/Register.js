import React from 'react';
import { useState } from 'react';
import { auth } from '../index';
import '../css/Register.css'


function Register () {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    

    return (
        <div className='container'>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d504bd1d-2436-46d2-bb9b-34ad6350f14f/dcy4er6-6cefec61-1985-4579-ad13-ea212708690f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1MDRiZDFkLTI0MzYtNDZkMi1iYjliLTM0YWQ2MzUwZjE0ZlwvZGN5NGVyNi02Y2VmZWM2MS0xOTg1LTQ1NzktYWQxMy1lYTIxMjcwODY5MGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X_ayZyBk6z2DTScekSt57w9CA-lTTSSqoIeWUP_oP3E" className="mt-2 mw-100  mh-200 rounded d-block"></img>
            <div className='row'>
                <div className='d-flex justify-content-center mt-5 col'>
        <div className="m-0 form w-50 h-80">
          <div className="p-2 bg-dark text-white w-50 h-80 border rounded border-dark form-body">
              <div className="bg-dark username">
                  <label className="bg-dark form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="bg-dark lastname">
                  <label className="bg-dark form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="bg-dark username">
                  <label className="bg-dark form__label" for="username">Username </label>
                  <input  type="text" name="" id="username"  className="form__input"placeholder="Username"/>
              </div>
              <div className="bg-dark email">
                  <label className="bg-dark pd-4 form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="bg-dark password">
                  <label className="bg-dark form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="bg-dark confirm-password">
                  <label className="bg-dark form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div className=" footer">
              <button type="submit" className="mt-2 btn btn-primary">Register</button>
          </div>
      </div>
      </div>
      </div>
      </div>
    )
};

export default Register;
