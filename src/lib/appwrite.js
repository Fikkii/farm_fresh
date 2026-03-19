import { Client, Account, Databases, Storage} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://syd.cloud.appwrite.io/v1')
    .setProject('69b57107000a494a1c39'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID, Query } from 'appwrite';

