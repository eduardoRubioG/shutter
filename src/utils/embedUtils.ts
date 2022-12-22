export const convertVimeoURL = (url: string): string => {
  if (!url) return "";
  // Extract the video ID from the URL
  const videoID = url.split("/").pop()?.split("?")[0];

  // Build the new URL using the video ID
  return "https://player.vimeo.com/video/" + videoID;
};

export const convertYoutubeURL = (url: string): string => {
  if (!url) return "";
  // Extract the video ID from the URL
  var videoId = url.split("v=")[1] || "";

  // Return the embed URL
  return "https://www.youtube.com/embed/" + videoId;
};

export const isYoutubeLink = (url: string): boolean => {
  if (!url) return false;
  return url.includes("youtube");
};

export const isVimeoLink = (url: string): boolean => {
  if (!url) return false;
  return url.includes("vimeo");
};

export const parseVideoEmbedUrl = (url: string): string => {
  if (!url) return "";
  if (isYoutubeLink(url)) {
    return convertYoutubeURL(url);
  }
  if (isVimeoLink(url)) {
    return convertVimeoURL(url);
  }
  return "";
};
