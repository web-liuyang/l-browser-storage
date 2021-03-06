import { decode, encode } from 'js-base64';
import { Local } from '../types';

/**
 * @description 获取值
 * @param {string} key - 存储的key
 * @param {Pick<Local.IOptions, 'decode'>} [options] - 参数选项
 * @param {boolean} [options.decode] - 是否解密
 * @returns {any} 存储的值
 */
function get(key: string, options?: Pick<Local.IOptions, 'decode'>): any {
  const value = localStorage.getItem(key);

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
 * @param {Pick<Local.IOptions, 'encode'>} [options] - 参数选项
 * @param {boolean} [options.encode] - 是否加密
 */
function set(key: string, value: any, options?: Pick<Local.IOptions, 'encode'>): void {

  if (options?.encode) {
    localStorage.setItem(key, encode(JSON.stringify(value)));
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * @description 删除值
 * @param {string} key - 删除的key
 */
function remove(key: string): void {
  localStorage.removeItem(key);
}

/**
 * @description 清空
 */
function clear(): void {
  localStorage.clear();
}

export { get, set, remove, clear };
