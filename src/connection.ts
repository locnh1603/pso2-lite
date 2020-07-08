import * as mongoose from 'mongoose'
import { logger } from 'src/shared/middleware/logger';

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
this.db = mongoose.connection.on('error', () => {
  logger.error(`database connection error on url ${process.env.DB_URL}`)
}).once('open', () => {
  logger.info(`database connection success on url ${process.env.DB_URL}`)
});
