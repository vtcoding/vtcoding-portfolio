export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(
      (url) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(url);
          img.onerror = (err) => reject(err);
        })
    )
  );
};
