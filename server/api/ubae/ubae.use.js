'use strict';

import whatModule from './use/use.what';
import whenModule from './use/use.when';
import whereModule from './use/use.where';
import howModule from './use/use.how';
import whichModule from './use/use.which';
import helpModule from './use/use.help';
import responseModule from './use/use.responses';
import ubaguioModule from './use/use.ubaguio';

exports.searchWhat = whatModule.what;
exports.searchWhen = whenModule.when;
exports.searchWhere = whereModule.where;
exports.searchHow = howModule.how;
exports.searchWhich = whichModule.which;
exports.searchHelp = helpModule.help;
exports.searchResponse = responseModule.response;
exports.searchUbaguio = ubaguioModule.searchUbaguio;
