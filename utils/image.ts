export const getImagePath = (path?: string) => {
  // return '/images/placeholder.png';
  if (!path) return '/images/placeholder.png';
  return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
};
