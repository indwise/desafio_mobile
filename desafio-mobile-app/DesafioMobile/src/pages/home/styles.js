
import { StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  containerPresentation: {
    height: wp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  logoIcon: {
    width: wp('42.5%'),
    height: hp('23.2%'),
    marginBottom: hp('10%')
  },
  containerButton: {
    marginTop: wp('20%'),
    height: wp('40%'),
    alignContent: 'flex-start',
  },
  containerInsideTouch: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  dataIcon: {
    width: wp('7.3%'),
    height: hp('4.29%'),
    marginLeft: wp('2%')
  },
  aboutIcon: {
    width: wp('7.9%'),
    height: hp('4.29%'),
    marginLeft: wp('1.7%'),
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    marginLeft: wp('4%'),
    width: wp('70%'),
    height: hp('10%'),
    borderTopWidth: 1,
    borderTopColor: '#FFF',

  },
  touchAbout: {
    marginTop: hp('5%')
  },
  buttonText: {
    color: '#FFF',
    width: wp('55%'),
    paddingLeft: wp('3%'),
    fontSize: hp('3%')
  },
  arrowIcon: {
    width: wp('7.3%'),
    height: hp('4.29%'),
    
  }
});

export default styles;