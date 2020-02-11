import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Store from './components/Store/Store'
import Carts from './components/Cart/Carts'
import Suppliers from './components/Suppliers'
import Concept from './components/Concept'

export const routes = [
  { path:'/', component: Home, name: 'Home' },
  { path:'/contact', component: Contact, name: 'Contact' },
  { path:'/store', component: Store, name: 'Store' },
  { path: '/cart', component: Carts, name: 'Cart' },
  { path: '/suppliers', component: Suppliers, name: 'Suppliers' },
  { path: '/concept', component: Concept, name: 'Concept' }
];


