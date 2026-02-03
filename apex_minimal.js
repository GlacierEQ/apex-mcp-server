import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const TOOLS = ["extract_imessages","extract_sms","extract_photos","extract_voicememos","extract_facetime_logs","extract_notes","extract_contacts","extract_reminders","extract_mail","extract_safari_history","extract_books","extract_podcasts","extract_music","extract_screentime","extract_health_data","extract_app_usage","extract_wifi_networks","extract_bluetooth_devices","extract_calendars","extract_location_history","extract_passwords","extract_payment_methods","extract_media_metadata","extract_system_logs","extract_call_logs"];

app.post('/tools/list', (req, res) => res.json({jsonrp:"2.0",result:{tools:TOOLS.map(n=>({name:n,description:`APEX: ${n}`,inputSchema:{type:"object"}}))},id:req.body.id}));
app.post('/tools/call', (req, res) => res.json({jsonrpc:"2.0",result:{content:[{type:"text","text":`[APEX] ${req.body.params.name} executed`}]},id:req.body.id}));
app.get('/health', (req, res) => res.json({status:"ACTIVE",tools:TOOLS.length}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`APEX MCP on ${PORT}`));
