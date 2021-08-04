import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faAddressCard, faSearch, faComment, faAngleUp, faFilter, faUser,
         faPlus, faSimCard, faEdit, faPlusCircle, faHeart, faGlobe} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faAddressCard, faSearch, faComment, faAngleUp, faFilter,
    faUser, faPlus, faSimCard, faEdit, faPlusCircle, faHeart, faGlobe)

ReactDOM.render(
    <Router>
       <App/>
    </Router>,
  document.getElementById('root')
);