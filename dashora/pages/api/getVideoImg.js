import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query; // Extract the 'url' query parameter

  if (!url) {
    return res.status(400).json({ error: "Missing 'url' query parameter" });
  }

  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer", // Fetch the image as binary data
    });
    res.setHeader("Content-Type", "image/jpeg"); // Set the appropriate content type
    res.send(response.data); // Send the image data to the client
  } catch (error) {
    console.error("Error fetching image:", error.message);
    res.status(500).json({ error: "Error fetching image" });
  }
}