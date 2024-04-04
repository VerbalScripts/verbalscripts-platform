// export all components and mount it to our application ...

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
