import React, { useState } from 'react';
import { RegisterAuthUseCase } from '../../../domain/useCases/auth/ProductsAuth';
// import { GetUserLocalUseCase } from '../../../domain/useCases/productLocal/GetProductLocal';
const ProductViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        serie: '',
    });
    const onChange = (property: string, value: any) => {
      setValues({ ...values, [property]: value });
    };
    const resetForm = () => {
      setValues({
        serie: '',
      });
    };
    const isValidForm = (): boolean => {
      setErrorMessage('');
      if (values.serie === '') {
        setErrorMessage('El número de serie es requerido');
        return false;
      }
      return true;
    };



    const consultarProductos = async () => {
        
    }


    return {
        ...values,
        onChange,
        consultarProductos,
        errorMessage,
        
    };
};  
export default ProductViewModel;