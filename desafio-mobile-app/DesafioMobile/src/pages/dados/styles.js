
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
    marginTop: hp('10%'),
    marginBottom: hp('11%')
  },
  viewFlatList: {
    borderTopWidth: 1,
    borderTopColor: '#ffa500',
    borderBottomWidth: 1,
    borderBottomColor: '#ffa500',
    padding: wp('5%'),
    width: wp('80%')
  },
  listText: {
    fontSize: hp('2.3%')
  },
  requestText: {
    color: '#989e99',
    fontSize: hp('2.5%')
  }
})

export default styles;