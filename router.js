const route = event => {
   event = event || window.event;
   event.preventDefault();
   window.history.pushState({}, "", event.target.href);
   handleLocation();
};

async function handleLocation() {
   const path = window.location.pathname + "";

   const html = await fetch(path).then(data => data.text());
   // console.log(html);
   document.querySelector(".main-container").innerHTML = html;

   window.history.pushState({}, "", "/");
}

// window.onpopstate = handleLocation;

document
   .querySelectorAll(".--nav-btn")
   .forEach(btn => btn.addEventListener("click", route));
