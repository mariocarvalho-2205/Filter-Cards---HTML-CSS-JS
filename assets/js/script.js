
const filter = document.querySelector('#filter')
const cards = document.querySelectorAll('.cards li')  // aqui precisa pegar a class e os 

filter.addEventListener('input', filterCards)

function filterCards() {     
    if (filter.value !== '') {       
        for (let card of cards) {           
            let title = card.querySelector('h2')            
            title = title.textContent.toLowerCase()            
            let filterLower = filter.value.toLowerCase()           
            if (!title.includes(filterLower)) {
                card.style.display = 'none'
            } else {
                card.style.display = 'block'
            }       
        }
    } else {
        for (let card of cards) {
            card.style.display = 'block'
        }        
    }
}
/*# Links Úteis

Explorer: https://rocketseat.com.br/explorer
Phosphor Icons: https://phosphoricons.com/
*/

// get filter element
// get cards elements

// add input event for the filter element

// filter function
  // if the filter is not empty
    // for each card of cards
      // get card heading (title)
      // tranform to lower case
      // transform filter text to lower case
      // if card title does not include the filter text
        // hide the card element
      // else
        // unhide the card element
  // else
    // for each card of cards
      // unhide the card element