export default defineConfig(({ mode }) => ({
  base: "/tvs-campus-navigator/",

  plugins: [react()], // remove lovable-tagger if still there

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
