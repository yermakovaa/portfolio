import barbershopImg from '../../img/myProjects/barbershop.jpg';
import filmotekaImg from '../../img/myProjects/filmoteka.jpg';
import webStudioImg from '../../img/myProjects/webStudio.jpg';
import webDevImg from '../../img/myProjects/webDev.jpg';
import snakeImg from '../../img/myProjects/snake.jpg';
import clockImg from '../../img/myProjects/clock.jpg';
import imageFinder from '../../img/myProjects/imageFinder.jpg';
import weatherImg from '../../img/myProjects/weather.jpg';
import moviesImg from '../../img/myProjects/movies.jpg';
import phonebookImg from '../../img/myProjects/phonebook.jpg';

export const ownProjects = [
  {
    id: 'id-1',
    label: 'Web Studio',
    link: 'https://yermakovaa.github.io/goit-markup-hw-08/',
    repo: 'https://github.com/yermakovaa/goit-markup-hw-08',
    preview: webStudioImg,
    info:
      'Responsive web page layout Web Studio - effective solutions for your business.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
    ],
  },
  {
    id: 'id-2',
    label: 'WebDev',
    link: 'https://yermakovaa.github.io/WebDev/',
    repo: 'https://github.com/yermakovaa/WebDev',
    preview: webDevImg,
    info: 'Layout of a web page (only desktop version).',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
    ],
  },
  {
    id: 'id-3',
    label: 'Snake game',
    link: 'https://yermakovaa.github.io/snake-game/',
    repo: 'https://github.com/yermakovaa/snake-game',
    preview: snakeImg,
    info:
      'Mini-game "Snake" with using JavaScript and Canvas. Controlling with keyboard arrows only and with sound on.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'JavaScript' },
    ],
  },
  {
    id: 'id-4',
    label: 'Clock',
    link: 'https://yermakovaa.github.io/JS-and-CSS-Clock/',
    repo: 'https://github.com/yermakovaa/JS-and-CSS-Clock',
    preview: clockImg,
    info: 'Realistic clock with a sound ticking clock.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'JavaScript' },
    ],
  },
  {
    id: 'id-5',
    label: 'Image Finder',
    link: 'https://yermakovaa.github.io/goit-react-hw-03-image-finder/',
    repo: 'https://github.com/yermakovaa/goit-react-hw-03-image-finder',
    preview: imageFinder,
    info:
      'Keyword search image app. The public image search service Pixabay was used for HTTP requests.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
    ],
  },
  {
    id: 'id-6',
    label: 'Weather',
    link: 'https://yermakovaa.github.io/weather/',
    repo: 'https://github.com/yermakovaa/weather',
    preview: weatherImg,
    info:
      'Weather App. Shows the current weather in the city. The application uses Weather API.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
    ],
  },
  {
    id: 'id-7',
    label: 'Movies',
    link: 'https://yer-movies.netlify.app/',
    repo: 'https://github.com/yermakovaa/goit-react-hw-05-movies',
    preview: moviesImg,
    info:
      'App for watching popular and searching films. The application uses themoviedb.org API.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
    ],
  },
  {
    id: 'id-8',
    label: 'Phonebook',
    link: 'https://yer-phonebook.netlify.app/',
    repo: 'https://github.com/yermakovaa/goit-react-hw-08-phonebook',
    preview: phonebookImg,
    info:
      'Phonebook application with the ability to register users and work with private collections of contacts.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'Redux' },
      { id: 'id-5', name: 'AJAX' },
      { id: 'id-6', name: 'REST API' },
      { id: 'id-7', name: 'Axios' },
      { id: 'id-8', name: 'Material-UI' },
      { id: 'id-9', name: 'Framer Motion' },
    ],
  },
];

export const commandProjects = [
  {
    id: 'id-1',
    label: 'BarberShop',
    link: 'https://zhivotenkoalex.github.io/barbershop/',
    repo: 'https://github.com/ZhivotenkoAlex/barbershop',
    preview: barbershopImg,
    info:
      'Responsive web page layout for BarberShop - a hair salon for men in Kyiv.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'JavaScript' },
    ],
  },
  {
    id: 'id-2',
    label: 'Filmoteka',
    repo: 'https://github.com/RomanVoznyy/final-project-js',
    preview: filmotekaImg,
    info: 'Team project Filmoteka - help yourself with choosing a movie.',
    link: 'https://romanvoznyy.github.io/final-project-js/',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Handlebars' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'AJAX' },
    ],
  },
];
