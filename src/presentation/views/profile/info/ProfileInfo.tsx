import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../../../../../App';
import useViewModel from './ViewModel';
import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> { };

export const ProfileInfoScreen = () => {
    const { removeSession } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={{ padding: 50 }}>
            <Button
                onPress={async () => {
                    await removeSession();
                    navigation.replace('HomeScreen');
                }}
                title="Cerrar Sesión"
                color="red"
            />
        </View>
    );
};