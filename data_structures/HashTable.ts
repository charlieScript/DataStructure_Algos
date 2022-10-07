class HashTable {
  table: any[];
  size: number;
  constructor(size: number) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key: string) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key: string, value: any) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item: any) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key: string) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item: any) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1]
      }
    }
    return console.log('not found');
    
  }

  remove(key: string) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item: any) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf((sameKeyItem), 1))
      }
    }
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, '<--key:value-->', this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);
table.set('charles', 1);
table.set('name', 1);
table.print();
