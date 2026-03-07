import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import styles from './Styles'; // We will define these below
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import useViewModel from './ViewModel';

export const CreateProductScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const {serie, tipo, nombProd, provee, precio, stockActual ,registerProduct,onChange} = useViewModel()

    return (

              <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={{
                    flex: 1
                  }}
                >


        <ImageBackground 
            source={require('../../../../assets/miprimercuaderno/3.jpg')} 
            style={styles.container}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Crea el producto</Text>

                {/* Top Row: Serial and Cantidad */}
                <View style={styles.row}>
                    <TextInput style={styles.smallInput} 
                        placeholder="Serial"
                        placeholderTextColor="#D2B48C" 
                        keyboardType='numeric'
                        onChangeText={(text) => onChange('serie', text)}
                        value={serie}
                    />
                    <TextInput style={styles.smallInput} 
                        placeholder="Cantidad" 
                        keyboardType='numeric'
                        onChangeText={(text) => onChange('stockActual', text)}
                        value={stockActual}
                        placeholderTextColor="#D2B48C" 
                    />
                </View>

                {/* Full Width Inputs */}
                <TextInput 
                    style={styles.fullInput} 
                    placeholder="Tipo" 
                    placeholderTextColor="#D2B48C" 
                    onChangeText={(text) => onChange('tipo', text)}
                    value={tipo}
                />
                <TextInput style={styles.fullInput} 
                    placeholder="Nombre" 
                    placeholderTextColor="#D2B48C" 
                    onChangeText={(text) => onChange('nombProd', text)}
                    value={nombProd}
                />
                <TextInput style={styles.fullInput} 
                    placeholder="Precio" 
                    placeholderTextColor="#D2B48C" 
                    keyboardType='numeric'
                    onChangeText={(text) => onChange('precio', text)}
                    value={precio}
                />
                <TextInput style={styles.fullInput} 
                    placeholder="Proveedor"
                    placeholderTextColor="#D2B48C" 
                    onChangeText={(text) => onChange('provee', text)}
                    value={provee}
                />

                {/* Action Icons */}
                <View style={styles.iconRow}>
                    <TouchableOpacity onPress={() => registerProduct()}>
                        <Image source={require('../../../../assets/miprimercuaderno/save.jpg')} style={styles.actionIcon} />
                    </TouchableOpacity>
                </View>

                {/* Back Arrow */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../../../../assets/miprimercuaderno/arrow.jpg')} style={styles.largeBackArrow} />
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    );
};