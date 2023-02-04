export const objVals = (obj) => {
    let vals = []
    for (const prop in obj) {
        vals.push(obj[prop]);
    }
    return vals;
}