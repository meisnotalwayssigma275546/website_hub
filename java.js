document.addEventListener("click", function(e) {
  var clickEffect = document.createElement("div");
  clickEffect.classList.add("click-effect");

  clickEffect.style.left = e.clientX + "px";
  clickEffect.style.top = e.clientY + "px";

  document.body.appendChild(clickEffect);

  setTimeout(function() {
      clickEffect.remove();
  }, 500); // Remove click effect after 500ms
});

const cursorShadow = document.createElement("div");
cursorShadow.classList.add("cursor-shadow");
document.body.appendChild(cursorShadow);

document.addEventListener("mousemove", (e) => {
    cursorShadow.style.left = `${e.clientX}px`;
    cursorShadow.style.top = `${e.clientY}px`;

    // Add a class to make the shadow a bit larger and more intense when moving
    cursorShadow.classList.add("active");

    // Remove the class after a small delay to return it to the normal size
    clearTimeout(cursorShadow.timeout);
    cursorShadow.timeout = setTimeout(() => {
        cursorShadow.classList.remove("active");
    }, 100);
});
