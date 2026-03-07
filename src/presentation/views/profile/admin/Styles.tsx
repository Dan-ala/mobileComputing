import { StyleSheet } from "react-native";

const AdminStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    // Centers the "Hola Usuario Admin" text
    logoContainer: {
        alignSelf: 'center',
        marginTop: 80,
        paddingHorizontal: 20,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        // Text shadow makes it readable against the photo background
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    // Container for the vertical stack of buttons
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
        paddingHorizontal: 30,
    },
    // The tan-colored rounded buttons from your mockup
    adminButton: {
        width: '100%',
        height: 80,
        backgroundColor: '#D2B48C', // Tan/Beige color from mockup
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 25,
        // Elevation for Android / Shadow for iOS
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    adminIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    adminButtonText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        marginRight: 40, // Offsets the icon width to center text
    },
    // The back arrow at the bottom
    backArrowContainer: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
    },
    backArrow: {
        width: 60,
        height: 40,
        tintColor: 'black', // Makes the image black if it's a different color
    },
    // Kept your original form styles in case you use them for modals
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
});

export default AdminStyles;