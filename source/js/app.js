'use strict'

var PRODUCTS = [
  {
    name: 'Нямушка',
    taste: 'c фуагра',
    weight: 0.5,
    buns: {
      servings: '<b>10</b> порций',
      toys: 'мышь в подарок',
      note: null
    },
    selected: false,
    disabled: false
  },
  {
    name: 'Нямушка',
    taste: 'c рыбой',
    weight: 2,
    buns: {
      servings: '<b>40</b> порций',
      toys: '<b>2</b> мыши в подарок',
      note: null
    },
    selected: true,
    disabled: false
  },
  {
    name: 'Нямушка',
    taste: 'c курой',
    buns: {
      servings: '<b>100</b> порций',
      toys: '<b>5</b> мышей в подарок',
      note: 'заказчик доволен'
    },
    weight: 5,
    selected: false,
    disabled: true
  }
];

new Vue({
  el: '#app',
  data: {
    products: PRODUCTS
  }
})
