import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#14171b',
        textAlign: 'center',
        borderWidth: 4,
        borderRadius: 50,
        borderColor: '#0e0f12',
        color: '#0066FF',
        
    },
    operationButton: {
        backgroundColor: '#0e0f12',
        borderWidth: 0,
    },
    buttonDouble: {
        width: Dimensions.get('window').width / 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default props => {
    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)} underlayColor={'#14171b'} activeOpacity={0}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}