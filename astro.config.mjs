// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
            {
                name: "cv-dev-rewrite",
                configureServer(server) {
                    server.middlewares.use((req, res, next) => {
                        if (
                            req.url?.startsWith("/cv/") &&
                            !req.url.includes(".")
                        ) {
                            if (req.url.endsWith("/")) {
                                req.url += "index.html";
                            } else {
                                req.url += "/index.html";
                            }
                        }
                        next();
                    });
                },
            },
        ],
    },

    integrations: [react()],
});
