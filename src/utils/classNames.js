export default function classNames(...classes) {
  return classes.filter(item => !!item).join(' ');
}
