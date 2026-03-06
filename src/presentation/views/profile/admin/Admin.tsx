import React, { useEffect } from 'react';
import styles from './Styles';
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid } from 'react-native';
// import { RoundedButton } from '../../components/RoundedButton';
// import { CustomTextInput } from '../../components/CustomTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './ViewModel';

export const AdminScreen = () => {
  const { documento, password, errorMessage, onChange } = useViewModel();
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
      <View>
        <Image
          source={require('../../../../../assets/miprimercuaderno/2.jpg')}
        />
        
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Hola, USUARIO</Text>
        </View>

        {/* <View style={styles.form}>
          <Text style={styles.formText}></Text>



          <View style={{ marginTop: 40 }}>
          </View>

          <View style={styles.formRegister}> */}
            {/* <Text>¿No tienes cuenta?</Text> */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.formRegisterText}>MI PRIMER MUNDO</Text>
            </TouchableOpacity> */}
          {/* </View>
        </View> */}
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};