//
//
//      ┏┛ ┻━━━━━┛ ┻┓
//      ┃　　　　　　 ┃
//      ┃　　　━　　　┃
//      ┃　┳┛　  ┗┳　┃
//      ┃　　　　　　 ┃
//      ┃　　　┻　　　┃
//      ┃　　　　　　 ┃
//      ┗━┓　　　┏━━━┛
//        ┃　　　┃   神兽保佑
//        ┃　　　┃   代码无BUG！
//        ┃　　　┗━━━━━━━━━┓
//        ┃　　　　　　　    ┣┓
//        ┃　　　　         ┏┛
//        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛
//          ┃ ┫ ┫   ┃ ┫ ┫
//          ┗━┻━┛   ┗━┻━┛
//
//  Created by CharlesChen on 2023/12/07.
//  Copyright © 2020年 Tencent. All rights reserved.

import log4js from 'log4js'

export class Logger {
  private readonly logger: log4js.Logger;

  constructor(category: string) {
    this.logger = log4js.getLogger(category);
    this.logger.level = "debug";
  }

  debug(message: any, ...args: any[]) {
    this.logger.debug(message, ...args);
  }

  info(message: any, ...args: any[]) {
    this.logger.info(message, ...args);
  }

  warn(message: any, ...args: any[]) {
    this.logger.warn(message, ...args);
  }

  error(message: any, ...args: any[]) {
    this.logger.error(message, ...args);
  }
}
