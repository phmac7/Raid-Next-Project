export const getPosts = async () => {
  await fetch('/api/post', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  return;
};

export const createPost = async (message) => {
  console.log('===== MESSAGE CREATEPOST ======', message);
  await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({
      message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
};
