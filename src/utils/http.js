const BASE_URL = "https://failteireland.azure-api.net/opendata-api/v1/";

export const GET = async (query) => {
  const res = await fetch(`${BASE_URL}${query}`);
  const data = await res.json();

  return data;
};