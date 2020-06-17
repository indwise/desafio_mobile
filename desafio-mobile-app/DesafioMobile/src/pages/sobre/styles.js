import { StyleSheet, Dimensions } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  // Listar.js
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
    backgroundColor: '#FFF',
    opacity: 1,
    padding: hp('2%'),
    margin: hp('2%'),
    borderWidth: 3,
    borderColor: '#ffa500'
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
    color: '#000000'
  },
  insideText: {
    marginRight: hp('2%'),
    color: '#000000'
  },
  expListItem: {
    alignItems: 'center',
    marginTop: hp('1%')
  },
  expHighlight: {
    borderRadius: 10,
    backgroundColor: '#ffa500',
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

  alterarImage: {
    width: wp('8%'),
    height: hp('4%'),
    marginBottom: hp('3%'),
  },
  deletarImage: {
    width: wp('6.3%'),
    height: hp('5%'),
    marginBottom: hp('3%'),
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
    textAlign: 'center',
    fontSize: hp('3%')
  },
  commentTxt: {
    textAlign: 'center',
    fontSize: hp('2.5%')
  },
  commentView: {
    flex: 1,
    marginTop: hp('4%'),
    alignItems: 'center',
  },
  deleteUpdateView: {
    height: hp('7.5%'),
    flexDirection: 'row'
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
    height: hp('7.5%')
  },
  buttonText: {
    color: '#FFF',
    fontSize: hp('3%')
  },

  // Modal
  modal: {
    width: wp('60%'),
    height: hp('60%')
  },
  modalView: {
    borderRadius: 10,
    backgroundColor: "white",
    width: wp('65%'),
    height: hp('60%'),
    alignSelf: 'center',
    alignItems: 'center',
    padding: wp('5%')
  },
  modalText: {
    fontSize: hp('2%'),
    color: '#ffa500',
    borderWidth: 1,
    borderColor: '#ffa500',
    borderRadius: 10,
    padding: wp('2%'),
    fontWeight: 'bold'
  },
  viewTI: {
    padding: wp('3%')
  },  
  modalTI: {
    textAlign: 'center',
    borderBottomWidth: 1,
    width: wp('50%')
  },
  viewIcons: {
    flex: 1,
    flexDirection: 'row'
  },
  updateIconView: {
    flex: 1, 
    justifyContent: 'flex-end'
  },
  buttonCancelView: {
    flex: 1, 
    justifyContent: 'flex-end',
    marginBottom: hp('3%'),
  },
  deleteIconView: {
    flex: 1, 
    alignItems: 'flex-end', 
    justifyContent: 'flex-end'
  },
  saveButtonView: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
    padding: ('5%'),
    margin: wp('2%'),
  }
});


export default styles;