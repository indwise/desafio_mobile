import { StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  // Listar.js
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
    opacity: 1,
    padding: hp('2%'),
    margin: hp('2%'),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    },
  adicionarImage: {
    width: wp('17%'),
    height: hp('8.5%'),
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  alterarTouch: {
    marginRight: wp('3%'),
  },
  adicionarTouch: {
    padding: hp('3%'),
  },
  adicionarView: {
    alignItems: 'center',
  },
  adicionarViewWoData: {
    alignItems: 'center',
    alignItems: 'center',
    flex: 1,
  },
  indListItem: {
    flexDirection: 'row',
    height: hp('3%')
  },
  labelTitle: {
    fontWeight: 'bold',
  },
  insideText: {
    marginRight: hp('2%')
  },
  expListItem: {
    alignItems: 'center',
    marginTop: hp('1%')
  },
  expHighlight: {
    borderRadius: 10,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#fff',
    width: wp('65%'),
    height: hp('4%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  expText: {
    color:'#fff',
  },

  // expComment.js
  alterarImage: {
    width: wp('8%'),
    height: hp('4%'),
    marginBottom: hp('3%'),
    marginLeft: wp('3%')
  },
  deletarImage: {
    width: wp('6.3%'),
    height: hp('5%'),
    marginBottom: hp('3%'),
    marginRight: wp('3%')
  },
  textExpComment: {
    fontSize: hp('3%'), 
    fontWeight: 'bold',
    marginTop: hp('4%'),
    borderWidth: 1,
    padding: hp('1%'),
    borderRadius: 20,
    color: '#ffa500',
    borderColor: '#ffa500'
  },
  viewTextExpComment: {
    flex: 1,  
    alignItems: 'center',
    width: wp('60%'),
  },
  tagNameTxt: {
    textAlign: 'center'
  },
  commentTxt: {
    textAlign: 'center'
  },

  // addComment.js
  tagNameTI: {
    width: wp('60%'),
    textAlign: 'center',
    borderBottomWidth: 1
  },
  commentTI: {
    width: wp('60%'),
    textAlign: 'center',
    borderBottomWidth: 1
  },
  buttonSalvar: {
    backgroundColor: '#ffa500',
    alignItems: 'center',
    justifyContent:'center',
    width: wp('100%'),
    height: hp('7%')
  },
  buttonText: {
    color: '#FFF',
    fontSize: hp('3%')
  },
});


export default styles;