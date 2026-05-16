import * as esbuild from "esbuild";

const ctx = await esbuild.context({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: false,
  sourcemap: true,
  outfile: "public/bundle.js",
});


await ctx.watch();
console.log("👀 Watching for changes...");


const { host, port } = await ctx.serve({
  servedir: "public",
  port: 3000,
});

console.log(`🚀 Server running at http://localhost:${port}`);