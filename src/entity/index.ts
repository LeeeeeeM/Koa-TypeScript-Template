import { DataSource } from 'typeorm'
import dataMapper from './dataMapper'
import activeRecord from './activeRecord'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'test1',
  synchronize: true,
  logging: false,
  entities: [dataMapper, activeRecord],
  subscribers: [],
  migrations: []
})

export default AppDataSource
