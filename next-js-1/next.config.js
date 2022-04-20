module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/perguntas",
        destination: "/faq",
        permanent: true,
      },
    ];
  },
};
