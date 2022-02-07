import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    buttonA:{
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#1B9AAA',
        backgroundColor: '#1B9AAA',
    },
    
    buttonB:{
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#1B9AAA',
        backgroundColor: '#1B9AAA',
    },
    
    buttonC:{
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#1B9AAA',
        backgroundColor: '#1B9AAA',
    },
    
    buttonText:{
        fontSize: 20,
    },
    
    buttonDiv:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
    },

    display:{
        
        margin: '5%',
        marginBottom: '5%',
        marginTop: '5%',

    },

    tHead:{
        flexDirection: 'row',
        maxHeight: '90%',
        marginBottom: '5%',
        marginTop: '5%',
    },

    h1:{
        fontSize: 40,
        fontStyle: 'italic',
        color: '#FFF8F0',
    },

    h4:{
        fontSize: 20,
        color: '#FFF8F0',
    },

    mid:{
        flexDirection: 'row',
        alignContent: 'space-between',
    },

    image:{
        alignSelf: 'center',
        height: 250,
        width: 250,        
    },

    local:{
        flexDirection: 'row',
        marginBottom: '5%',
        marginTop: '5%',
    },

    h2:{
        fontSize: 30,
        fontStyle: 'italic',
        color: '#FFF8F0',
    },

    desc:{
        justifyContent: 'flex-start',
        fontSize: 30,
        marginBottom: '5%',
        marginTop: '5%',
    },

    p:{
        fontSize: 15,
        color: '#FFF8F0',
    },

    times:{
        alignContent: 'space-between',
    },

    h3:{
        fontSize: 20,
        color: '#FFF8F0',
    },

    background:{
        backgroundColor: '#0E0F19',
        height: '100%',
    },

})

export default styles