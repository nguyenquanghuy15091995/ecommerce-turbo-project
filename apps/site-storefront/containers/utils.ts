import { WidgetPayload } from "./types";

export const fetchData = async (payload?: WidgetPayload, params?: string) => {
  let data = undefined;
  if (payload && payload.url) {
    try {
        const newUrl = payload.url.includes("?") ? payload.url : `${payload.url}?`
      const res = await fetch(`${newUrl}${params ? `&${params}`: ""}`);
      const resJson = await res.json();
      if (resJson) {
        data = resJson;
        return data;
      }
    } catch (error) {
      return data;
    }
  }
  return data;
};
