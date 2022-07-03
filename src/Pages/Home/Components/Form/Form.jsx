import { useState, useEffect } from 'react';
import './Form.css';

function Form(props){
        
    return(
        <div className='container'>
            <div className='left'>
                <div className='rect' id="yellow"></div>
                <div className='rect' id='blue'></div>
            </div>
            <img src={require('../../../../Assets/Picture.png')} alt="" id="illustration"/>
            <div className='formContainer'>
                <div className='text'>
                    <h2>Signup</h2>
                    <p>All fields are required</p>
                </div>

                <form action="" className='form' onSubmit={props.onSubmit}>
                    <input type="text" name="username" placeholder="username" className={props.error.username ? 'Defaultinput ErrorInput' : 'Defaultinput'} value={props.values.username} onChange={props.onChange}/>
                    <span className="error">{props.errorMessage.username}</span>
                    <input type="text" name="email" placeholder="Email"  className={props.error.email ? 'Defaultinput ErrorInput' : 'Defaultinput'} value={props.values.email}  onChange={props.onChange} />
                    <span className="error">{props.errorMessage.email}</span>
                    <input type="password" name="password" placeholder="Password" className={props.error.password ? 'Defaultinput ErrorInput' : 'Defaultinput'} value={props.values.password}  onChange={props.onChange} />
                    <span className="error">{props.errorMessage.password}</span>
                    <input type="password" name="confirmPassword" placeholder="Confirm password" className={props.error.confirmPassword ? 'Defaultinput ErrorInput' : 'Defaultinput'} value={props.values.confirmPassword} onChange={props.onChange}/>
                    <span className="error">{props.errorMessage.confirmPassword}</span>
                    <input type="submit" value="Register" id="btn" disabled={props.disabled}/>
                </form>
            </div>

            <div className='rect' id="pink"></div>
        </div>
    );
}

export default Form;