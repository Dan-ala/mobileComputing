import { useEffect, useState } from 'react';
import { LoginAuthUseCase } from '../../../domain/useCases/auth/LoginAuth';
import { SaveUserUseCase } from '../../../domain/useCases/userLocal/SaveUserLocal';

import { useUserLocal } from '../../hooks/useUserLocal'

const HomeViewModel = () => {

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

    const login = async () => {
        if (isValidForm()) {
            const response = await LoginAuthUseCase(values.documento, values.password);
            console.log('Respuesta: ' + JSON.stringify(response));
            if (!response.success) {
                setErrorMessage(response.message);
            } else {
                await SaveUserUseCase(response.data);
                getUserSession();
            }
        }
    };
    const isValidForm = () => {
        if (values.documento === '') {
            setErrorMessage('El documento es requerido');
            return false;
        }
        if (values.password === '') {
            setErrorMessage('La contraseña es requerido');
            return false;
        }
        return true;
    };
    return {
        ...values,
        user,
        onChange,
        login,
        errorMessage
    }
}
export default HomeViewModel;