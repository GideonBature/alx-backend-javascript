import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map((result) => {
      const res = [];
      if (result.status === 'fulfilled') {
        res.push({ status: result.status, value: result.value });
      } else {
        res.push({ status: result.status, value: result.reason.toString() });
      }
      return res;
    }));
}
