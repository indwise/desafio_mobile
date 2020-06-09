import { StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: "cover"
  },
  requestText: {
    color: '#989e99',
    fontSize: hp('2.5%')
  },
  listItem: {
    width: wp('75%'),
    height: hp('15%'),
    backgroundColor: '#ebebeb',
    opacity: 0.7,
    padding: hp('2%'),
    margin: hp('2%'),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    },
  alterarImage: {
    width: wp('6%'),
    height: hp('3%')
  },
  deletarImage: {
    width: wp('4%'),
    height: hp('3%')
  },
  adicionarImage: {
    width: wp('17%'),
    height: hp('8.5%')
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  alterarTouch: {
    marginRight: wp('3%'),
  },
  list: {
    marginTop: hp('3%')
  },
  adicionarTouch: {
    padding: hp('3%'),
  },
  adicionarView: {
    alignItems: 'center',
  },
  indListItem: {
    flexDirection: 'row',
  },
  labelTitle: {
    fontWeight: 'bold'
  },
  insideText: {
    marginRight: hp('2%')
  },
  expListItem: {
    alignItems: 'center',
    marginTop: hp('1%'),

  }
});


export default styles;