export class ProductFetcherAdapter {
  async get() {
    return await fetch('http://example.com');
  }
}
