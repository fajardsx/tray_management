
export const ENUM_TYPE_QRCODE={
  porsioningview:"porsioningview"
}

class Constants {
  static COPYRIGHT = 'Copyright © EDPMP 2019';
  static NAME_APPS = 'EDPMP';
  //VERSION
  static APP_VERSION = '1';
  static APP_VERSION_DISPLAY = '1.0';
  static APP_STATUS = '';
  static SERVER_APP_VERSION = '0.0.1';
  static FORCE_UPDATE = 'no';
  //API METHOD
  static P = 'post';
  static G = 'get';
  static PU = 'puts';

  //LOCALE
  static ID = 'id-IN';
  static ENG = 'en-US';
  static LOCALE = this.ID;
  //Header
  static HEADER_1 = {
    'X-Requested-With': 'XMLHttpRequest',
  };
  //Rest
  static SERVER_ID = 1; //DEBUG USE 0
  static HEADER_GET = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    'Cache-Control': 'no-cache',
  };
  static HEADER_POST = {
    Accept: 'application/javascript',
    'Content-Type': 'multipart/form-data',
  };
  //REST URL
  static REST = 'https://';
  //REST TIMEOUT
  static TIME_OUT = 20000;
  //COMMAD
  static COMMAND_CARI = 1;
  static COMMAND_TAMBAH = 2;
  static COMMAND_LOKASI = 3;
  //DEBUG
  static DEV_MODE = false;
}

export default Constants;
