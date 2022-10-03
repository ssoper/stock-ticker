import { platform } from "os";
import { logger } from "./logger";
import * as fs from "fs";

const MacOSPath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const LinuxPath = "/usr/bin/chromium-browser";

export const executablePath = (): string | undefined => {
  const os = platform();

  if (os === "darwin" && fs.existsSync(MacOSPath)) {
    return MacOSPath;
  } else if (os === "linux" && fs.existsSync(LinuxPath)) {
    return LinuxPath;
  }

  logger.info("Did not find existing Chromium installation");

  return undefined;
};
