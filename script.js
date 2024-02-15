const runawayBtn = document.getElementById("runawaybtn");

runawayBtn.addEventListener("mousemove", () => {
  const maxX = window.innerWidth - runawayBtn.offsetWidth;
  const maxY = window.innerHeight - runawayBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  runawayBtn.style.position = "absolute"; // Add this line
  runawayBtn.style.left = `${randomX}px`;
  runawayBtn.style.top = `${randomY}px`;
});

function runAway() {
  const runawayBtn = document.getElementById("runawaybtn");

  runawayBtn.addEventListener("mousemove", () => {
    const maxX = window.innerWidth - runawayBtn.offsetWidth;
    const maxY = window.innerHeight - runawayBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    runawayBtn.style.position = "absolute"; // Add this line
    runawayBtn.style.left = `${randomX}px`;
    runawayBtn.style.top = `${randomY}px`;
  });
}

function onClickYes() {
  document.getElementById("teehee").src = "inlove.gif";
  document.getElementById("yesbtn").style.display = "none";
  document.getElementById("runawaybtn").style.display = "none";
  document.getElementById("afterYesText").style.display = "block";
}
