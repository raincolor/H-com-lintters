module.exports = {
  extends: ['stylelint-config-standard-vue'],
  plugins: ['stylelint-order'],
  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['**/*.(less|css|vue|html)'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.(scss)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  rules: {
    'color-hex-length': 'long',
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'export'],
      },
    ],
    // 不允许使用位置函数，除ignoreFunctions数组下的元素
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'v-bind',
          'if',
          'boolean',
          'escape',
          'e',
          '%',
          'replace',
          'length',
          'extract',
          'range',
          'each',
          'ceil',
          'floor',
          'percentage',
          'round',
          'sqrt',
          'abs',
          'sin',
          'asin',
          'cos',
          'acos',
          'tan',
          'atan',
          'pi',
          'pow',
          'mod',
          'min',
          'max',
          'isnumber',
          'isstring',
          'iscolor',
          'iskeyword',
          'isurl',
          'ispixel',
          'isem',
          'ispercentage',
          'isunit',
          'isruleset',
          'isdefined',
          'color',
          'image-size',
          'image-width',
          'image-height',
          'convert',
          'data-uri',
          'default',
          'unit',
          'get-unit',
          'svg-gradient',
          'rgb',
          'rgba',
          'argb',
          'hsl',
          'hsla',
          'hsv',
          'hsva',
          'hue',
          'saturation',
          'lightness',
          'hsvhue',
          'hsvsaturation',
          'hsvvalue',
          'red',
          'green',
          'blue',
          'alpha',
          'luma',
          'luminance',
          'saturate',
          'desaturate',
          'lighten',
          'darken',
          'fadein',
          'fadeout',
          'fade',
          'spin',
          'mix',
          'tint',
          'shade',
          'greyscale',
          'contrast',
          'multiply',
          'screen',
          'overlay',
          'softlight',
          'hardlight',
          'difference',
          'exclusion',
          'average',
          'negation',
          '-',
          '~`colorPalette',
        ],
      },
    ],
    // 指定样式的排序, 从定位到元素内容，从外到内，从底层到上层排列，最后是一个其他特性
    'order/properties-order': [
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'z-index',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'visibility',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
    ],
  },
};
