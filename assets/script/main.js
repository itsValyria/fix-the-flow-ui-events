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
  sprintFiveInteraction.classList.add('animation__sprint-five');
  setTimeout(function(){
    sprintFiveInteraction.classList.remove('animation__sprint-five');
},5000); 
}

// Fix (6)

const fixInteraction = document.querySelector('a:nth-of-type(6)');

fixInteraction.addEventListener('click', fixHandler);

function fixHandler() {
  fixInteraction.classList.toggle('animation__fix');
}

// The (7)

const theInteraction = document.querySelector('a:nth-of-type(7)');
const kopjeThee = document.querySelector('.kopje-thee');

theInteraction.addEventListener('click', theHandler);

function theHandler() {
  kopjeThee.classList.toggle('active');
}


// Flow (8)

const flowInteraction = document.querySelector('a:nth-of-type(8)');

flowInteraction.addEventListener('click', flowHandler);

function flowHandler() {
  flowInteraction.classList.toggle('animation__flow');
}


// User (9)

const userInteraction = document.querySelector('a:nth-of-type(9)');
const emoji = document.querySelector('.emoji');
const text = document.querySelector('.text');

userInteraction.addEventListener('click', userHandler);

function userHandler() {
  emoji.classList.toggle('active');
  text.classList.toggle('hidden');
}


// Interface (10)

const interactionInterface = document.querySelector('a:nth-of-type(10)');

interactionInterface.addEventListener('click', interfaceHandler);

function interfaceHandler() {
  interactionInterface.classList.toggle('animation__interface');
}

// Code: Absolute Chaos!

const interactionCode = document.querySelector('a:nth-of-type(20)');

interactionCode.addEventListener('click', codeHandler);

function codeHandler() {
  interaction.classList.toggle('jump');
  frontendInteraction.classList.toggle('animation__frontend');
  designInteraction.classList.add('animation__design');
  ampersandInteraction.classList.toggle('animation__ampersand');
  developmentInteraction.classList.toggle('animation__development');
  sprintFiveInteraction.classList.add('animation__sprint-five');
  kopjeThee.classList.add('active');
  fixInteraction.classList.add('animation__fix');
  flowInteraction.classList.toggle('animation__flow');
  emoji.classList.add('active');
  text.classList.add('hidden');
  interactionInterface.classList.toggle('animation__interface');

  setTimeout(function(){
    designInteraction.classList.remove('animation__design');
    sprintFiveInteraction.classList.remove('animation__sprint-five');
    fixInteraction.classList.remove('animation__fix');
    kopjeThee.classList.remove('active');
    emoji.classList.remove('active');
    text.classList.remove('hidden');
},5000); 
}