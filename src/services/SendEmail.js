import { API_KEY } from "../../env.config";

export const sendEmail = async (
  recipient_email,
  mail_info,
  mail_subject,
  sender_name,
) => {
  const url = "https://api.brevo.com/v3/smtp/email";

  const data = {
    sender: {
      name: "Flare Network",
      email: "flareNetwork@sidratrade.info",
    },
    to: [
      {
        email: recipient_email,
        name: sender_name,
      },
    ],
    subject: mail_subject,
    htmlContent: mail_info,
  };

  const headers = {
    "api-key": API_KEY,
    "Content-Type": "application/json",
    accept: "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("Email sent successfully:", result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
