import { AggregateRoot } from "./aggregate-root";

export class CollectionWithUpperBoundary<T extends AggregateRoot> {
  private readonly indexedItems: Map<string, T>;

  constructor(readonly items: T[]) {
    if (items.length === 0) {
      throw new Error(`You can not instantiate an empty collection.`);
    }

    this.indexedItems = new Map();
    items.forEach((i) => this.indexedItems.set(i.id, i));
  }

  find(id: string): T {
    const item = this.indexedItems.get(id);

    if (!item) {
      throw new Error(`Expected item with id <${id}> not found in collection.`);
    }

    return item;
  }
}
