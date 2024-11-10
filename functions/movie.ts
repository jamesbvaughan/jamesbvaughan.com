import { XMLParser } from "fast-xml-parser";

const letterboxdURL = "https://letterboxd.com/jamesbvaughan/rss";

export const onRequest = async () => {
  // Fetch the RSS feed
  const response = await fetch(letterboxdURL);
  const responseText = await response.text();

  // Initialize the XML parser
  const parser = new XMLParser();
  const xmlData = parser.parse(responseText);

  // Navigate the parsed XML JSON structure
  const item = xmlData.rss.channel.item[0]; // Assuming 'item' is an array with the most recent at index 0
  const url = item.link;
  const titleText = item.title;
  const title = titleText.match(/(.*),/)[1]; // Extracting title part before comma

  return new Response(`The last movie I watched was <a href="${url}">${title}</a>`, {
    headers: { "Content-Type": "text/html" },
  });
};
