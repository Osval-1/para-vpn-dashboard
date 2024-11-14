import axios from "axios";
export const getServer = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}server/get`);
  return response.data;
};
export const updateServer = async ({ id, data }:{id:string,data:FormData}) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}server/update?id=${id}`,
    data,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data;
};
export const addServer = async (data: FormData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}server/add`,
    data,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data;
};
export const deleteServer = async (id: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}server/delete?id=${id}`
  );
  return response.data;
};
