import { minify } from 'html-minifier-terser';

export default function (indexContent: string) {
  return minify(indexContent, {
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeComments: true,
    minifyCSS: true,
    caseSensitive: true,
    keepClosingSlash: true,
  });
}
