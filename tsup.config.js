const { defineConfig } = require("tsup")

module.exports = defineConfig((options) => {
  const common = defineConfig({
    entry: ["src/index.js"],
    platform: "browser",
    target: "es2015",
    globalName: "EnumNamesPlugin",
  })

  return ["cjs", "esm", "iife"].map((format) =>
    defineConfig({
      ...common,
      sourcemap: format === "iife",
      minifyIdentifiers: !options.watch,
      minifySyntax: !options.watch,
      minifyWhitespace: !options.watch && format === "iife",
      format,
    })
  )
})
