/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (webpackConfig, { webpack}) => {
    webpackConfig.plugins.push(
      new webpack.NormalModuleReplacementPlugin(new RegExp(/\.js$/), function (
        resource: { request: string }
      ) {
        resource.request = resource.request.replace(".js", "");
      })
    );
    return webpackConfig;
  },
};

export default nextConfig;