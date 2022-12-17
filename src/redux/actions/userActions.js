import axios from "axios";
import {sessionService} from "redux-react-session";
export const loginUser = (credentials, history, setFieldError, setSubmitting) => async dispatch => {
   //make checks for email and password
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
                    history.push("/");
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }
        //complete login process
        setSubmitting(false);
    }
    }).catch(err => console.error(err));
}

export const signupUser = (credentials, history, setFieldError, setSubmitting) => async dispatch => {
   
}
export const logoutUser = () => async dispatch => {
 
}