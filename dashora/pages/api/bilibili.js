import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://api.bilibili.com/x/web-interface/popular");
    res.status(200).json(response.data); // Forward the API response to the client
  } catch (error) {
    console.error("Error fetching data from Bilibili API:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}