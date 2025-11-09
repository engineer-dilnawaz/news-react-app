export const linkifyText = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.replace(
    urlRegex,
    (url) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color:#1976d2;">${url}</a>`
  );
};
