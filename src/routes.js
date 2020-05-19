// import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Store from './components/Store/Store'
import Carts from './components/Cart/Carts'
import Partnerships from './components/Partnerships'
import Concept from './components/Concept'
import SignUp from './components/SignUp/SignUp'
import Logins from './components/Login/Logins'

export const routes = [
  { path:'/', component: Store, name: 'Store' },
  { path:'/contact', component: Contact, name: 'Contact' },
  { path:'/store', component: Store, name: 'Store' },
  { path: '/cart', component: Carts, name: 'Cart' },
  { path: '/partnerships', component: Partnerships, name: 'Partnerships' },
  { path: '/concept', component: Concept, name: 'Concept' },
  { path: '/logins', component: Logins, name: 'Logins' },
  { path: '/signUp', component: SignUp, name: 'SignUp' }
];


