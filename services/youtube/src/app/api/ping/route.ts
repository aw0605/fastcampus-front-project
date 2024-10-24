export const GET = async () => {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&key=${API_KEY}`,
  );

  const data = await res.json();

  return Response.json({
    data,
  });
};
