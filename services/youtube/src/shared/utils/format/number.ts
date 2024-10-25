const units = ["", "만", "억", "조", "경"];

export const formatNumberToKoreanText = (
  value: number,
  onlyHighestUnit?: boolean,
): string => {
  if (value === 0) {
    return "0";
  }

  const parts = [];

  while (value > 0) {
    parts.push(value % 10000);
    value = Math.floor(value / 10000);
  }

  const koreanTextParts: string[] = [];

  parts.forEach((part, index) => {
    if (part > 0) {
      const partString =
        index === 0 ? formatNumberToKoreanWithCommas(part) : part.toString();
      koreanTextParts.push(partString + units[index]);
    }
  });

  koreanTextParts.reverse();

  return onlyHighestUnit ? koreanTextParts[0] : koreanTextParts.join(" ");
};

const formatNumberToKoreanWithCommas = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
