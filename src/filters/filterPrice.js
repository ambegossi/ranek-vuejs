import Vue from 'vue';

Vue.filter('numberPrice', value => {
  const numberValue = Number(value);
  if (!Number.isNaN(numberValue)) {
    return numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return '';
});
