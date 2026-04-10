const PIXEL_ID = "3814248415544183";
const CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { eventName, eventId, sourceUrl, fbp, fbc, value, num_items, content_name } = req.body;

  if (!eventName) {
    return res.status(400).json({ error: "eventName is required" });
  }

  const forwarded = req.headers["x-forwarded-for"];
  const clientIp = typeof forwarded === "string"
    ? forwarded.split(",")[0].trim()
    : req.socket?.remoteAddress || "";
  const userAgent = req.headers["user-agent"] || "";

  const userData = { client_ip_address: clientIp, client_user_agent: userAgent };
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    event_source_url: sourceUrl || "https://aurora-skin-tone--aurorapinkclare.replit.app",
    user_data: userData,
  };

  if (eventId) event.event_id = eventId;

  if (eventName === "ViewContent") {
    event.custom_data = {
      content_name: "Aurora Pink",
      content_category: "Skin Care",
      content_ids: ["aurora-pink"],
      content_type: "product",
      currency: "BRL",
      value: 187.00,
    };
  }

  if (eventName === "InitiateCheckout") {
    event.custom_data = {
      content_name: content_name || "Aurora Pink",
      currency: "BRL",
      value: value || 187.00,
      num_items: num_items || 1,
    };
  }

  const payload = { data: [event] };

  try {
    const response = await fetch(`${CAPI_URL}?access_token=${process.env.META_CAPI_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    return res.status(200).json({ ok: true, result });
  } catch (err) {
    console.error("[CAPI Vercel] Error:", err);
    return res.status(500).json({ error: "CAPI request failed" });
  }
}
