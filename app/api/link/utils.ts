import { randomBytes } from "node:crypto";

export function generateRandomKey() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 4; i++) {
    const index = randomBytes(4).readUInt32BE(0) % (characters.length - 1);
    result += characters[index];
  }

  return result;
}
