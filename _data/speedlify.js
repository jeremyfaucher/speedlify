module.exports = async function() {
  let url = "https://zealous-lovelace-73ddf1.netlify.app/api/urls.json";
  let json = await CacheAsset(url, {
    duration: "1w",
    type: "json",
  });

  return json;
};
