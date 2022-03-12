const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');
// const element = [];

// for (let i = 0; i < images.length; i++){
//   const option = images[i];
//   const imeg = document.createElement("img");
//   const list = document.createElement('li');
//   imeg.src = option.url;
//   imeg.alt = option.alt;
//   list.appendChild(imeg)
//   element.push(list)
// }
// gallery.append(...element)
const element = images.map(options =>
{
  const imeg = document.createElement("img");
  const list = document.createElement('li');
  imeg.src = options.url;
  imeg.alt = options.alt;
  list.appendChild(imeg)
  return list
})
gallery.append(...element)