import { defineConfig, devices } from "@playwright/test";
export default defineConfig({ testDir: "./e2e", use: { baseURL: "http://localhost:3210", ...devices["Desktop Chrome"] }, webServer: { command: "pnpm exec next dev --port 3210", url: "http://localhost:3210", reuseExistingServer: false } });
