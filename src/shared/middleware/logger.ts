import * as winston from 'winston'

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({
      label:'[api-service]'
    }), 
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.printf(info => {
      return `${info.label} ${info.level} - ${info.timestamp} : ${info.message}`;
    }),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'services.log' })
  ]
});
