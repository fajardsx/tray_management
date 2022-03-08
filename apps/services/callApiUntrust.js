import Config from "react-native-config";
import RNFetchBlob from "rn-fetch-blob";

const baseUrl = Config.API_URL;

export const callAPIUntrust = async (method, api, params, additionalHeader) => {
  const envApi = baseUrl || "";

  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  };
  var url = `${envApi}/${api}`;
  //console.log('AXIOS ', url)

  const headers = { ...defaultHeaders, ...additionalHeader };
  const dataOrParams = ["GET", "DELETE"].includes(method.toUpperCase()) ? "params" : "data";
  var body = null;
  console.log(dataOrParams);
  if (dataOrParams == "params") {
    url = addParameterToURL(url, params);
  } else if (dataOrParams == "data") {
    body = JSON.stringify(params);
  } else {
    body = params;
  }
  console.log("callAPIUntrust ", url);
  console.log("callAPIUntrust body", body);
  try {
    const response = await RNFetchBlob.config({
      trusty: true,
    }).fetch(method, url, headers, body);
    return { data: response.json() };
  } catch (error) {
    // Expired Token
    // if (error.response.status === 401) {
    //   return doRefreshToken({ method, uri, params, additionalHeader });
    // }
    console.log("RNFetchBlob error ", error);

    return null;
  }
};
const addParameterToURL = (url, params = {}) => {
  return `${url}?${Object.entries(params)
    .map((x) => `${x[0]}=${encodeURIComponent(x[1])}`)
    .join("&")}`;
};
export default callAPIUntrust;
