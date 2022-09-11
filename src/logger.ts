import { createLogger, transports, format } from 'winston';

export const logger = process.env.NODE_ENV === 'production'
    ? createLogger({
        level: 'info',
        format: format.combine(
            format.json(),
            format.timestamp()
        ),
        defaultMeta: { service: 'stocks' },
        transports: [
            new transports.File({ filename: 'error.log', level: 'error' }),
            new transports.File({ filename: 'messages.log' }),
        ],
    })
    : createLogger({
        level: 'info',
        format: format.combine(
            format.timestamp(),
            format.simple()
        ),
        defaultMeta: { service: 'stocks' },
        transports: [
            new transports.Console({
                format: format.combine(
                  format.timestamp(),
                  format.colorize(),
                  format.simple()
                )
              })
        ],
      })