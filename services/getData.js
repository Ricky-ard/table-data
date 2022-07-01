import * as api from "../config/api.js";

export function get(params) {
  return api.get(
    "https://61ce6ff47067f600179c5e98.mockapi.io/v1/orders",
    params,
    null
  );
}
