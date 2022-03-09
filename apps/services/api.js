import axios from "axios";
import { Platform, Alert } from "react-native";
import callAPIUntrust from "./callApiUntrust";
import Constant from "../config/constant";
import { RESTKEY, ROUTE_NAME } from "../config/key";

const baseUrl = RESTKEY.BASE_URL;

export const callAPI = async (method, uri, params, additionalHeader) => {
  const disableSSL = false;
  const envApi = baseUrl || "";

  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  };
  const url = uri.includes(envApi) ? uri : `${envApi}${uri}`;
  console.log("AXIOS ", url);

  const headers = { ...defaultHeaders, ...additionalHeader };

  const dataOrParams = ["GET", "DELETE"].includes(method.toUpperCase()) ? "params" : "data";
  const defaultConfig = { method, headers, url };
  const config = {
    ...defaultConfig,
    [dataOrParams]: params,
    withCredentials: true,
    transitional:{
      silentJSONParsing: false, // default value for the current Axios version

      // try to parse the response string as JSON even if `responseType` is not 'json'
      forcedJSONParsing: false,
      
      // throw ETIMEDOUT error instead of generic ECONNABORTED on request timeouts
      clarifyTimeoutError: false,
    }
  };
  //disableSSL?await callAPIUntrust(method,uri,params,additionalHeader):
  const source = axios.CancelToken.source();
  const timeout = setTimeout(() => {
    source.cancel(`Timeout of ${Constant.TIME_OUT}ms.`);
  }, Constant.TIME_OUT);
  try {
    axios.defaults.timeout = 10000;
    const response = await axios(config);
    console.log("Axios result ", response);
    clearTimeout(timeout);
    return response.data;
  } catch (error) {
    // Expired Token
    console.log("Axios error " + uri, error);
    console.log("Axios error " + uri, error.response.data);
    if (error.response.status && error.response.status === 401) {
      //showToast("Token expired please login again", colors.TOAST_DANGER);
      return null;
    }

    if (error.response && error.response.data) {
      //showToast(error.toString(), colors.TOAST_DANGER);
      throw error.response.data;
    }
    // tslint:disable-next-line: no-console
    //showToast(error.toString(), colors.TOAST_DANGER);

    //console.error('error not defined', error)

    return null;
  }
};

export default callAPI;
//
export const callAPIURL = async (method, uri, params, additionalHeader) => {
  const disableSSL = false;
  const envApi = baseUrl || "";

  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = uri;
  console.log("AXIOS ", url);

  const headers = { ...defaultHeaders, ...additionalHeader };

  const dataOrParams = ["GET", "DELETE"].includes(method.toUpperCase()) ? "params" : "data";
  const defaultConfig = { method, headers, url };
  const config = {
    ...defaultConfig,
    [dataOrParams]: params,
    withCredentials: true,
  };
  //disableSSL?await callAPIUntrust(method,uri,params,additionalHeader):
  const source = axios.CancelToken.source();
  const timeout = setTimeout(() => {
    source.cancel(`Timeout of ${Constant.TIME_OUT}ms.`);
  }, Constant.TIME_OUT);
  try {
    axios.defaults.timeout = 10000;
    const response = await axios(config);
    //console.log("Axios result ", response);
    clearTimeout(timeout);
    return response.data;
  } catch (error) {
    // Expired Token
    console.log("Axios error " + uri, error);
    if (error.response.status && error.response.status === 401) {
      //showToast("Token expired please login again", colors.TOAST_DANGER);
      return null;
    }

    if (error.response && error.response.data) {
      //showToast(error.toString(), colors.TOAST_DANGER);
      throw error.response.data;
    }
    // tslint:disable-next-line: no-console
    //showToast(error.toString(), colors.TOAST_DANGER);

    //console.error('error not defined', error)

    return null;
  }
};
