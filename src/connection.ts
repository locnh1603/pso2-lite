import * as mongoose from 'mongoose'

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
this.db = mongoose.connection.on('error', console.error.bind(console, 'connection error:')).once('open', () => {
  console.log('db connect success');
});
