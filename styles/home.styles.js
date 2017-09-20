import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    mainPage: {
        flex: 1,
        justifyContent: 'center',
    },
    upContent: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#B3E5FC',
    },
    upContentImage: {
        width: 120,
        height: 120,
    },
    upContentButtons: {
        height: 120,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    upContentSingleBtn: {
        alignItems:'center',
        backgroundColor: '#1976D2',
        padding:12,
        borderRadius:10,
    },
    upContentSingleBtnOff: {
        alignItems:'center',
        backgroundColor: '#64B5F6',
        padding:12,
        borderRadius:10,
    },
    singleBtnContent: {
        padding: 2,
        flexDirection: 'row'
    },
    singleBtnIcon:{
        width: 20,
        height: 20,
    },
    singleBtnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: 8,
    },
    downContent: {
        flex: 0.6,
    },

});