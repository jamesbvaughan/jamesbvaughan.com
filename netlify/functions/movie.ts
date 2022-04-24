import { Handler } from "@netlify/functions";
import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

const letterboxdURL = "https://letterboxd.com/jamesbvaughan/rss";

const handler: Handler = async () => {
  const response = await fetch(letterboxdURL);
  const responseText = await response.text();
  const responseData = await parseStringPromise(responseText);

  const movie = responseData["rss"]["channel"][0]["item"][0];
  const url = movie["link"][0];
  const title = movie["title"][0].match(/(.*),/)[1];

  return {
    statusCode: 200,
    body: `the last movie I watched was <a href="${url}">${title}</a>`,
  };
};

export { handler };
