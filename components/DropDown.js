import React from 'react';
import {View, Picker} from 'react-native';

class DropDown extends React.Component {
    render(){
        return (
            <Picker
                selectedValue={this.props.location}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.setState({location: itemValue})}>
                <Picker.Item label="Palos" value="palos" />
                <Picker.Item label="Christ" value="christ" />
            </Picker>
        );
    }
}

export default DropDown;