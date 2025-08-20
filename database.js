// database.js
async function getProperties() {
  // Aqui você pode retornar dados fixos para teste
  return [    { id: 1, title: 'Casa em São João del Rei', price: 'R$ 300.000', link: 'http://exemplo.com/imovel1' },
    { id: 2, title: 'Apartamento no Centro', price: 'R$ 250.000', link: 'http://exemplo.com/imovel2' }
  ];
}

module.exports = { getProperties };
