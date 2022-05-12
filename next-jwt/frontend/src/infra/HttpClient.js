export async function HttpClient(url, options) {
  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
    body: options.body ? JSON.stringify(options.body) : null,
  }).then(async (res) => {
    return {
      ok: res.ok,
      body: await res.json(),
      status: res.status,
      statusText: res.statusText,
    };
  });
}
