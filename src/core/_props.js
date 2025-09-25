import BASE from './_base.js';
import VIEWPORTS from './_viewports.js';

export default {
  el: {
    type: String,
    default: BASE.EL
  },
  viewports: {
    type: Array,
    default: [VIEWPORTS.LARGE, VIEWPORTS.MEDIUM, VIEWPORTS.SMALL]
  }
};