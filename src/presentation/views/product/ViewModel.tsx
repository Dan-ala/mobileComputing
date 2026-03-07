import React, { useState } from 'react';
import { RegisterAuthUseCase } from '../../../domain/useCases/auth/ProductsAuth';
const ProductViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        serie: '',
        tipo: '',
        nombProd: '',
        provee: '',
        precio: '',
        stockActual: '',
    });
    const onChange = (property: string, value: any) => {
      setValues({ ...values, [property]: value });
    };
    const resetForm = () => {
      setValues({
        serie: '',
        tipo: '',
        nombProd: '',
        provee: '',
        precio: '',
        stockActual: '',
      });
    };
    const isValidForm = (): boolean => {
      setErrorMessage('');
      if (values.serie === '') {
        setErrorMessage('El número de serie es requerido');
        return false;
      }
      if (values.tipo === '') {
        setErrorMessage('El tipo es requerido');
        return false;
      }
      if (values.nombProd === '') {
        setErrorMessage('El nombre es requerido');
        return false;
      }
      if (values.provee === '') {
        setErrorMessage('El proveedor es requerido');
        return false;
      }
      if (values.precio === '') {
        setErrorMessage('Escribir precio es requerida');
        return false;
      }
      if (values.stockActual === '') {
        setErrorMessage('Las contraseñas no coinciden');
        return false;
      }
      return true;
    };
    const registerProduct = async () => {
      if (isValidForm()) {
        try {
          const productData = {
            ...values,
            precio: parseFloat(values.precio),
            stockActual: parseInt(values.stockActual, 10)
          }
          const response = await RegisterAuthUseCase(productData);
          console.log('Result: ' + JSON.stringify(response));
          resetForm();
        } catch (error) {
          setErrorMessage('Error al registrar. Por favor, inténtalo de nuevo.');
        }
      }
    };

    return {
        ...values,
        onChange,
        registerProduct,
        errorMessage,
    };
};  
export default ProductViewModel;