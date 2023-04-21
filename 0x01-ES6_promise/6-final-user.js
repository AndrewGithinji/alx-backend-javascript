import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((results) => {
    const response = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        response.push({ status: 'fulfilled', value: result.value });
      } else {
        response.push({ status: 'rejected', reason: result.reason });
      }
    });
    return response;
  });
}
