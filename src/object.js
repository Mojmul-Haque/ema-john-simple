const obj={
    name: 'mojmul', 
    age: 20
}


console.log(obj)
obj.hobby = 'pg'
console.log(obj)
const newArr = [2,3,4,6]
newArr.map(num => {
    obj.count = num
})

console.log(obj)