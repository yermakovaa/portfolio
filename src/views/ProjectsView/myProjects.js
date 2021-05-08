import barbershopImg from '../../assets/images/previewProjects/barbershop.png';
import filmotekaImg from '../../assets/images/previewProjects/filmoteka.png';
import webStudioImg from '../../assets/images/previewProjects/webStudio.png';
import webDevImg from '../../assets/images/previewProjects/webDev.png';
import imageFinder from '../../assets/images/previewProjects/imageFinder.png';
import weatherImg from '../../assets/images/previewProjects/weather.png';
import moviesImg from '../../assets/images/previewProjects/movies.png';
import phonebookImg from '../../assets/images/previewProjects/phonebook.png';
import proTestImg from '../../assets/images/previewProjects/proTest.png';

export const ownProjects = [
  {
    id: 'id-6',
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
  {
    id: 'id-5',
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
      { id: 'id-6', name: 'Material-UI' },
      { id: 'id-7', name: 'Slugify' },
    ],
  },
  {
    id: 'id-4',
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
    id: 'id-3',
    label: 'Image Finder',
    link: 'https://yermakovaa.github.io/image-finder/',
    repo: 'https://github.com/yermakovaa/image-finder',
    preview: imageFinder,
    info:
      'Keyword search image app. The public image search service Pixabay was used for HTTP requests.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Axios' },
    ],
  },
  {
    id: 'id-1',
    label: 'Web Studio',
    link: 'https://yer-web-studio.netlify.app/',
    repo: 'https://github.com/yermakovaa/web-studio',
    preview: webStudioImg,
    info:
      'Responsive web page layout Web Studio - effective solutions for your business.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
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
      { id: 'id-3', name: 'BEM' },
    ],
  },
];

export const commandProjects = [
  {
    id: 'id-3',
    label: 'PRO TEST',
    repo: 'https://github.com/IvanFesenko/ProTestFront',
    preview: proTestImg,
    info:
      'This app will help you find weak points in knowledge for a QA Engineer so that you can strengthen it.',
    link: 'https://protest-fsdev.netlify.app/',
    tech: [
      { id: 'id-1', name: 'React.js' },
      { id: 'id-2', name: 'Redux' },
      { id: 'id-3', name: 'Axios' },
      { id: 'id-4', name: 'Material-UI' },
      { id: 'id-5', name: 'Styled components' },
      { id: 'id-6', name: 'Node.js' },
      { id: 'id-7', name: 'Mongoose' },
      { id: 'id-8', name: 'Express' },
      { id: 'id-9', name: 'Swagger' },
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
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Parcel' },
    ],
  },
];
