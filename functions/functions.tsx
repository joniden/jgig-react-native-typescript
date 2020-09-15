/**
 * @description
 * Takes an Array<V>, and a grouping function,
 * and returns a Map of the array grouped by the grouping function.
 *
 * @param list An array of type V.
 * @param keyGetter A Function that takes the the Array type V as an input, and returns a value of type K.
 *                  K is generally intended to be a property key of V.
 *
 * @returns Map of the array grouped by the grouping function.
 */
export function groupBy<V, K>(list: Array<V>, keyGetter:(input: V) => K) {

    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });

    return map;
}

import { Section } from '../models/Section';

/**
 * 
 * @param map Any Map
 * 
 * @returns array of objects with title and data keys
 */
export function mapToSection<T>(map: Map<any, any>) {

    // Convert map to SectionList of objects 
    let dict: Section[] = [];
    map.forEach((array, key) => {
        dict.push({title: key, data: array})
    });

    return dict;
}