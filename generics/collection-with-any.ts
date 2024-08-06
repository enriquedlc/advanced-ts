export class CollectionWithAny {
  constructor(private readonly items: any[]) {}

  find(predicate: (item: any) => boolean): any {
    return this.items.find(predicate);
  }
}
