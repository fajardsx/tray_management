import React, {Component} from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {styles, colors} from '../../styles';
import Constants from '../../config/constant';
import Forminput from '../../components/Forminput';
import {convertWidth, loadingScreen, showToast} from './../../config/utils';
import {moderateScale} from '../../styles/scaling';
import Buttons from '../../components/Buttons';
import KEY_ROUTE from './../../route/keyroute';
import { RESTKEY } from '../../config/key';
import { OnLoginPost } from '../../services/ApiController';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernametxt: '',
      passtxt: '',
      isloading:false
    };
  }
  componentDidMount(){
    console.log("API ",RESTKEY.BASE_URL)
  }
  //EVENT
  onChangeUserNameInput = text => {
    this.setState({usernametxt: text});
  };
  onChangePasswordInput = text => {
    this.setState({passtxt: text});
  };
  onSuccessLogin(){
    this.props.navigation.navigate(KEY_ROUTE.INAPP_SCENE);
  }
  //API
  async onTryLogin() {
    try {
      var body = new FormData();
      body.append("email",this.state.usernametxt);
      body.append("password",this.state.passtxt);
      this.setState({isloading:true})
      const result =  await OnLoginPost(body);
      console.log("loginscreen => onTryLogin => result ",result)
      this.setState({isloading:false})
    } catch (error) {
      showToast(err.toString());
    }
  
    
  }
  //RENDER
  render() {
    const {usernametxt, passtxt} = this.state;
    return (
      <View style={styles.containerDimension}>
        <SafeAreaView
          style={[
            styles.container,
            {backgroundColor: colors.main.COLOR_PRIMARY_2},
          ]}>
          <KeyboardAvoidingView
            behavior={'position'}
            style={{alignItems: 'center'}}>
            <View
              style={[
                styles.centercontainer,
                {paddingVertical: moderateScale(100)},
              ]}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: moderateScale(25),
                  color: colors.textcolor.COLOR_TEXT_1,
                }}>
                {Constants.NAME_APPS}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: moderateScale(25),
                  color: colors.textcolor.COLOR_TEXT_1,
                }}>
                {'TRAY MANAGEMENT'}
              </Text>
            </View>

            <Forminput
              stylecontainer={{flex: 0, width: convertWidth(80), margin: 10}}
              defaultText={usernametxt}
              onChangeText={this.onChangeUserNameInput}
              labelStyle={{
                color: colors.textcolor.COLOR_TEXT_1,
                fontSize: moderateScale(17),
              }}
              styleinput={{
                borderBottomWidth: 1,
                color: colors.textcolor.COLOR_TEXT_1,
                fontSize: moderateScale(15),
              }}
              title={'Username'}
            />
            <Forminput
              securetxt={true}
              stylecontainer={{flex: 0, width: convertWidth(80), margin: 10}}
              defaultText={passtxt}
              onChangeText={this.onChangePasswordInput}
              labelStyle={{
                color: colors.textcolor.COLOR_TEXT_1,
                fontSize: moderateScale(17),
              }}
              styleinput={{
                borderBottomWidth: 1,
                color: colors.textcolor.COLOR_TEXT_1,
                fontSize: moderateScale(15),
              }}
              title={'Password'}
            />
          </KeyboardAvoidingView>
          <View style={{marginTop: '10%', alignItems: 'center'}}>
            <Buttons
              style={{
                width: convertWidth(80),
                backgroundColor: colors.main.COLOR_PRIMARY_6,
              }}
              onPressButton={this.onTryLogin.bind(this)}>
              <Text
                style={{
                  fontSize: moderateScale(18),
                  color: colors.textcolor.COLOR_TEXT_1,
                }}>
                Submit
              </Text>
            </Buttons>
          </View>
        </SafeAreaView>
        {
          this.state.isloading &&
          loadingScreen()
        }
      </View>
    );
  }
}

export default LoginScreen;
