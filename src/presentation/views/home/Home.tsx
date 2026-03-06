import React, { useEffect } from 'react';
import styles from './Styles';
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './ViewModel';
export const HomeScreen = () => {
  const { documento, password, errorMessage, onChange, login } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
          source={require('../../../../assets/miprimercuaderno/1.jpg')}
          style={styles.imageBackground}
        />
        
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Papelería Mi Primer Cuaderno</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formText}>INGRESAR</Text>
          
          <CustomTextInput
            image={require('../../../../assets/user.png')}
            placeholder='Número de Identificación'
            keyboardType='numeric'
            property='documento'
            onChangeText={onChange}
            value={documento} 
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

          <View style={{ marginTop: 40 }}>
            <RoundedButton text='INGRESAR' onPress={() => {
              console.log('Documento: ' + documento);
              console.log('Password: ' + password);
              login()
            }} />
          </View>

          <View style={styles.formRegister}>
            <Text>¿No tienes cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.formRegisterText}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};