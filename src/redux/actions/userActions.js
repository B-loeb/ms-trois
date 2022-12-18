import axios from "axios";
import {sessionService} from "redux-react-session";

export const loginUser = (credentials, history, setFieldError, setSubmitting) => async dispatch => {
   //make checks for email and password
    return () => {

    axios.post("https://fathomless-thicket-88699.herokuapp.com/user/login", 
    credentials,
    {
        headers: {
            "Content-Type": "application/json"
        }
    }
    ).then((response) => {
        const {data} = response;

        if (data.status === "FAILED") {
            const {message} = data;

            //check for error message
           if (message.includes("credentials")) {
                setFieldError("email", message);
                setFieldError("password", message);
            }else if (message.includes("password")) {
                setFieldError("password", message);
         }
        
        else if (data.status === "SUCCESS") {
            const userData = data.data[0];

            const {token} = userData._id;

            sessionService.saveSession(token).then(() => {
                sessionService.saveUser(userData).then(() => {
                    history.push("/Dash");
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }
        //complete login process
        setSubmitting(false);
        }
    }).catch(err => console.error(err));

    }
}

export const signupUser = (credentials, history, setFieldError, setSubmitting) => async => {

        return (dispatch) => {
    axios.post("https://fathomless-thicket-88699.herokuapp.com/user/signup", 
    credentials,
    {
        headers: {
            "Content-Type": "application/json"
        }
    }
    ).then((response) => {
        const {data} = response;

        if (data.status === "FAILED") {
            const {message} = data;

            //check for error message
           if (message.includes("name")) {
                setFieldError("name", message);
            }else if (message.includes("email")) {
                setFieldError("email", message);
            }else if (message.includes("password")) {
                setFieldError("password", message);
            }
            //complete submission
            setSubmitting(false);
        }
        else if (data.status === "SUCCESS") {
            //login user after signup
            const {email, password} = credentials;

            dispatch(
                loginUser({email, password}, history, setFieldError, setSubmitting)
            );   
        }
    }).catch(err => console.error(err));
}
};      
export const logoutUser = (history) => async dispatch => {
        return () => {
         sessionService.deleteSession();
            sessionService.deleteUser();
            history.push("/");
        }
};
