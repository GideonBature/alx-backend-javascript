import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      // eslint-disable-next-line no-unused-vars
      const { status, body } = photo;
      const { firstName, lastName } = user;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => { console.log('Signup system offline'); });
}
