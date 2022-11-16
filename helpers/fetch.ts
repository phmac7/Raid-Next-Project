export const getPosts = async () => {
  await fetch('/api/post', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  return;
};

export const createPost = async (
  game: string,
  message: string,
  file: string
) => {
  console.log('===== FILE CREATEPOST ======', file);
  await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({
      game,
      message,
      file,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
};
