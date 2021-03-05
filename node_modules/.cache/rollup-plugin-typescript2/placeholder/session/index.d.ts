import { Session } from '../types';
/**
 * @description 获取值
 * @param {string} key - 存储的key
 * @param {Pick<Session.IOptions, 'decode'>} [options] - 参数选项
 * @param {boolean} [options.decode] - 是否解密
 * @returns {*} 存储的值
 */
declare function get(key: string, options?: Pick<Session.IOptions, 'decode'>): any;
/**
 * @description 设置值
 * @param {string} key - 设置的key
 * @param {*} value - 设置的value
 * @param {Pick<Session.IOptions, 'encode'>} [options] - 参数选项
 * @param {boolean} [options.encode] - 是否加密
 */
declare function set(key: string, value: any, options?: Pick<Session.IOptions, 'encode'>): void;
/**
 * @description 删除值
 * @param {string} key - 删除的key
 */
declare function remove(key: string): void;
/**
 * @description 清空
 */
declare function clear(): void;
export { get, set, remove, clear };
