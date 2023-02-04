export const objVals = (obj) => {
    let data = [];
    for (const project in obj) {
        data.push(obj[project])
    }

    return data;
}