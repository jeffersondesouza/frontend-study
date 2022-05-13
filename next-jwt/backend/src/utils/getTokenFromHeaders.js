export function getTokenFromHeaders(req) {
  const authHeader = req.headers['x-authorization'] || req.headers['authorization'] || '';
  console.log('headers::', req.headers)
  const token = authHeader?.split(' ')[authHeader?.split(' ').length - 1];
  return token;
}
