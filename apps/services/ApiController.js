import React, { Component } from "react";
import callAPI from "./api";
import Constant from "../config/constant";
import { RESTKEY } from "../config/key";
import { showToast } from "../config/utils";
import { Colors } from "../styles/colors";
//

//
export async function OnLoginPost(post=null) {
  try {
    let result = await callAPI(Constant.P, RESTKEY.API.login,post);
    console.log("OnLoginPost => result  ", result);
    if (result != null && result.code == 200) {
        return result;
    } else {
      showToast("Gagal Login ")
      return null;
    }
  } catch (error) {
    console.log("OnLoginPost => error  ", error);
    return null;
  }
}
//
