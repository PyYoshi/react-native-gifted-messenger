import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import GiftedSpinner from './GiftedSpinner';

let styles = StyleSheet.create({
    errorButtonContainer: {
        marginLeft: 8,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6e6eb',
        borderRadius: 15,
        width: 30,
        height: 30
    },
    errorButton: {
        fontSize: 22,
        textAlign: 'center'
    },
    giftedSpinnerContainer: {
        backgroundColor: 'transparent',
        borderRadius: 0
    }
});

export default class ErrorButton extends React.Component {
    static defaultProps = {
        onErrorButtonPress: () => {},
        rowData: {},
        rowID: null,
        styles: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    componentWillMount() {
        Object.assign(styles, this.props.styles);
    }

    onPress() {
        this.setState({
            isLoading: true
        });

        this.props.onErrorButtonPress(this.props.rowData, this.props.rowID);
    }

    render() {
        if (this.state.isLoading === true) {
            return (
                <View
                    style={[styles.errorButtonContainer, styles.giftedSpinnerContainer]}>
                    <GiftedSpinner />
                </View>
            );
        }
        return (
            <View style={styles.errorButtonContainer}>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={this.onPress.bind(this)}>
                    <Text style={styles.errorButton}>↻</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
