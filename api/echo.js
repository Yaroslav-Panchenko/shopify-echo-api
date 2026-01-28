export default async function handler(req, res) {
  // 1. Встановлюємо заголовки CORS для ВСІХ відповідей
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 2. Обробка OPTIONS запиту (Preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 3. Логіка для POST запиту
  if (req.method === 'POST') {
    return res.status(200).json(req.body);
  }

  // Для всього іншого
  return res.status(200).json({
    message: "Бекенд працює, чекаю на POST запит",
  });
}
