/**
 * @Author: Weily
 * @Date: 2019/4/9
 * @Description:
 * @Last Modified by: Weily
 * @Last Modified time: 2019/4/15
*/
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
const rootElement = document.getElementById('app');

import AppRouter from './../components/AppRouter';

render((<BrowserRouter><AppRouter /></BrowserRouter>), rootElement);
