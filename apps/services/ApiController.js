import React, { Component } from "react";
import callAPI from "./api";
import callAPIUntrust from "./callApiUntrust";
import Constant from "../config/constant";
import { RESTKEY } from "../config/key";
import { showToast } from "../config/utils";
import { Colors } from "../styles/colors";
//
const baseUrl = RESTKEY.BASE_URL;
//
export async function OnLoginPost(post=null) {
  try {
    const additionalHeaders = {
      Accept: "application/json",
      "cache-control": "no-cache",
      "Content-Type": "multipart/form-data",
    };
    console.log("OnLoginPost => post  ", post);
    const uri = RESTKEY.API.login;
    const envApi = baseUrl || "";
    const url = uri.includes(envApi) ? uri : `${envApi}${uri}`;
    let result = await fetch(url,{
      method:Constant.P,
      headers:additionalHeaders,
      body:post
    })
    result = result.json();
    if(result){
      return result;
    }else{
      return null;
    }
  } catch (error) {
    if (error.response.status && error.response.status === 401) {
      return null;
    }
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    console.error('error not defined', error)
    return null;
  }
}
//
