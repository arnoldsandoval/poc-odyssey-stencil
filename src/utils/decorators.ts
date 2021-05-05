import { nanoid } from 'nanoid'

export function id() {
  return (target: {} | any, name: PropertyKey): any => {
    const descriptor = {
      get(this: any) {
        const propertyName = `__${String(name)}`;

        if (!this[propertyName]) {
          this[propertyName] = nanoid(6);
        }

        return this[propertyName];
      },
      enumerable: true,
      configurable: true,
    };

    Object.defineProperty(target, name, descriptor);
  };
}
