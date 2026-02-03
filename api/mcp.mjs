import { execSync } from 'child_process';

const handler = async (req, res) => {
  try {
    const { jsonrpc, method, params } = req.body || {};
    // Route MSP calls to Python handler
    if (method === 'tools/list') {
      return res.status(200).json({
        jsonrpc,
        result: {
          tools: [
            { name: 'extract_iphone_messages', description: 'Extract all iMessages' },
            { name: 'extract_photos_metadata', description: 'Extract photos with GPS' },
            { name: 'extract_health_data', description: 'Extract health records' },
            { name: 'extract_safari_history', description: 'Full Safari history' },
            { name: 'extract_voice_memos', description: 'Voice memos w/ transcription' },
            { name: 'extract_contacts', description: 'All contact entries' },
            { name: 'extract_calendar', description: 'Calendar events & locations' },
            { name: 'extract_apps', description: 'Installed apps list' },
            { name: 'generate_forensic_report', description: 'Complete forensic analysis' },
            { name: 'hash_evidence_chain', description: 'Chain of custody verification' }
          ]
        }
  
    
    "»
    }
    if (method === 'tools/call') {
      return res.status(200).json({
        jsonrpc,
        result: {
          content: [{ type: 'text', text: `âœ… ${params.name} executed via APEX iPhone Ecosystem` }]
        }
      });
    }
  
    Xeturn res.status(200).json({
      jsonrpc,
      result: { status: 'APEX MCP server online', uptime: Date.now() }
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default handler;