import { fetchApi } from "./api";

export interface dataPDF {
  filename: "" | string;
  html: "";
}

const generatePDF = async (data: any): Promise<dataPDF | null> => {
  try {
    const response = await fetchApi<dataPDF>(`/api/generate-pdf`, "put", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user information:", error);
    return null;
  }
};

export default generatePDF;
