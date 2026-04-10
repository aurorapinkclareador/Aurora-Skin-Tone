import type { Express, Request } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const PIXEL_ID = "3814248415544183";
const CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

function getClientIp(req: Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.socket.remoteAddress || "";
}

async function sendCapiEvent(payload: object) {
  try {
    const res = await fetch(`${CAPI_URL}?access_token=${process.env.META_CAPI_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("[CAPI] Error:", err);
    return null;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Meta Conversions API endpoint
  app.post("/api/capi", async (req, res) => {
    const { eventName, eventId, sourceUrl, fbp, fbc } = req.body;

    if (!eventName) {
      return res.status(400).json({ error: "eventName is required" });
    }

    const clientIp = getClientIp(req);
    const userAgent = req.headers["user-agent"] || "";

    const userData: Record<string, string> = {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
    };
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    const event: Record<string, unknown> = {
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
      const { value, num_items, content_name } = req.body;
      event.custom_data = {
        content_name: content_name || "Aurora Pink",
        currency: "BRL",
        value: value || 187.00,
        num_items: num_items || 1,
      };
    }

    const payload = {
      data: [event],
      test_event_code: process.env.META_CAPI_TEST_CODE || undefined,
    };

    const result = await sendCapiEvent(payload);
    res.json({ ok: true, result });
  });

  return httpServer;
}
