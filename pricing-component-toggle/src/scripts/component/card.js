import dataPricing from  '../data/dataPricing';

// TODO: get data from dataPricing

async function getData() {
  const data = await dataPricing();

  return data.pricing;
}

// TODO: create template container card

/**
 * create container card append to id container
 */

function createInnerContainer() {
  const idContainer = document.createElement('div');
  
  const createInnerContainer = document.createElement('div');
  createInnerContainer.className = `inner-container mx-8 mt-12 mb-8 flex flex-col gap-8 lg:flex-row lg:items-center 
  lg:justify-center md:mx-16 lg:mx-32 lg:gap-0 lg:mt-16 lg:mb-12`;
  createInnerContainer.setAttribute('data-testid','innerContainer');

  idContainer.appendChild(createInnerContainer);

  return idContainer;
}

/**
 * Create element card 
 */

async function createCardElement() {
  const appCardEl = document.getElementById('appCard');
  const innerContainer = createInnerContainer().children[0];

  try {
    const data = await getData();
    for(const object in data) {
      const cardWrap = cardWrapElement().children[0];
      cardWrap.className = `card rounded-lg p-6 font-bold text-center flex flex-col gap-6 lg:w-3/5 shadow-md lg:shadow-lg ${object === 'professional' ? `text-white bg-gradientForward lg:transform-gpu lg:py-12 lg:scale-105` : `bg-white text-darkGrayishBlue`}` ;
    
      cardWrap.innerHTML = `
        <p class="text-lg capitalize">${object}</p>
        <p class="text-4xl flex justify-center items-center pb-4 ${object === 'professional' ? "text-white": "text-black"}">$ 
        <span class="text-6xl pl-2 align-middle">${data[object].price}</span></p>
        <ul class="text-sm">
          <li class="border-b border-b-gray-300 border-t border-t-gray-400 py-3">${data[object].storage} Storage</li>
          <li class="my-5 border-b border-b-gray-400  pb-3">${data[object].user} Users Allowed</li>
          <li class="border-b border-b-gray-300 pb-3">Send up to ${data[object].sizeSend}</li>
        </ul>
      `;

      cardWrap.appendChild(buttonCardElement(object));
      
      innerContainer.appendChild(cardWrap);
    }

    appCardEl.appendChild(innerContainer);
    // return appCardEl;
  }catch(err) {
    return `${err}`;
  }
}

function cardWrapElement() {
  const divEl = document.createElement('div')
  const cardWrap = document.createElement('div');
  
  cardWrap.setAttribute('data-testid', 'card');

  divEl.appendChild(cardWrap);

  return divEl;
}

function buttonCardElement(object) {
  const wrapButton = document.createElement('div');
  wrapButton.className = `mt-3 group rounded-md py-2 transition-all hover:outline-lightGrayishBlue hover:outline hover:outline-1 cursor-pointer ${object === 'professional' ? 'bg-white hover:bg-transparent' : 'bg-gradientForward text-white hover:bg-none'}`;

  wrapButton.innerHTML = `
    <button class="font-bold uppercase text-sm ${object === 'professional' ? 'bg-clip-text text-transparent bg-gradientForward tracking-wider group-hover:text-white' : 'transition ease-in duration-150 group-hover:bg-gradientForward group-hover:bg-clip-text group-hover:text-transparent tracking-wider group' }">Learn More</button>
  `;
  return wrapButton;
}

export {createInnerContainer, createCardElement ,cardWrapElement}




