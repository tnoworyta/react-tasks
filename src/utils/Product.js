export default class Product {
  constructor(fetcherAdapter) {
    this.fetcherAdapter = fetcherAdapter;
  }

  get() {
    return this.fetcherAdapter.get();
  }
}
