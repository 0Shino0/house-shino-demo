/* indexDB */

class DB {
  private dbName: string // 数据库名称

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  // 打开indexDB数据库
  public openStore() {
    const request = window.indexedDB.open(this.dbName, 1)
    request.onsuccess = (event) => {
      console.log('数据库打开成功');
      console.log(event);
    }

    request.onerror = (event) => {
      console.log('数据库打开失败');
      console.log(event);
    }

    request.onupgradeneeded = (event) => {
      console.log('数据库升级成功');
      console.log(event);
    }
  }
}
