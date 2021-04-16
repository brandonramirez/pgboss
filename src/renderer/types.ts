export type Table = {
  schema: string;
  name: string;
};

export type Database = {
  name: string;
  tables: Array<Table>;
};

export type Connection = {
  username: string;
  hostname: string;
  connected: boolean;
  // Should really only be null when !connected
  databases: Array<Database> | null;
};
