import clsx from 'clsx';

export function cn(...classes) {
  return clsx(...classes)
    .split(' ')
    .filter((className) => className)
    .map((className) => className.trim())
    .join(' ');
}
