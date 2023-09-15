import React from 'react'
import { createRoot } from 'react-dom/client';

import "../.css/style.css"

import Wrapper from './index'

const constructor = createRoot(document.getElementById('constructor'));
constructor.render(<Wrapper />);