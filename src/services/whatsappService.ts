import { showSuccess, showError } from "@/utils/toast";

interface WhatsAppMessage {
  name: string;
  clinic: string;
  phone: string;
  city: string;
}

export const sendWhatsAppMessage = async (data: WhatsAppMessage) => {
  try {
    // Substitua estas variáveis pelas suas credenciais do Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;
    const yourNumber = process.env.YOUR_WHATSAPP_NUMBER;

    if (!accountSid || !authToken || !whatsappNumber || !yourNumber) {
      throw new Error("Credenciais do Twilio não configuradas");
    }

    const message = `🦷 NOVO LEAD - RCS Consultoria 🦷

📋 Informações do Cliente:
• Nome: ${data.name}
• Clínica: ${data.clinic}
• Telefone: ${data.phone}
• Cidade: ${data.city}

🎯 Próximos Passos:
1. Entrar em contato para agendar conversa estratégica
2. Realizar diagnóstico completo da clínica
3. Apresentar plano de crescimento personalizado

📅 Data: ${new Date().toLocaleDateString('pt-BR')}
⏰ Hora: ${new Date().toLocaleTimeString('pt-BR')}`;

    // URL da API do Twilio
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    // Headers da requisição
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`
    };

    // Dados da mensagem
    const body = new URLSearchParams({
      From: `whatsapp:${whatsappNumber}`,
      To: `whatsapp:${yourNumber}`,
      Body: message
    });

    // Enviar requisição
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar mensagem: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Mensagem enviada com sucesso:', result.sid);
    
    return { success: true, messageId: result.sid };
    
  } catch (error) {
    console.error('Erro ao enviar mensagem WhatsApp:', error);
    throw error;
  }
};

export const sendWhatsAppConfirmation = async (data: WhatsAppMessage) => {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;

    if (!accountSid || !authToken || !whatsappNumber) {
      throw new Error("Credenciais do Twilio não configuradas");
    }

    const confirmationMessage = `🎉 Obrigado, ${data.name}!

Sua solicitação de diagnóstico foi recebida com sucesso! 📋

📞 Em breve nossa entrará em contato no número ${data.phone} para agendar uma conversa estratégica.

🦷 RCS Consultoria - Transformando clínicas odontológicas`;

    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`
    };

    const body = new URLSearchParams({
      From: `whatsapp:${whatsappNumber}`,
      To: `whatsapp:${data.phone}`,
      Body: confirmationMessage
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar confirmação: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Confirmação enviada com sucesso:', result.sid);
    
    return { success: true, messageId: result.sid };
    
  } catch (error) {
    console.error('Erro ao enviar confirmação WhatsApp:', error);
    throw error;
  }
};