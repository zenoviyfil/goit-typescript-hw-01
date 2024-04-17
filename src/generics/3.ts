function merge<T extends {}, U extends {}>(objA: T, objB: U) {
      return Object.assign(objA, objB);
    }
    