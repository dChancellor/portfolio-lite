async function requestSurpriseRepo() {
  return fetch(
    'https://api.github.com/search/repositories?q=surprise%20in:topics%20user:dChancellor',
    {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    }
  );
}

export default requestSurpriseRepo;
