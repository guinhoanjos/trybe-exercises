const saboresPizzas = Object.keys(order.order.pizza);

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
};

// const customerInfo = (order) => {
//     return console.log(`Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street},n ${order.address.number}, apt:  ${order.address.apartment}`)
  
// }
  
// customerInfo(order);

order.name = 'Luiz Silva';
order.payment.total -= 10; 

const orderModifier = (order) => {
    return console.log(`Olá ${order.name}, o total do seu pedido de ${saboresPizzas[0]}, ${saboresPizzas[1]} e Coca-cola Zero é R$${order.payment.total}`)
  
}
  
orderModifier(order);
