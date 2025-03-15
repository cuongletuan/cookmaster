import { CookMasterResponse } from '@/type/_pages';
import axios from 'axios';
const apiClient = axios.create({
    baseURL: "https://api.test.soa-dev.net/api/v1",
  })
export const getPages = async (lang='en'):Promise<CookMasterResponse[]> => {
  const { data } = await apiClient.get("/pages",{params:{lang}});
  return data;
};