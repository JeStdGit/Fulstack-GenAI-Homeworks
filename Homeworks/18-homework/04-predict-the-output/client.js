const p1 = Promise.resolve({ id: 1, name: 'Alice' })
const p2 = Promise.reject(new Error('Network timeout'))
const p3 = Promise.resolve({ id: 3, name: 'Bob' })

Promise.allSettled([p1, p2, p3]).then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('OK:', result.value.name)
        } else {
            console.log('FAILED:', result.reason.message)
        }
    })
})

/* 
-- Predicted Output --
OK: Alice
FAILED: Network timeout
OK: Bob

-- all vs allSettled: the difference --
Promise.all gives the reqests values only when all request was successfully fulfilled so even if only one request was 'rejected' for some reason you lose it drops all the 'fulfilled' ones and throws an exception while Promise.allSettled gives an array of results which keeps the fulfilled ones anyway while giving the reason for each 'rejected' request
*/ 