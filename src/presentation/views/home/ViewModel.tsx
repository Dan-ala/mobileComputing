// ViewModel.ts
import { useState } from 'react';

const HomeViewModel = () => {
    const [values, setValues] = useState({
        documento: '',
        password: '',
    });
    
    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const login = () => {
        const documentoInt = parseInt(values.documento, 10);

        if (isNaN(documentoInt)) {
            console.log("Error: El documento debe ser un número");
            return;
        }

        console.log('Sending to DB as INT:', documentoInt);
        console.log('Password:', values.password);
        
    };
    
    return {
        ...values,
        onChange,
        login
    };
};
 
export default HomeViewModel;