import * as yup from 'yup';

export const responseValidationSchema = yup.object().shape({
  answer: yup.string().required(),
  user_id: yup.string().nullable(),
  poll_id: yup.string().nullable(),
});
