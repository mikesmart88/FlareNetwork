import axios from "axios";

export const sendEmail = async (label, phase) => {
  try {
    const res = await axios.post("http://localhost:8000/api/send-email/", {
      wallet_label: label,
      phase: phase,
    });

    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};