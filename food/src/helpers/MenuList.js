import Salad from '../assets/salad.jpg';
import Pizza from '../assets/pizza.jpg';
import Sushi from '../assets/sushi.jpg';
import Drings from '../assets/drings.jpg';
import Hamburger from '../assets/hamburger.jpg';
import Dessert from '../assets/desserts.jpg';
import { Link } from 'react-router-dom';

export const MenuList = [
    {
        name: "Salad",
        image: Salad,
        link: <Link to='/salad'>LOOK MORE</Link>
    },
    {
        name: "Pizza",
        image: Pizza,
        link: <Link to='/pizza'>LOOK MORE</Link>
    },
    {
        name: "Sushi",
        image: Sushi,
        link: <Link to='/sushi'>LOOK MORE</Link>
    },
    {
        name: "Drings",
        image: Drings,
        link: <Link to='/drings'>LOOK MORE</Link>
    },
    {
        name: "Hamburger",
        image: Hamburger,
        link: <Link to='/hamburgers'>LOOK MORE</Link>
    },
    {
        name: "Dessert",
        image: Dessert,
        link: <Link to='/dessert'>LOOK MORE</Link>
    }
]