export const useImage = async (fileImage: string | Blob) => {
  const url = process.env.URL_CLOUDINARY_RES;
  console.log('env', process.env.PRESET_CLOUDINARY_USER);

  const formData = new FormData();
  formData.append('file', fileImage);
  formData.append(
    'upload_preset',
    process.env.PRESET_CLOUDINARY_USER as string
  );

  const res = await fetch(url as string, {
    method: 'POST',
    body: formData,
  });

  const imageData = await res.json();
  return imageData.secure_url;
};
