import React, { Component } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons'


class FilterBar extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        // calculate width fo select option based on the amoutn of the options. also substract width for the border
        let widthOpton = (width / this.props.options.length) - 3 * this.props.options.length;
        return (
            <View style={styles.filterBar}>
                <SegmentedControls
                    containerStyle={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F5FCFF',
                    }}
                    optionStyle= {{
                        fontSize: 16,
                        margin: 4,
                        width: widthOpton,
                        fontWeight: 'bold',
                        fontFamily: 'Snell Roundhand'
                    }}
                    direction={'row'}
                    options={this.props.options}
                    onSelection={this.props.onSelection.bind(this) }
                    selectedOption={this.props.defaultOption}
                    />
            </View>
        );
    }
}

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    filterBar: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default FilterBar;