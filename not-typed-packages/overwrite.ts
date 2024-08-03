/**
 * if you want to overwrite the type of a package,
 * you can do the following:
 */

import "axios";

declare module "axios" {
  interface AxiosResponse {
    fakeData: any;
  }
}
