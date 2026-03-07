import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import useViewModel from './ViewModel';

export const LookAtProductScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { serie, nombProd, stockActual, onChange } = useViewModel();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ImageBackground 
                    source={require('../../../../assets/miprimercuaderno/3.jpg')} 
                    style={styles.container}
                    resizeMode="cover"
                >
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Text style={styles.title}>Consultar Stock</Text>

                        {/* Campo Código con TextInput Estándar */}
                        <View style={styles.stockInputContainer}>
                            <Image 
                                source={require('../../../../assets/miprimercuaderno/terminal.png')} 
                                style={styles.stockInputIcon} 
                            />
                            <TextInput
                                style={styles.stockTextInput}
                                placeholder="Código"
                                placeholderTextColor="#D2B48C"
                                keyboardType="numeric"
                                value={serie}
                                onChangeText={(text) => onChange('serie', text)}
                            />
                        </View>

                        <View style={styles.stockInputContainer}>
                            <Image 
                                source={require('../../../../assets/miprimercuaderno/pencil.jpg')} 
                                style={styles.stockInputIcon} 
                            />
                            <TextInput
                                style={styles.stockTextInput}
                                placeholder="Nombre"
                                placeholderTextColor="#D2B48C"
                                value={nombProd}
                                onChangeText={(text) => onChange('nombProd', text)}
                            />
                        </View>

                        <View style={styles.stockInputContainer}>
                            <Image 
                                source={require('../../../../assets/miprimercuaderno/listas.jpg')} 
                                style={styles.stockInputIcon} 
                            />
                            <TextInput
                                style={styles.stockTextInput}
                                placeholder="Existencias"
                                placeholderTextColor="#D2B48C"
                                keyboardType="numeric"
                                value={stockActual}
                                onChangeText={(text) => onChange('stockActual', text)}
                            />
                        </View>

                        <TouchableOpacity style={styles.searchAction}>
                            <Image 
                                source={require('../../../../assets/miprimercuaderno/search_bug.jpg')} 
                                style={styles.searchIconLarge} 
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrowWrapper}>
                            <Image 
                                source={require('../../../../assets/miprimercuaderno/arrow.jpg')} 
                                style={styles.backArrowIcon} 
                            />
                        </TouchableOpacity>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};