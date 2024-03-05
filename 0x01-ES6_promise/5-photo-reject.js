export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    const error = new Error(`${filename} cannot be processed`);
    reject(error);
  });
}
