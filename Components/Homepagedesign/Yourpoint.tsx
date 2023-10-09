import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Yourpoint = () => {
  return (
    <View style={styles.yp}>
    <Text style={styles.txt}>
      Your Points
    </Text>
  
 <TouchableOpacity>
  <Text style={styles.txt}>View All</Text>
 </TouchableOpacity>
  </View>
  )
}

export default Yourpoint

const styles = StyleSheet.create({
    yp:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffff',
        padding: 10,
        
        
    },

    txt:{
        color:'#690c23',
        fontFamily:'roboto',
        fontSize: 15
    }

})