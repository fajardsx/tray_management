import React, { Component } from "react";
import { Text, View, StatusBar, RefreshControl } from "react-native";
import { AppStyle } from "../styles/styles";
import colors from "../styles/colors";
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Container = (props) => (
  <View style={[AppStyle.container, props.style]}>
    {/* <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={AppStyle.container}>
      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
    </KeyboardAvoidingView> */}
    {props.disableKeyboardAware == true && (
      <View style={[AppStyle.container, props.style]}>{props.children}</View>
    )}
    {!props.disableKeyboardAware && (
      <KeyboardAwareScrollView
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing ? props.refreshing : false}
            onRefresh={props.onRefresh ? props.onRefresh : null}
          />
        }
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
        nestedScrollEnabled
        style={[AppStyle.container, props.style]}>
        {props.children}
      </KeyboardAwareScrollView>
    )}

    <StatusBar
      hidden={props.statusbarHidden ? props.statusbarHidden : false}
      backgroundColor={colors.COLOR_STATUSBAR}
      barStyle={"light-content"}
    />
  </View>
);

export const ModalScreen = (props) => (
  <Modal
    style={[props.style]}
    isVisible={props.isVisible}
    avoidKeyboard
    onBackButtonPress={() => props.onClose()}>
    {props.children}
  </Modal>
);
