//*********** animal array ***********

let animals = {
  items: [
    "meerkat",
    "aardvark",
    "addax",
    "alligator",
    "alpaca",
    "anteater",
    "antelope",
    "aoudad",
    "ape",
    "argali",
    "armadillo",
    "baboon",
    "badger",
    "basilisk",
    "bat",
    "bear",
    "beaver",
    "bighorn",
    "bison",
    "boar",
    "budgerigar",
    "buffalo",
    "bull",
    "bunny",
    "burro",
    "camel",
    "canary",
    "capybara",
    "cat",
    "chameleon",
    "chamois",
    "cheetah",
    "chimpanzee",
    "chinchilla",
    "chipmunk",
    "civet",
    "coati",
    "colt",
    "cougar",
    "cow",
    "coyote",
    "crocodile",
    "crow",
    "deer",
    "dingo",
    "doe",
    "dung beetle",
    "dog",
    "donkey",
    "dormouse",
    "dromedary",
    "duckbill platypus",
    "dugong",
    "eland",
    "elephant",
    "elk",
    "ermine",
    "ewe",
    "fawn",
    "ferret",
    "finch",
    "fish",
    "fox",
    "frog",
    "gazelle",
    "gemsbok",
    "gila monster",
    "giraffe",
    "gnu",
    "goat",
    "gopher",
    "gorilla",
    "grizzly bear",
    "ground hog",
    "guanaco",
    "guinea pig",
    "hamster",
    "hare",
    "hartebeest",
    "hedgehog",
    "highland cow",
    "hippopotamus",
    "hog",
    "horse",
    "hyena",
    "ibex",
    "iguana",
    "impala",
    "jackal",
    "jaguar",
    "jerboa",
    "kangaroo",
    "kitten",
    "koala",
    "lamb",
    "lemur",
    "leopard",
    "lion",
    "lizard",
    "llama",
    "lovebird",
    "lynx",
    "mandrill",
    "mare",
    "marmoset",
    "marten",
    "mink",
    "mole",
    "mongoose",
    "monkey",
    "moose",
    "mountain goat",
    "mouse",
    "mule",
    "musk deer",
    "musk ox",
    "muskrat",
    "mustang",
    "mynah bird",
    "newt",
    "ocelot",
    "okapi",
    "opossum",
    "orangutan",
    "oryx",
    "otter",
    "ox",
    "panda",
    "panther",
    "parakeet",
    "parrot",
    "peccary",
    "pig",
    "octopus",
    "thorny devil",
    "starfish",
    "blue crab",
    "snowy owl",
    "chicken",
    "rooster",
    "bumble bee",
    "eagle owl",
    "polar bear",
    "pony",
    "porcupine",
    "porpoise",
    "prairie dog",
    "pronghorn",
    "puma",
    "puppy",
    "quagga",
    "rabbit",
    "raccoon",
    "ram",
    "rat",
    "reindeer",
    "rhinoceros",
    "salamander",
    "seal",
    "sheep",
    "shrew",
    "silver fox",
    "skunk",
    "sloth",
    "snake",
    "springbok",
    "squirrel",
    "stallion",
    "steer",
    "tapir",
    "tiger",
    "toad",
    "turtle",
    "vicuna",
    "walrus",
    "warthog",
    "waterbuck",
    "weasel",
    "whale",
    "wildcat",
    "bald eagle",
    "wolf",
    "wolverine",
    "wombat",
    "woodchuck",
    "yak",
    "zebra",
    "zebu",
  ],
};

var generateBtn1 = document.getElementById("generateBtn1");
var generateBtn2 = document.getElementById("generateBtn2");
var generateInput1 = document.getElementById("generateInput1");
var generateInput2 = document.getElementById("generateInput2");
let number = "8";

function makeCard(image, name) {
  return `<div class="col-lg-3 col-md-4 col-sm-6 col-12 px-5">
    <div class="row">
      <div class="col shadow animal-list-item">
        <img class="" src="${image}" alt="${name}" />
        <h4 class="animal-name ml-3 my-2">${name}</h4>
      </div>
    </div>
    </div>`;
}

function generateCards(arr) {
  const mainDiv = document.getElementById("main-div");
  mainDiv.innerHTML = "";
  arr.forEach((value) => {
    let name = value.replace(" ", "_");
    let imagePath = `./image/${name}.webp`;
    mainDiv.innerHTML += makeCard(imagePath, value);
  });
}

function shuffleAnimals() {
  let animalsList = animals.items;
  let generatedArray = [];
  while (generatedArray.length < number) {
    var r = Math.floor(Math.random() * animalsList.length) + 1;
    if (generatedArray.indexOf(animalsList[r]) === -1)
      generatedArray.push(animalsList[r]);
  }
  generateCards(generatedArray);
}

function CB(event) {
  generateInput1.value = event.target.value;
  generateInput2.value = event.target.value;
  number = event.target.value;
}

generateInput1.addEventListener("change", CB);
generateInput2.addEventListener("change", CB);

generateBtn1.addEventListener("click", shuffleAnimals);
generateBtn2.addEventListener("click", shuffleAnimals);

// for initial load
shuffleAnimals();
