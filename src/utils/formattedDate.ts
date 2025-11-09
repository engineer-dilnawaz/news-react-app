export const formattedDate = (date: Date | string = new Date()) => {
  return Intl.DateTimeFormat("en-CA").format(
    typeof date === "string" ? new Date(date) : date
  );
};

export const formatDateTime = (input: string) => {
  const date = new Date(input.replace(" ", "T"));

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${dateFormatter.format(date)} at ${timeFormatter.format(date)}`;
};
