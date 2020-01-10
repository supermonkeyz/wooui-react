function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

export default function getCssModule(classes, module) {
  if (isObject(module) && Array.isArray(classes)) {
    return classes.map(item => module[item]).join(' ');
  }
  return classes;
}
