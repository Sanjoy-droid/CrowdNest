import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  // Access the environment variables
  const connectionUrl = process.env.TURSO_CONNECTION_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!connectionUrl || !authToken) {
    return res
      .status(500)
      .json({ error: "Missing connection URL or auth token" });
  }

  try {
    // Example API request to your backend using Turso connection details
    const response = await fetch(`${connectionUrl}/projects/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch project");
    }

    const project = await response.json();

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
