import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/pso2-gather-lite', {useNewUrlParser: true, useUnifiedTopology: true});
this.db = mongoose.connection.on('error', console.error.bind(console, 'connection error:')).once('open', () => {
  console.log('db connect success');
});
