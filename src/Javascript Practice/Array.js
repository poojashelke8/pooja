function Array() {


    let arr = ['a','ab','abc']
    let arr1 = arr
    // alert(arr === arr1)

    arr1.push("z")
    // alert(arr)

    for(let ele of arr){
        console.log(ele)
    }

return (
    <div>
        Array Demo1
    </div>
)
}

export default Array
