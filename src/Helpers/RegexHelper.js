export const isEmail = (string) => {
  // Adding email logic
  // eslint-disable-next-line no-useless-escape
  const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailValidator.test(string);
};
// export const isPassword = (string) => {
//     // Adding password logic
//     // const passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     // return passwordValidator.test(string);
// }
