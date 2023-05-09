import axios from "axios";

const apiService = {
  getBalance: async (data) => {
    const response = await axios.get(
      "http://localhost:9003/Umbraco/Api/Activation/PublicGetVisaCardBalance",
      {
        params: {
          cardNumber: data.cardNumber,
        },
      }
    );
    return response.data;
  },
  postBalance: async (data) => {
    const resp = await axios.post(
      "http://localhost:9003/Umbraco/Api/Activation/PublicCheckCardBalance",
      data
    );
    return resp;
  },
};

export default apiService;
