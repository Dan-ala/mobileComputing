// Styles.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { flex: 1, width: '100%' },
    scrollContainer: { alignItems: 'center', paddingTop: 60, paddingHorizontal: 20 },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#000' },
    row: { flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 15 },
    smallInput: { 
        backgroundColor: 'white', 
        width: '45%', 
        height: 50, 
        borderRadius: 10, 
        textAlign: 'center', 
        borderWidth: 1, 
        borderColor: '#000' 
    },
    fullInput: { 
        backgroundColor: 'white', 
        width: '90%', 
        height: 50, 
        borderRadius: 10, 
        textAlign: 'center', 
        marginBottom: 15, 
        borderWidth: 1, 
        borderColor: '#000' 
    },
    iconRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 30 },
    actionIcon: { width: 60, height: 60, resizeMode: 'contain' },
    backButton: { marginTop: 50, alignSelf: 'flex-end', marginRight: 20 },
    largeBackArrow: { width: 100, height: 80, resizeMode: 'contain' },

    stockInputContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        height: 75,
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderWidth: 2, // Borde negro definido en tu diseño
        borderColor: 'black',
    },

    // Styles.ts update

    stockInputIcon: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    // El TextInput estándar de React Native
    stockTextInput: {
        flex: 1,
        fontSize: 22,
        color: '#D2B48C', // Color café claro para el texto/placeholder
        textAlign: 'center', // Centra el texto como en el mockup
        fontWeight: '500',
    },
    // Botón de la lupa con el insecto
    searchAction: {
        marginTop: 20,
        alignItems: 'center',
    },
    searchIconLarge: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
    },
    // Flecha de retorno posicionada abajo a la derecha
    backArrowWrapper: {
        position: 'absolute',
        bottom: 30,
        right: 20,
    },
    backArrowIcon: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
    }
});