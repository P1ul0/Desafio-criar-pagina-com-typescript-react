//simulando uma api

const conta = {
    email: 'Paulo.dio.bank',
    password: '123456',
    name: 'Paulo César',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})