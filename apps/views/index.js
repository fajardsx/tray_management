import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
//REDUX
import {connect} from 'react-redux';
import ACTION_TYPE from '../redux/actions/actions';

//import MapsComponent from '../components/Maps';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import KEY_ROUTE from './../route/keyroute';

class InitScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      permissiongrand: false,
    };
  }
  componentDidMount() {
    //this.onCheckPermission();
    this.setState({permissiongrand: true});
    console.log('token ', this.props.token);

    if (this.props.token) {
      this.props.navigation.navigate(KEY_ROUTE.INAPP_SCENE);
    } else {
      this.props.navigation.navigate(KEY_ROUTE.TITLE_SCENE);
    }
  }
  //RENDER
  render() {
    const {permissiongrand} = this.state;
    return (
      <View style={styles.container}>
        <Text>InitScreen</Text>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    token: state.token,
  };
}
export default connect(mapStateToProps)(InitScreen);
