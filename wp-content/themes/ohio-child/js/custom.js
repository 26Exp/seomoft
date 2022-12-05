


const grid = document.querySelector(".masonry-grid");

window.onload = () => {
  let options = {
    itemSelector: ".masonry-item",
    gutter: 30,
  };

  if (window.innerWidth < 1280) {
    options = {
      itemSelector: ".masonry-item",
      gutter: 30,
      columnWidth: 300,
      fitWidth: true,
    };
  }

if(grid) {
	const msnry = new Masonry(grid, options);
	
	if (window.innerWidth < 650) {
		msnry.destroy();
	}
}
};

document.addEventListener("DOMContentLoaded", () => {
  function accordrion() {
    const titleBox = document.querySelectorAll(".benefit-title");
	
    if(!titleBox[0]) return;
    
    // Activate first text_box
    let firstBodyName, firstBodyEl;

    firstBodyName = titleBox[0].getAttribute("data-text-id");
    firstBodyEl = document.getElementById(firstBodyName);

    firstBodyEl.style.maxHeight = firstBodyEl.scrollHeight + "px";

		if (!titleBox) return;
		
		const titlesContainer = document.querySelector(".masonry-grid");

    titleBox.forEach((title) => {
      let bodyName, bodyEl, elPos;

      bodyName = title.getAttribute("data-text-id");
      bodyEl = document.getElementById(bodyName);
      elPos = (titlesContainer.offsetHeight * 1.5);

      title.addEventListener("click", (e) => {
        closeAll();
        e.preventDefault();
        
        if(window.innerWidth < 1280 && window.innerWidth > 997) {
        	window.scroll(0, (elPos - 80));
        } else if(window.innerWidth < 997) {
        	window.scroll(0, elPos);
        }
        bodyEl.style.maxHeight = bodyEl.scrollHeight + "px";
      });
    });

    function closeAll() {
      titleBox.forEach((title) => {
        let bodyName, bodyEl;

        bodyName = title.getAttribute("data-text-id");
        bodyEl = document.getElementById(bodyName);

        bodyEl.style.maxHeight = null;
      });
    }
  }

  accordrion();
});