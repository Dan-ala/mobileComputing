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
    largeBackArrow: { width: 100, height: 80, resizeMode: 'contain' }
});