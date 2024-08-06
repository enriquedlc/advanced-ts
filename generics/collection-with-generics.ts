export class CollectionWithGenerics<T> {
  constructor(private readonly items: T[]) {}

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
}
