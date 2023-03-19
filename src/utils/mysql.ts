import { localConfig, remoteConfig } from '../config'
import { Mysql, Query } from '../libs/crud'

export const db = new Mysql(localConfig)
export const query = (): Query => new Query(db)
