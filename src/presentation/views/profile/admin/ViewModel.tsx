import { useEffect, useState } from 'react';
// import { LoginAuthUseCase } from '../../../domain/useCases/auth/LoginAuth';
// import { SaveUserUseCase } from '../../../domain/useCases/userLocal/SaveUserLocal';

import { useUserLocal } from '../../../hooks/useUserLocal';

const AdminViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        documento: '',
        password: '',
    });

        const { user, getUserSession } = useUserLocal();
        console.log('User: ' + JSON.stringify(user))
    
        useEffect(() => {
            getUserSession();
        }, []);

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    return {
        ...values,
        user,
        onChange,
        errorMessage
    }
}
export default AdminViewModel;