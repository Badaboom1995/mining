import * as BlockIo from 'block_io';
import {
  BLOCK_IO_KEY,
  BLOCK_IO_SECRET,
  BLOCK_IO_VERSION,
} from '../../../config/environments.config';

export default class BitcoinService {
  private bitcoinService: any;
  private user: string;
  constructor(options) {
    this.user = options.user;
    this.bitcoinService = new BlockIo(
      '54dd-21ee-776e-b2cb',
      'M12345678m',
      BLOCK_IO_VERSION,
    );
  }

  public getBalance() {
    return new Promise((resolve, reject) => {
      return this.bitcoinService.get_balance((err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }

  public getNewAddress() {
    return new Promise((resolve, reject) => {
      return this.bitcoinService.get_new_address(
        { label: this.user },
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        },
      );
    });
  }

  public archiveAddresses() {
    return new Promise((resolve, reject) => {
      return this.bitcoinService.archive_addresses(
        { label: this.user },
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        },
      );
    });
  }
}
