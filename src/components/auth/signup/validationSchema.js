import * as yup from "yup";

export const singupValidationSchema = yup.object({
  userType: yup.string().required(),
  email: yup.string().email().required(),
  userName: yup.string().required(),
  mobileNumber: yup.string().required().max(10),
  password: yup.string().required(),
  confirmPassowrd: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
