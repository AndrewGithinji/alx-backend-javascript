import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const profile = uploadPhoto();
  const promise = Promise.all([user, profile]);
  promise
    .then((response) => {
      console.log(
        `${response[1].body} ${response[0].firstName} ${response[0].lastName},`,
      );
    })
    .catch(() => console.log(Error('Signup system offline')));
}
