import { HTTPTransport as HTTP } from "../HTTPtransport";
import { BaseAPI } from "../baseApi";
import { SignUpRequest } from "../types";

const signUpAPIInstance = new HTTP("https://ya-praktikum.tech/api/v2/auth");

export class SignUpApi extends BaseAPI {
  public signUp(user: SignUpRequest) {
    return signUpAPIInstance.post(signUpAPIInstance.url + "/signup", {
      data: user,
    });
  }
}
