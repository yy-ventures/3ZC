const api_post = async (url, body, token) => {
  try {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
      },
      body: JSON.stringify(body),
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
