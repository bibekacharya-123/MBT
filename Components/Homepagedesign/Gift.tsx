import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const Gift = () => {
  return (
    <View style={styles.overdesign}>
      {/*<TouchableOpacity>
        
      <View style={styles.pointbox}>
        <View style={styles.gift}>
          <Feather name="gift" size={52} color="#690c23" />
        </View>
        <View>
          <Text style={styles.textdec}>10,000 to 1 Lakh</Text>
        </View>
        <View style={styles.points}>
          <Text style={styles.t}>365 points</Text>

        </View>

      </View>
      </TouchableOpacity>
      <TouchableOpacity >
      <View style={styles.pointbox}>
        <View style={styles.gift}>
          <Feather name="gift" size={52} color="#690c23" />
        </View>
        <View>
          <Text style={styles.textdec} >10,000 to 1 Lakh</Text>
        </View>
        <View style={styles.points}>
          <Text style={styles.t}>365 points</Text>

        </View>

      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.pointbox}>
        <View style={styles.gift}>
          <Feather name="gift" size={52} color="#690c23" />
        </View>
        <View>
          <Text style={styles.textdec}>10,000 to 1 Lakh</Text>
        </View>
        <View style={styles.points}>
          <Text style={styles.t}>365 points</Text>

        </View>

      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.pointbox}>
        <View style={styles.gift}>
          <Feather name="gift" size={52} color="#690c23" />
        </View>
        <View>
          <Text style={styles.textdec} >10,000 to 1 Lakh</Text>
        </View>
        <View style={styles.points}>
          <Text style={styles.t} >365 points</Text>

        </View>

      </View>
      </TouchableOpacity>*/}
    </View>



  )
}

export default Gift

const styles = StyleSheet.create({
  gift: {
    paddingLeft: 4

  },
  points: {

    height: 90,
    width: 90,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',



  },
  pointbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eeee',
    borderRadius: 20,
    margin: 3,


  },
  overdesign: {
    backgroundColor: '#ffff',
    padding: 5
  },
  textdec: {
    color: '#690c23',
    fontFamily: 'roboto',
    fontSize: 18,
    font: 'bold',
    left: 10,

  },
  t: {
    color: '#690c23',
    fontFamily: 'roboto',
    fontSize: 15,
    font: 'bold',

  }
})