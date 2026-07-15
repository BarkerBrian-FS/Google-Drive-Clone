import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};

const documentExtensions = [
  "pdf",
  "doc",
  "docx",
  "txt",
  "xls",
  "xlsx",
  "csv",
  "rtf",
  "ods",
  "ppt",
  "pptx",
  "odp",
  "md",
  "html",
  "htm",
  "epub",
  "pages",
  "fig",
  "psd",
  "ai",
  "indd",
  "xd",
  "sketch",
  "afdesign",
  "afphoto",
];

const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"];

const videoExtensions = ["mp4", "avi", "mov", "mkv", "webm"];

const audioExtensions = ["mp3", "wav", "ogg", "flac"];

const archiveExtensions = ["zip", "rar", "7z", "tar"];

type FileType = {
  type: "document" | "image" | "video" | "audio" | "archive" | "other";
  extension: string;
};

export const getFileType = (fileName: string): FileType => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  if (!extension) {
    return { type: "other", extension: "" };
  }

  if (documentExtensions.includes(extension)) {
    return { type: "document", extension };
  }

  if (imageExtensions.includes(extension)) {
    return { type: "image", extension };
  }

  if (videoExtensions.includes(extension)) {
    return { type: "video", extension };
  }

  if (audioExtensions.includes(extension)) {
    return { type: "audio", extension };
  }

  if (archiveExtensions.includes(extension)) {
    return { type: "archive", extension };
  }

  return { type: "other", extension: "" };
};
