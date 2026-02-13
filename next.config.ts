/** @type {import('next').NextConfig} */

const repo = "lab-website";

// 判断是不是在 GitHub Actions 里构建
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  images: { unoptimized: true },
};

module.exports = nextConfig;