import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");
const SUBMODULES_DIR = path.join(ROOT, "submodules");

const CVS = [
    { dir: "resume_1c", targetName: "1c", base: "/cv/1c" },
    { dir: "resume_devops", targetName: "devops", base: "/cv/devops" },
];

async function buildSubmodules() {
    for (const cv of CVS) {
        console.log(`\n===========================================`);
        console.log(`Building CV: ${cv.dir} with base: ${cv.base}`);
        console.log(`===========================================\n`);

        const cvPath = path.join(SUBMODULES_DIR, cv.dir);
        const configPath = path.join(cvPath, "astro.config.mjs");

        // Read and save original config
        let originalConfig = "";
        if (await fs.pathExists(configPath)) {
            originalConfig = await fs.readFile(configPath, "utf8");

            // Replace base
            let newConfig = originalConfig.replace(
                /base:\s*["'][^"']+["']/,
                `base: "${cv.base}"`,
            );
            await fs.writeFile(configPath, newConfig);
        }

        try {
            // Install dependencies
            console.log(`Installing dependencies for ${cv.dir}...`);
            execSync("pnpm install", { cwd: cvPath, stdio: "inherit" });

            // Build
            console.log(`Building ${cv.dir}...`);
            execSync("pnpm run build", { cwd: cvPath, stdio: "inherit" });

            // Copy to public
            const distPath = path.join(cvPath, "dist");
            const targetPath = path.join(ROOT, "public", "cv", cv.targetName);

            await fs.emptyDir(targetPath);
            await fs.copy(distPath, targetPath);
            console.log(
                `Successfully built and copied ${cv.dir} to public/cv/${cv.targetName}`,
            );
        } finally {
            // Revert base config
            if (originalConfig !== "") {
                await fs.writeFile(configPath, originalConfig);
            }
        }
    }
}

buildSubmodules().catch(console.error);
