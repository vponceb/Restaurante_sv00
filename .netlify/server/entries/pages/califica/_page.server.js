import { r as redirect } from "../../../chunks/index.js";
const load = ({ cookies }) => {
  if (cookies.get("Respondida")) {
    throw redirect(307, "./agradecimiento");
  }
};
export {
  load
};
