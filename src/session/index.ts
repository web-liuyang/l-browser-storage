import { decode, encode } from 'js-base64';
import { Session } from '../types';

/**
 * @description 获取值
 * @param {string} key - 存储的key
 * @param {Pick<Session.IOptions, 'decode'>} [options] - 参数选项
 * @param {boolean} [options.decode] - 是否解密
 * @returns {*} 存储的值
 */
function get(key: string, options?: Pick<Session.IOptions, 'decode'>): any {
  const value = sessionStorage.getItem(key);

  if (!value) return null;

  if (options?.decode) {
    return JSON.parse(decode(value));
  } else {
    return JSON.parse(value);
  }
}

/**
 * @description 设置值
 * @param {string} key - 设置的key
 * @param {*} value - 设置的value
 * @param {Pick<Session.IOptions, 'encode'>} [options] - 参数选项
 * @param {boolean} [options.encode] - 是否加密
 */
function set(key: string, value: any, options?: Pick<Session.IOptions, 'encode'>): void {

  if (options?.encode) {
    sessionStorage.setItem(key, encode(JSON.stringify(value)));
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * @description 删除值
 * @param {string} key - 删除的key
 */
function remove(key: string): void {
  sessionStorage.removeItem(key);
}

/**
 * @description 清空
 */
function clear(): void {
  sessionStorage.clear();
}

export { get, set, remove, clear };
