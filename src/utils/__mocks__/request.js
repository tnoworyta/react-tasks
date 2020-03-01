const shops = [
  {
    name: 'Lidl',
    location: 'Brzeszcze',
  },
  {
    name: 'Intermarche',
    location: 'Brzeszcze',
  },
];

export default function request(url) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(shops));
  });
}
