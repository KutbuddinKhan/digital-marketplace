import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "INR";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "INR", notation = "compact" } = options;

  const numericPrice =
    typeof price === "string" ? parseFloat(price) : Number(price);

  let formattedPrice: string;
  if (numericPrice >= 1000) {
    formattedPrice = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      notation,
      maximumFractionDigits: 2,
    }).format(numericPrice);
  } else {
    formattedPrice = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      notation,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericPrice);
  }

  return formattedPrice;
}
