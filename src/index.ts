import { build } from "vite";
import { resolve } from "path";
import { cwd } from "process";
import { createVuePlugin } from "vite-plugin-vue2";

const root = resolve(cwd(), "example");

{
  (async () => {
    await build({
      build: {
        rollupOptions: {
          input: resolve(root, "index.js"),
          external: ["vue"],
          output: {
            dir: resolve(root, "dist"),
            format: "esm",
            plugins: [createVuePlugin()],
          },
        },
      },
    }).catch(console.log);
  })();
}
