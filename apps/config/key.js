import Config from "react-native-config";


// NAME REST API
export class RESTKEY {
  static ENVI = "versioning";
  static BASE_URL = Config.API_URL;
  static API = {
    login: "api/login",
    posting: "api/posting",
    branches: "api/branches",
    getschedulebyqrcode: "api/schedule_menu_by_barcode?schedule_id=",//76687",
    getporsining:"api/schedule_menu_by_barcode?schedule_id=",//76687",
    postsaveporsining:"api/porsioning_save?schedule_id",//76687&user_id=599&troleys_racks_id=10&menus=[{"resep_id":850,"status":1},{"resep_id":4148,"status":1},{"resep_id":2686,"status":1},{"resep_id":171,"status":1},{"resep_id":99,"status":1}]&cuteleries=[{"cuteleries_id":1,"qty":1},{"cuteleries_id":2,"qty":1},{"cuteleries_id":3,"qty":1}]
  };
}
