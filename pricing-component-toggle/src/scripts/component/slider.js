const switchPricingEl = document.getElementById('switchPricing');

function createSlider() {
  const containerDiv = document.createElement('div');

  const switchDiv = document.createElement('div');
  switchDiv.className = 'mx-6 w-16 rounded-full p-4 relative cursor-pointer bg-gradientForward hover:bg-none hover:bg-gray-400';
  switchDiv.setAttribute('id', 'switch');
  switchDiv.setAttribute('data-testid', 'switch');

  switchDiv.innerHTML = `
    <div class="absolute ml-1 top-1 left-0 w-6 h-6 bg-grayishBlueLightness rounded-full transition duration-300 ease-in-out" data-testid="slider" id="slider"></div>
  `;

  containerDiv.appendChild(switchDiv);

  return containerDiv;
}

function clickSlider() {
  const switchDiv = createSlider().children[0];
  switchPricingEl.insertBefore(switchDiv, switchPricingEl.children[1]);
  const sliderEl = switchDiv.querySelector('#slider');

  switchDiv.addEventListener('click', function() {
    if(sliderEl.classList.contains('translate-x-8')) {
      sliderEl.classList.remove('translate-x-8');
    }else {
      sliderEl.classList.add('translate-x-8');
    }
  });
}

export { clickSlider, createSlider }