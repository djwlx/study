// 允许cors跨域；
ctx.set('Access-Control-Allow-O rigin', 'http://localhost:3000');
// 允许前端设置的头部信息；(请求头)
ctx.set(
  'Access-Control-Allow-Headers',
  'Content-Type, Content-Length, Authorization,test'
);
// 允许前端获取的头部信息；(响应头)
ctx.set('Access-Control-Expose-Headers', 'Content-Type, Content-Length,Date');
// 允许前端请求的方法；
ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,HEAD,OPTIONS');
// 允许携带凭证：cookie
ctx.set('Access-Control-Allow-Credentials', true);
// 设置预检请求的缓存时间
ctx.set('Access-Control-Max-Age', 3600 * 24);
