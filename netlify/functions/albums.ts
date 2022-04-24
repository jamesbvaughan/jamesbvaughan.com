import { Handler } from "@netlify/functions";
import fetch from 'node-fetch'

const discogsURL = `https://api.discogs.com/lists/447073?token=${process.env.DISCOGS_TOKEN}`

const handler: Handler = async () => {
  const response = await fetch(discogsURL);
  const data = await response.json();
  const albums = data["items"];

  return {
    statusCode: 200,
    body: albums,
  };
};

export { handler };
