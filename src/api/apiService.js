import axios from "axios";
const balanceApiUrl = process.env.REACT_APP_INDIGO_API;
const apiService = {
  getBalance: async (data) => {
    const response = await axios.get(balanceApiUrl, {
      params: {
        cardNumber: data.cardNumber,
      },
    });
    return response.data;
  },
  postBalance: async (data) => {
    const resp = await axios.post(balanceApiUrl, data);
    return resp;
  },
};

export default apiService;
