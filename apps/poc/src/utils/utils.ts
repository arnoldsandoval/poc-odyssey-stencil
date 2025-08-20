export function createId() {
  return Math.random().toString(36).substr(2, 9);
}

export function id() {
  return (target: {} | any, name: PropertyKey): any => {
    const descriptor = {
      get(this: any) {
        const propertyName = `__${String(name)}`;

        if (!this[propertyName]) {
          this[propertyName] = createId();
        }

        return this[propertyName];
      },
      enumerable: true,
      configurable: true,
    };

    Object.defineProperty(target, name, descriptor);
  };
}
