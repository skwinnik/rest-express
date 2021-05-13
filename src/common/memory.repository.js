export class MemoryRepository {
  constructor({ data = [] } = {}) {
    this.data = data;
  }

  async getAll() {
    return this.data;
  }

  async get(id) {
    return this.data.find((entity) => entity.id === id);
  }

  async create(entity) {
    this.data.push(entity);
    return entity;
  }

  async delete(id) {
    const entity = await this.get(id);
    if (!entity) return null;

    this.data.splice(this.data.indexOf(entity), 1);
    return entity;
  }
}
