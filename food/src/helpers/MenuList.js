import Salad from '../assets/salad.jpg';
import Pizza from '../assets/pizza.jpg';
import Sushi from '../assets/sushi.jpg';
import Drings from '../assets/drings.jpg';
import Hamburger from '../assets/hamburger.jpg';
import Dessert from '../assets/desserts.jpg';
import { Link } from 'react-router-dom';

export const MenuList = [
    {
        name: "Салати",
        image: Salad,
        link: <Link to='/salad'>Виж още</Link>
    },
    {
        name: "Пици",
        image: Pizza,
        link: <Link to='/pizza'>Виж още</Link>
    },
    {
        name: "Сушита",
        image: Sushi,
        link: <Link to='/sushi'>Виж още</Link>
    },
    {
        name: "Хамбургери",
        image: Hamburger,
        link: <Link to='/hamburgers'>Виж още</Link>
    },
    {
        name: "Десерти",
        image: Dessert,
        link: <Link to='/dessert'>Виж още</Link>
    }
]