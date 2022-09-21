//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  env: {
    URL_CLOUDINARY_RES: process.env.URL_CLOUDINARY_RES,
    PRESET_CLOUDINARY_USER: process.env.PRESET_CLOUDINARY_USER,
  },
};

module.exports = withNx(nextConfig);
