import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (url: string): Promise<void> {
    this.uri = url
    this.client = await MongoClient.connect(this.uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null as unknown as MongoClient
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client
    //  || !this.client.isConnected()
    ) {
      await this.connect(this.uri)
    }

    return this.client.db().collection(name)
  },

  map  (data: any): any {
    const { _id, ...collectionWithoutId } = data
    return {
      ...collectionWithoutId,
      id: _id.toString()
    }
  },

  mapCollection  (collection: any[]): any[] {
    return collection.map((item) => (
      this.map(item)
    ))
  }

}
