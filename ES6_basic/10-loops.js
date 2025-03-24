export default function appendToEachArrayValue(array, appendString) {
    const arrayNew = [];
    for (const elem of array) {
      arrayNew.push(appendString + elem);
    }
  
    return arrayNew;
  }
