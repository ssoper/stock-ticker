import { platform } from 'os';
import * as fs from 'fs';

const MacOSPath = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome';
const LinuxPath = '/usr/bin/google-chrome';

export const executablePath = (): string | undefined => {
    const os = platform();

    if (os === 'darwin' && fs.existsSync(MacOSPath)) {
        return MacOSPath
    } else if (os === 'linux' && fs.existsSync(LinuxPath)) {
        return LinuxPath
    }

    return undefined
}

