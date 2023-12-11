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

// Fix (6)

const fixInteraction = document.querySelector('nth-of-type(6)');

fixInteraction.addEventListener('click', fixHandler);

function fixHandler() {
  fixInteraction.classList.toggle('animation__fix');
}

// The (7)

const theInteraction = document.querySelector('nth-of-type(7)');

theInteraction.addEventListener('click', theHandler);

function theHandler() {
  theInteraction.classList.toggle('animation__the');
}


// Flow (8)

const flowInteraction = document.querySelector('nth-of-type(8)');

flowInteraction.addEventListener('click', flowHandler);

function flowHandler() {
  flowInteraction.classList.toggle('animation__flow');
}


// User (9)

const userInteraction = document.querySelector('nth-of-type(9)');

userInteraction.addEventListener('click', userHandler);

function userHandler() {
  userInteraction.classList.toggle('animation__user')
}


// Interaction (10)

const interactionInteraction = document.querySelector('nth-of-type(10)');

interactionInteraction.addEventListener('click', interactionHandler);

function interactionHandler() {
  interactionInteraction.classList.toggle('animation__interaction')
}

