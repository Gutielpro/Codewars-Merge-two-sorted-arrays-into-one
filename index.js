const arr1 = prompt('escriba los numeros')
const arr2 = prompt('escriba los numeros')

function mergeArrays(arr1,arr2) {
    result = []
    for (let i = 0; i <= arr1.length; i++) {
        for (let j = 0; j <= arr2.length; j++) {
            if (arr1[i] === arr2[j]) {

            }
        }

    }
    let result = arr1.concat(arr2);
    return result
}
console.log(mergeArrays(arr1,arr2));