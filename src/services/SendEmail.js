import axios from "axios";
import { base_api } from "../env.config";

export const sendEmail = async (label, phase, email) => {
  try {
    const res = await axios.post(`${base_api}/send-email/`, {
      wallet_label: label,
      phase: phase,
      email: email,
    });

    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};