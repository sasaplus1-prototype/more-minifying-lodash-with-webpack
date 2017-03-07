'use strict';

/**
 * NOTE:
 *
 * must use `import`. cannot apply tree-shaking if use `require`.
 *
 * see:
 *   - https://github.com/lodash/babel-plugin-lodash#faq
 *   - https://github.com/lodash/babel-plugin-lodash/issues/14#issuecomment-168224406
 */
import _ from 'lodash';
// const _ = require('lodash');

const result = _.map([1,2,3], (val) => val * 2);

console.log(result);
