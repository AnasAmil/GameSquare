import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import { useEffect, useState } from 'react';

function Home(){

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({});

    const [registerFilled, setRegisterFilled] = useState(false);

    const [isSubmit, setIsSubmit] = useState(false)

    const [hasError, sethasError] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false
    })

    useEffect(() => {
        if(values.username.length > 0 && values.email.length > 0 && values.password.length > 0 && values.confirmPassword.length > 0){
            setRegisterFilled(false);
        } else {
            setRegisterFilled(true);
        }
    }, [values])


    const onChange = (e) => {
         setValues({...values, [e.target.name]: e.target.value});    
    }

    
  
    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
    }

    useEffect(() => {
        
        if(Object.keys(errors).length === 0 && isSubmit){
            setValues({
                username: '',
                email :'',
                password: '',
                confirmPassword: ''
            })

            alert('SignIn succesful');
        }

    }, [errors])
    
    

    const validate = (values, errorInput) => {
        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!values.username){
            errors.username = "Please provide the username";
            sethasError({
                username: true
            });
        }

        if(!values.email){
            errors.email = "Please provide the email";
            sethasError({
                email: true
            });
        } else if(!regex.test(values.email)){
            errors.email = "Please provide a valid email";
            sethasError({
                email: true
            });
        }

        if(!values.password){
            errors.password = "Please provide the password";
            sethasError({
                password: true
            });
        }

        if(!values.confirmPassword){
            errors.confirmPassword = "Please re-enter the password";
            sethasError({
                confirmPassword: true
            });
        } else if(values.confirmPassword !== values.password){
            errors.confirmPassword = "Please enter the right password";
            sethasError({
                confirmPassword: true
            });
        }


        return errors;
    }



    

    return(
        <div>
            <Header />
            <Form  error={hasError} onSubmit={onSubmit} values={values} errorMessage={errors} disabled={registerFilled} onChange={onChange}/>
        </div>
        
    );
}

export default Home;