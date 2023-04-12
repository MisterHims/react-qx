import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import cssnano from 'cssnano';
import postcssNested from 'postcss-nested';
import postcssSimpleVars from 'postcss-simple-vars';
import autoprefixer from 'autoprefixer';
import postcssUtilities from 'postcss-utilities';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssImport(),
    postcssMixins(),
    cssnano({ preset: 'default', }),
    postcssNested(),
    postcssSimpleVars(),
    autoprefixer(),
    postcssUtilities(),
    postcssPresetEnv({
      features: {
        'nesting-rules': false
      }
    })
  ],
};
