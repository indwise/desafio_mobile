import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

import styles from './styles'


export default class Comment extends React.Component{
    
    
    returnTitle(){

        text = this.props.val.title
        spl = text.split(';.;',2)
        return spl[0]
    }
    
    returnComment(){

        text = this.props.val.title
        spl = text.split(';.;',2)
        return spl[1]

    }
    
    render(){
        return(
                            
                <View key={this.props.keyval} style={styles.task}>
                    
                    <View style={styles.com_container}>
                            <View style={styles.title_con}>
                                <Text style={styles.title}>{this.returnTitle()}</Text>
                            </View>

                            <View style={styles.text_con}>
                                <Text style={styles.comment}>{this.returnComment()}</Text>
                            </View>

                            <View style={styles.down_bor}>

                            </View>
                    </View>
                    
                    {/* <TouchableOpacity onPress={this.props.deleteMethod} style={styles.taskDelete}>
                    
                        <Image
        
                        source={require('./delete_icon.png')}
                        style={styles.delete_icon}
        
                        />
                    
                    </TouchableOpacity> */}
                </View>
              
        );
    }
    
}