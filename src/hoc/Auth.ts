import cookieChecker from 'js-cookie';
import React, {useEffect} from "react";
import {useUser} from "../hooks/useUser";

function AuthLayout (props: any) {
    useEffect(() => {
         fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async (): Promise<void> => {
        const cookieExists: boolean =
            typeof cookieChecker.get('jwt') === 'string' &&
            (cookieChecker.get('jwt') as string).length > 0;
        // console.log(cookieChecker.get('jwt'))
        // console.log((cookieChecker.get('jwt') as string).length > 0)
        // console.log(cookieChecker.get('jwt'))
        if (cookieExists) {
            const response = await props.getCurrentUser();
            if (response.data) {
                const responseBody = response.data;
                props.setCurrentUser(responseBody.user);
            } else {
                cookieChecker.remove('jwt');
            }
        }
    };

    return(
         props.children
    )
}

export default AuthLayout;