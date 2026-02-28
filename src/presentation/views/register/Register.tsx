import React, { useEffect } from 'react';
import { Text, View, Image, ScrollView, ToastAndroid, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';
export const RegisterScreen = () => {
  const { documento, nombUsu, password, celular, confirmPassword, errorMessage, onChange, register } = useViewModel();
  useEffect(() => {
    if (errorMessage !== '')
      ToastAndroid.show(errorMessage, ToastAndroid.LONG)
  }, [errorMessage]);
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          style={{
            flex: 1
          }}
        >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }} 
          bounces={false}
          keyboardShouldPersistTaps='handled'
        >
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/chef.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/miprimercuaderno/notebook logo.jpg')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Papelería Mi Primer Cuaderno</Text>
      </View>
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRAR</Text>
          <CustomTextInput
            image={require('../../../../assets/user.png')}
            placeholder='Documento'
            keyboardType='numeric'
            property='documento'
            onChangeText={onChange}
            value={documento}
          />
          <CustomTextInput
            image={require('../../../../assets/my_user.png')}
            placeholder='Nombres'
            keyboardType='default'
            property='nombUsu'
            onChangeText={onChange}
            value={nombUsu}
          />
          <CustomTextInput
            image={require('../../../../assets/phone.png')}
            placeholder='Teléfono'
            keyboardType='numeric'
            property='celular'
            onChangeText={onChange}
            value={celular}
          />
          <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder='Contraseña'
            keyboardType='default'
            property='password'
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
          />
          <CustomTextInput
            image={require('../../../../assets/confirm_password.png')}
            placeholder='Confirmar Contraseña'
            keyboardType='default'
            property='confirmPassword'
            onChangeText={onChange}
            value={confirmPassword}
            secureTextEntry={true}
          />
          <View style={{ marginTop: 20 }}>
            <RoundedButton text='ENVIAR' onPress={() => register()} />
          </View>
        </ScrollView>
      </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}