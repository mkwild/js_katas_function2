function add(x, y) {
    return(x + y)
}

console.log(add(2, 4))

function multiply(x, y) {
    
    let n = x
    
    for(let i = 1; i < y; i++) {
         n = add(n, x)
    }

    return n
}

console.log(multiply(6, 4))

function power(x,n) {
    
    let a = x

    for(let i = 1; i < n; i++) {

        a = multiply(a, x)

    }

    return a

}

console.log(power(3, 4))

function factorial(n) {
    
    let x = n

    for(let i = n-1; i > 0; i--) {

        x = multiply(x, i)

    }

    return x

}

console.log(factorial(5))

function fibonacci(n) {

    let arr = [0, 1]

    for(let i = 1; i < n; i++) {

        arr.push(add(arr[i], arr[i-1]))

    }

    return arr[n-1]

}

console.log(fibonacci(5))