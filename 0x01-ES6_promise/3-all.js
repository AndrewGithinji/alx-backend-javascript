import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userPromise = createUser();
  const profilePromise = uploadPhoto();

  return Promise.all([userPromise, profilePromise])
    .then((response) => {
      console.log(`${response[1].body} ${response[0].firstName} ${response[0].lastName},`);
    })
    .catch((error) => {
      console.error(error);
      throw new Error('Signup system offline');
    });
}
