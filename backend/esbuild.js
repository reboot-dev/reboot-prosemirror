import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

esbuild.build({
  entryPoints: ["./src/main.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  sourcemap: "inline",
  outfile: "bundle.js",
  plugins: [nodeExternalsPlugin({ allowWorkspaces: true })],
});
