import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ])
    .then((responses) => {
      responses.map((response) => ({
        status: response.status,
        value:
          response.status === 'fulfilled'
            ? response.status
            : String(response.reason),
      }));
    })
    .catch(() => {
      console.error(Error());
    });
}
