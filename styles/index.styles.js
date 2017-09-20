import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    toolbar: {
        // PRIMARY COLOR
        backgroundColor: '#2196F3',
        height: 56,
        width: '100%',
    },
});

export const drawerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 13,
        backgroundColor: '#BBDEFB',
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        padding: 10
    },
    titleImage: {
        width: 45,
        height: 45,
    },
    buttons: {
        alignItems: 'flex-start',
        paddingTop: 2
    },
    selectedBtn: {
        backgroundColor: '#f2f2f2',
        width: '100%',
        flexDirection: 'row',
        padding: 18,
    },
    singleBtn: {
        width: '100%',
        flexDirection: 'row',
        padding: 18,
    },
    buttonText: {
        paddingLeft: 15,
        fontSize: 16,
    },
    buttonIcon: {
        width: 24,
        height: 24,
    }
});