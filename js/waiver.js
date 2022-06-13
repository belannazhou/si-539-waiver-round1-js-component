// method to add one-third to all figures
const addOneThirdClass = () => {
	const container = document.querySelector(".container");
	const figures = container.querySelectorAll("figure");
	
	figures.forEach((element) => {
		element.classList.add("one-third");
	});
}

// method to listen on footer and remove it on click
const hideFooter = () => {
	const footer = document.querySelector("footer");
	
	footer.onclick = () => {
		footer.remove();
	};
}

// method to listen on the fifth figure and remove it on double click
const hideFifthFigure = () => {
	const container = document.querySelector(".container");
	const figures = container.querySelectorAll("figure");

	if (figures.length > 5) {
		const fifth = figures[4];

		fifth.ondblclick = () => {
			fifth.style.visibility = "hidden";
		}
	}
}

// method to listen on figure caption and change its font on hover
const changeCaptionFont = () => {
	const container = document.querySelector(".container");
	const figures = container.querySelectorAll("figure");
	
	figures.forEach((element) => {
		const caption = element.querySelector("figcaption");
		const style = window.getComputedStyle(caption);
		const font = style.getPropertyValue("font-family");
		
		caption.onmouseover = () => {
			caption.style.fontFamily = "cursive";
		}
		
		caption.onmouseout = () => {
			caption.style.fontFamily = font;
		}
	});
}

// method to listen to the tab and highlight the first caption
const tabCaption = () => {
	const container = document.querySelector(".container");
	const figures = container.querySelectorAll("figure");
	const jump = document.querySelector(".jump");
	jump.remove();
	
	if (figures.length > 0) {
		const first = figures[0];
		const caption = first.querySelector("figcaption");
		const style = window.getComputedStyle(caption);
		const font = style.getPropertyValue("font-family");
		
		caption.setAttribute("tabindex", 0);
		
		caption.onfocus = () => {
			caption.style.fontFamily = "cursive";
		}
		
		caption.onblur = () => {
			caption.style.fontFamily = font;
		}
	}
	
}

addOneThirdClass();
hideFooter();
hideFifthFigure();
changeCaptionFont();
tabCaption();