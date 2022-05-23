module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``,
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.ts`,
    '@/(.*)': '<rootDir>/src/$1',
  },
  setupFiles: [`<rootDir>/__helpers__/loadershim.ts`],
  setupFilesAfterEnv: ['<rootDir>/__helpers__/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/__mocks__/svgTransform.ts',
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
};
