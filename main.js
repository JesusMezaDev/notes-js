// me quedé en el minuto 1:44:02

'use strict';

import { $, addEventOnElements } from './src/js/utils'; 

const $sidebar = $('[data-sidebar]');
const $sidebarTogglers = $('[data-sidebar-toggler]');
const $overlay = $('[data-sidebar-overlay]');

addEventOnElements($sidebarTogglers, 'click', () => {
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});