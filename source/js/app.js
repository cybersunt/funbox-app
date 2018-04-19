const products = [
  {
    name: 'Нямушка',
    taste: 'c фуагра',
    weight: 0.5,
    soldOut: false,
  },
  {
    name: 'Нямушка',
    taste: 'c рыбой',
    weight: 2,
    soldOut: false,
  },
  {
    name: 'Нямушка',
    taste: 'c курой',
    weight: 5,
    soldOut: true
  }
];

Vue.component('todo-item', {
  template: '<li>Это одна задача в списке</li>'
})


new Vue({
  el: '#app',
  data: {
    products: products,
    bonuses: products.bonuses
  }
})
