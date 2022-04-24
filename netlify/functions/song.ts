import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const lastfmURL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&format=json&api_key=${process.env.LAST_FM_API_KEY}`

const handler: Handler = async () => {
  const response = await fetch(lastfmURL);
  const data = await response.json();
  const track = data["recenttracks"]["track"];

  const linkBody = `${track[0].name} by ${track[0].artist["#text"]}`;
  const link = `<a href="https://www.last.fm/user/magicjamesv">${linkBody}</a>`;
  const text =
    track.length > 1
      ? "at the moment I'm listening to "
      : "the last song I listened to was ";

  return {
    statusCode: 200,
    body: text + link,
  };
};

export { handler };
