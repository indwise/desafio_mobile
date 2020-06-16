
import { StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerRequisitar: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonRequisitar: {
    backgroundColor: '#ffa500',
    alignItems: 'center',
    justifyContent:'center',
    width: wp('100%'),
    height: hp('10%')
  },
  buttonText: {
    color: '#FFF',
    fontSize: hp('3%')
  },
  containerFetch: {
    marginTop: hp('1%'),
    marginBottom: hp('11%')
  },
  viewFlatList: {
    borderWidth: 1,
    borderColor: '#ffa500',
    padding: wp('2%'),
    width: wp('80%'),
    margin: hp('1%'),
    backgroundColor: '#ffa500',
    borderRadius: 10,
    alignItems: 'center'
  },
  listText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#FFF'
  },
  requestText: {
    color: '#989e99',
    fontSize: hp('2.5%')
  }
})

export default styles;