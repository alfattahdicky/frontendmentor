const i=document.getElementById("switchPricing");function o(){const t=document.createElement("div"),e=document.createElement("div");return e.className="mx-6 w-16 rounded-full p-4 relative cursor-pointer bg-gradientForward hover:bg-none hover:bg-gray-400",e.setAttribute("id","switch"),e.setAttribute("data-testid","switch"),e.innerHTML=`
    <div class="absolute ml-1 top-1 left-0 w-6 h-6 bg-grayishBlueLightness rounded-full transition duration-300 ease-in-out" data-testid="slider" id="slider"></div>
  `,t.appendChild(e),t}function s(){const t=o().children[0];i.insertBefore(t,i.children[1]);const e=t.querySelector("#slider");t.addEventListener("click",function(){e.classList.contains("translate-x-8")?e.classList.remove("translate-x-8"):e.classList.add("translate-x-8")})}async function d(){try{return await(await fetch("../../json/data.json")).json()}catch(t){return`failed json parsing ${t}`}}async function l(){return(await d()).pricing}function c(){const t=document.createElement("div"),e=document.createElement("div");return e.className=`inner-container mx-8 mt-12 mb-8 flex flex-col gap-8 lg:flex-row lg:items-center 
  lg:justify-center md:mx-16 lg:mx-32 lg:gap-0 lg:mt-16 lg:mb-12`,e.setAttribute("data-testid","innerContainer"),t.appendChild(e),t}async function u(){const t=document.getElementById("appCard"),e=c().children[0];try{const r=await l();for(const n in r){const a=p().children[0];a.className=`card rounded-lg p-6 font-bold text-center flex flex-col gap-6 lg:w-3/5 shadow-md lg:shadow-lg ${n==="professional"?"text-white bg-gradientForward lg:transform-gpu lg:py-12 lg:scale-105":"bg-white text-darkGrayishBlue"}`,a.innerHTML=`
        <p class="text-lg capitalize">${n}</p>
        <p class="text-4xl flex justify-center items-center pb-4 ${n==="professional"?"text-white":"text-black"}">$ 
        <span class="text-6xl pl-2 align-middle">${r[n].price}</span></p>
        <ul class="text-sm">
          <li class="border-b border-b-gray-300 border-t border-t-gray-400 py-3">${r[n].storage} Storage</li>
          <li class="my-5 border-b border-b-gray-400  pb-3">${r[n].user} Users Allowed</li>
          <li class="border-b border-b-gray-300 pb-3">Send up to ${r[n].sizeSend}</li>
        </ul>
      `,a.appendChild(g(n)),e.appendChild(a)}t.appendChild(e)}catch(r){return`${r}`}}function p(){const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("data-testid","card"),t.appendChild(e),t}function g(t){const e=document.createElement("div");return e.className=`mt-3 group rounded-md py-2 transition-all hover:outline-lightGrayishBlue hover:outline hover:outline-1 cursor-pointer ${t==="professional"?"bg-white hover:bg-transparent":"bg-gradientForward text-white hover:bg-none"}`,e.innerHTML=`
    <button class="font-bold uppercase text-sm ${t==="professional"?"bg-clip-text text-transparent bg-gradientForward tracking-wider group-hover:text-white":"transition ease-in duration-150 group-hover:bg-gradientForward group-hover:bg-clip-text group-hover:text-transparent tracking-wider group"}">Learn More</button>
  `,e}window.addEventListener("DOMContentLoaded",()=>{s(),u()});
