import React, { useEffect } from 'react';
import styles from './Styles';
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './ViewModel';
import { ProfileInfoScreen } from '../info/ProfileInfo';

export const AdminScreen = () => {
  const { user, errorMessage } = useViewModel(); 
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
        style={{ flex: 1 }}
      >
        <ImageBackground 
          source={require('../../../../../assets/miprimercuaderno/2.jpg')} 
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }} 
            bounces={false}
            keyboardShouldPersistTaps='handled'
          >
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
              
              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Hola, {user?.nombUsu}</Text>
              </View>

              <View style={{ width: '100%', alignItems: 'center', marginTop: 50 }}>
                
                <TouchableOpacity style={styles.adminButton} onPress={() => navigation.navigate('RegisterScreen')}>
                    <Image source={require('../../../../../assets/user.png')} style={styles.adminIcon} />
                    <Text style={styles.adminButtonText}>Crear usuario</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.adminButton} onPress={() => navigation.navigate('CreateProductScreen')}>
                    <Image source={require('../../../../../assets/password.png')} style={styles.adminIcon} />
                    <Text style={styles.adminButtonText}>Crear Elemento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.adminButton}>
                    <Image source={require('../../../../../assets/user.png')} style={styles.adminIcon} />
                    <Text style={styles.adminButtonText}>Consultar Stock</Text>
                </TouchableOpacity>

              </View>

              <View style={{ paddingBottom: 40 }}>
                <ProfileInfoScreen />
              </View>

            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};