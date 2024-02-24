import axiosClient from "../../../Utils/ApiClient/baseAxiosClient";
import useRequestProcessor from "../../../Utils/ApiClient/useRequestProcessor";

type RegistrationModel = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    referralLink: string;
}

const handleRegistration = (model: RegistrationModel) => {
    console.log(model);
    const { query } = useRequestProcessor();

    const data = {
        token: 'eyJhbGciOiJQUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoic3R1ZGVudCIsImZpcnN0TmFtZSI6IkRhdml0IiwibGFzdE5hbWUiOiJNYXRldm9zeWFuIiwiZW1haWwiOiJkYXZtYXRAZ21haWwuY29tIn0.I444osvgtWI4kFCQJj2xV3E8aKepGsVibgNEVSucvj3STOPmoNST4JMTi3cs6a5ZJ3TABu1t8b1O4x2slwFyiYjigvxZ8MW0bzogOKE5xWBNl6dAZvBLjC2gdRHZywzn6sgsU0IHZKaw9fvrDYFHWXMSOpSDF0Sl-4bbmd6Y7zvl1eX2d9WpBhnlMKbWrljaOs4xVZABQ40N235HV76HkhLFiy56pDZGallFdlamSH0h7d9pbAWANwcoD3XFoTywKBdLs--PiFWd5NehEFhN8LLY331YkzHS7uNnm-_a24QPPzY4fn3v9-hNKbv5jeyMHfHshWqR2N0rqGYk6F2AVQ'
    };

    const isLoading = false;
    const isError = false;


    // const {data, isLoading, isError} = query(
    //     'registerUser',
    //     () => axiosClient.get('/register')
    //         .then(response => { response.data; console.log(response.data)})
    //         .catch(error => console.log(error))
    // );               this part is very cool, but we do not have back end yet

    return {data, isLoading, isError};
}

export { handleRegistration };
export type { RegistrationModel };
