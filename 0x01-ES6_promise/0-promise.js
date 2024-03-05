export default function getResponseFromAPI() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const uploadPhoto = { status: 200, body: 'photo-profile-1' };
      resolve(uploadPhoto);
    }, 2000);
  });
}
