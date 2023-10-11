'use strict';

/**
 * 
 * @param {String} element - Elemento(s) que se está buscando.
 * @returns Array<HTMLElement> - Un arreglo de elementos del DOM.
 */
const $ = (element = '') => {
    if (element.length === 0) return null;

    const elements = document.querySelectorAll(element);

    if (elements.length === 1) return elements[0];

    return elements;
}

/**
 * 
 * @param {Array<HTMLElement>} $elements - Un arreglo de elementos del DOM para adjuntarles el event listener.
 * @param {string} eventType - El tipo de evento que se va a adjuntar. (por ejemplo: 'mouseover', 'mouseout','click', 'keydown', etc.)
 * @param {Function} callback - La función que se va a ejecutar cuando ocurra el evento.
 */
const addEventOnElements = function ($elements, eventType, callback) {
    for (let $element of $elements) {
        $element.addEventListener(eventType, callback);
    }
}


export {
    $,
    addEventOnElements
}