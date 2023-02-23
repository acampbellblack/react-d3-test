export const fetchText = async (url) => {
  const reponse = await fetch(url);
  return await reponse.text();
};