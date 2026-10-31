// Replace the body with SMS / WhatsApp / email provider calls. Currently logs only.
export async function notify(to,message){console.log(`[notify] ${to}: ${message}`);return true}
