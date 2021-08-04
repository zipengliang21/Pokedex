import cookieChecker from 'js-cookie';
import {useEffect} from "react";

function AuthLayout (props: any) {
    useEffect(() => {
         fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async (): Promise<void> => {
        const cookieExists: boolean =
            typeof cookieChecker.get('jwt') === 'string' &&
            (cookieChecker.get('jwt') as string).length > 0;
        if (cookieExists) {
            const response = await props.getCurrentUser();
            if (response) {
                props.setCurrentUser(response);
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