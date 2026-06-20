module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { systemPrompt } = req.body || {};
  if (!systemPrompt) {
    res.status(400).json({ error: 'Missing systemPrompt' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'No API key configured on server' });
    return;
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: systemPrompt }] }] })
      }
    );

    if (!geminiRes.ok) {
      res.status(502).json({ error: 'Gemini request failed' });
      return;
    }

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      res.status(502).json({ error: 'No text in Gemini response' });
      return;
    }

    res.status(200).json({ text: text.trim() });
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
};
