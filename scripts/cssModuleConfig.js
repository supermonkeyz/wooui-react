const path = require('path');
const ruleChildren = loader =>
  loader.use || loader.oneOf || (Array.isArray(loader.loader) && loader.loader) || [];
const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result = undefined;
  const rules = Array.isArray(rulesSource) ? rulesSource : ruleChildren(rulesSource);
  rules.some(
    (rule, index) =>
      (result = ruleMatcher(rule)
        ? { index, rules }
        : findIndexAndRules(ruleChildren(rule), ruleMatcher))
  );
  return result;
};
const findRule = (rulesSource, ruleMatcher) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);
  return rules[index];
};
const cssRuleMatcher = rule =>
  rule.test && String(rule.test) === String(/\.module\.css$/);
const sassRuleMatcher = rule =>
  rule.test && String(rule.test) === String(/\.module\.(scss|sass)$/);

const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1;
const cssLoaderMatcher = createLoaderMatcher('css-loader');
const sassLoaderMatcher = createLoaderMatcher('sass-loader');

module.exports = function(config, env, options) {
  const cssRule = findRule(config.module.rules, cssRuleMatcher);
  let cssModulesRuleCssLoader = findRule(cssRule, cssLoaderMatcher);
  const sassRule = findRule(config.module.rules, sassRuleMatcher);
  let sassModulesRuleCssLoader = findRule(sassRule, sassLoaderMatcher);
  cssModulesRuleCssLoader.options = { ...cssModulesRuleCssLoader.options, ...options };
  sassModulesRuleCssLoader.options = { ...sassModulesRuleCssLoader.options, ...options };
  return config;
};
