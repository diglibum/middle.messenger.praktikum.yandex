import { HTTPTransport as HTTP } from "../../modules/HTTPtransport";
import { BaseAPI } from "../BaseApi";
import { UserProfileRequest } from "../types";

const APIInstance = new HTTP("https://ya-praktikum.tech/api/v2/user");

export class UserProfileApi extends BaseAPI {
  public update (user: UserProfileRequest) {
    return APIInstance.put(APIInstance.url + "/profile",
      {
        headers: {
          "content-type": "application/json; charset=utf-8"
        },
        data: JSON.stringify(user)
      });
  }
}
