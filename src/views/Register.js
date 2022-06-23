import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
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
            <div className='row'>
                <div className='mt-5 mr-4 col'>
        <div className="bg-dark form w-50 h-80">
          <div className="text-white w-50 h-80 border rounded border-dark form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="username">
                  <label className="form__label" for="username">Username </label>
                  <input  type="text" name="" id="username"  className="form__input"placeholder="Username"/>
              </div>
              <div className="email">
                  <label className="pd-4 form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn btn-primary">Register</button>
          </div>
      </div>
      </div>
      </div>
      </div>
    )
};

export default Register;


// import { useState } from 'react';
// import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
// import { auth } from '../index';

// let Register = () => {

//     const [registerEmail, setRegisterEmail] = useState ("");
//     const [registerPassword, setRegisterPassword] = useState ("");
//     const [loginEmail, setLoginEmail] = useState ("");
//     const [loginPassword, setLoginPassword] = useState ("");

//     const [user, setUser] = useState({});

//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     })


//     const register = async () => {
//         try {
//         const user = await createUserWithEmailAndPassword(
//             auth,
//             registerEmail,
//             registerPassword
//             );
//         console.log(user)
//         } catch (error) {
//             console.log(error.message);
//         }
//     };

//     const login = async () => {
//         try {
//             const user = await signInWithEmailAndPassword(
//                 auth,
//                 loginEmail,
//                 loginPassword
//                 );
//             console.log(user)
//             } catch (error) {
//                 console.log(error.message);
//             }
//     };

//     const logout = async () => {

//         await signOut(auth);

//     };


//     return (
//         <div className="Register">
//             <div>
//                 <h3>Register User</h3>
//                 <input placeholder="Email" onChange={(event) => {setRegisterEmail(event.target.value);
//                 }} 
//                 />
//                 <input placeholder="Password" onChange={(event) => {setRegisterPassword(event.target.value);
//                 }} 
//                 />
//                 <button onClick={ register }>Create User</button>
//             </div>
//             <div>
//                 <h3>Login</h3>
//                 <input placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value);
//                 }} 
//                 />
//                 <input placeholder="Password" onChange={(event) => {setLoginPassword(event.target.value);
//                 }} 
//                 />
//                 <button onClick={ login }>Login</button>
//             </div>
//             <h4>User Logged In:</h4>
//             {user?.email}
//             <button onClick={ logout }>Sign Out</button>
//         </div>
//     );
// }

// export default Register;