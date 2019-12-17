import {moderateScale} from './scaling';
import {convertHeight, convertWidth} from '../config/utils';

export default {
  container: {
    flex: 1,
  },
  containerDimension: {
    width: convertWidth(100),
    height: convertHeight(100),
  },
  centercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(65),
    width: convertWidth(100),
  },
  profilsize: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  cellprofilsize: {
    width: moderateScale(35),
    height: moderateScale(35),
  },
  cellPhotosize: {
    width: moderateScale(45),
    height: moderateScale(45),
  },
  logoPhotosize: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  tabicon: {width: moderateScale(25), height: moderateScale(25)},
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
};
