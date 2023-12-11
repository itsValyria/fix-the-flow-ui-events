let interaction = document.querySelector('a:nth-of-type(12)');

interaction.addEventListener('click', jumpHandler);
interaction.addEventListener('animationend', jumpHandler);

function jumpHandler() {
  interaction.classList.toggle('jump');
}

// Mijn code

// Frontend (1)

const frontendInteraction = document.querySelector('a:nth-of-type(1)');

frontendInteraction.addEventListener('click', frontendHandler);

function frontendHandler() {
  frontendInteraction.classList.toggle('animation__frontend');
}

// Design (2)

const designInteraction = document.querySelector('a:nth-of-type(2)');

designInteraction.addEventListener('click', designHandler);

function designHandler() {
  designInteraction.classList.toggle('animation__design');
}

// & or Ampersand (3)

const ampersandInteraction = document.querySelector('a:nth-of-type(3)');


ampersandInteraction.addEventListener('click', ampersandHandler);

function ampersandHandler() {
  ampersandInteraction.classList.toggle('animation__ampersand');
}

// Development (4)

const developmentInteraction = document.querySelector('a:nth-of-type(4)');

developmentInteraction.addEventListener('click', developmentHandler);

function developmentHandler() {
  developmentInteraction.classList.toggle('animation__development');
}

// Sprint 5 (5)

const sprintFiveInteraction = document.querySelector('a:nth-of-type(5)');

sprintFiveInteraction.addEventListener('click', sprintFiveHandler);

function sprintFiveHandler() {
  developmentInteraction.classList.toggle('animation__sprint-five');
}

// 