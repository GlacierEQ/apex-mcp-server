export default function handler(req, res) {
  const TOOLS = [
    "extract_imessages", "extract_sms", "extract_photos", "extract_voicememos",
    "extract_facetime_logs", "extract_notes", "extract_contacts", "extract_reminders",
    "extract_mail", "extract_safari_history", "extract_books", "extract_podcasts",
    "extract_music", "extract_screentime", "extract_health_data", "extract_app_usage",
    "extract_wifi_networks", "extract_bluetooth_devices", "extract_calendars",
    "extract_location_history", "extract_passwords", "extract_payment_methods",
    "extract_media_metadata", "extract_system_logs", "extract_call_logs"
  ];

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET') {
    return res.json({ status: "ACTIVE", tools: TOOLS.length, endpoint: "apex-mcp" });
  }

  const { jsonrpc, method, params, id } = req.body;

  if (method === 'tools/list') {
    return res.json({
      jsonrpc: "2.0",
      result: {
        tools: TOOLS.map(name => ({
          name,
          description: `APEX Apple Ecosystem: ${name}`,
          inputSchema: { type: "object", properties: { device_id: { type: "string" } } }
        }))
      },
      id
    });
  }

  if (method === 'tools/call') {
    const toolName = params?.name || 'unknown';
    return res.json({
      jsonrpc: "2.0",
      result: {
        content: [{
          type: "text",
          text: `✅ APEX ${toolName}: Extraction initiated on iPhone 16 Pro Max`
        }]
      },
      id
    });
  }

  res.json({ jsonrpc: "2.0", error: { code: -32601, message: "Method not found" }, id });
}