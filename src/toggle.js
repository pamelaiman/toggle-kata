/** Toggle the 'isOn' for specified character
 * @param {string} soughtID
 * @param {array} arrayOfObjects
 * @returns {array} new array of objects
 */
export default function toggle(soughtID, arrayOfObjects) {
  return arrayOfObjects.map((object) => {
    if (soughtID === object.id) {
      return { ...object, isOn: !object.isOn };
    }
    return object;
  });
}
