import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  try {
    const myUser = await createUser();
    const myphoto = await uploadPhoto();
    result = {
      photo: myphoto,
      user: myUser,
    };
  } catch (error) {
    result = {
      photo: null,
      user: null,
    };
  }
  return result;
}
