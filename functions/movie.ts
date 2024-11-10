import fetch from "node-fetch";

const letterboxdURL = "https://letterboxd.com/jamesbvaughan/rss";

export const onRequest = async () => {
  const response = await fetch(letterboxdURL);
  const responseText = await response.text();

  // Create a DOMParser instance
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(responseText, "text/xml");

  // Use DOM methods to navigate the XML
  const item = xmlDoc.querySelector("item");
  const url = item.querySelector("link").textContent;
  const titleText = item.querySelector("title").textContent;
  const title = titleText.match(/(.*),/)[1];

  return new Response(`the last movie I watched was <a href="${url}">${title}</a>`);
};

