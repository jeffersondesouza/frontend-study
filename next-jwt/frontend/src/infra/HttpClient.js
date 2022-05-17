export async function HttpClient(url, options) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
    body: options.body ? JSON.stringify(options.body) : null,
  })
    .then(async (res) => {
      return {
        ok: res.ok,
        body: await res.json(),
        status: res.status,
        statusText: res.statusText,
      };
    })
    .then(async (res) => {
      if (res.status !== 401 || !res.refresh) {
        return res;
      }

      const refreshResponse = await HttpClient(
        "http://localhost:3000/api/refresh",
        {
          method: "GET",
        }
      );

      if (refreshResponse.status !== 200) {
        throw new Error("tNot Auth");
      }

      const newAccessToken = refreshResponse.body.data.access_token;

      tokenService.save(newAccessToken);

      const retryResponse = await HttpClient(fetchUrl, {
        ...options,
        refresh: false,
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });

      return retryResponse;
    });
}
