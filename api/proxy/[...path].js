export default async function handler(req, res) {
  const { path = [] } = req.query;
  const targetURL = `${process.env.VITE_BACKEND_URL}/${path.join('/')}`;

  try {
    const response = await fetch(targetURL, {
      method: req.method,
      headers: {
        ...req.headers,
        host: new URL(process.env.VITE_BACKEND_URL).host,
      },
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    });

    const contentType = response.headers.get('content-type');
    res.setHeader('content-type', contentType || 'text/plain');
    const body = await response.arrayBuffer();
    res.status(response.status).send(Buffer.from(body));
  } catch (err) {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
}
