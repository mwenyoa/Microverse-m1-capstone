const speaker = [
  {
    id: 1,
    name: 'Joshua Selman',
    images: {
      img: './images/speakers/joshuaSelman.jpg',
      alt: 'Joshua Selman',
    },
    about: 'Senior Pastor of the Eternity Network International.',
    work: 'Apostle Joshua Selman is a Nigerian Gospel minister, instrumentalist, Chemical Engineer, conference speaker, and televangelist.',
  },
  {
    id: 2,
    name: 'Dr. Mensa otabil',
    images: {
      img: './images/speakers/mensaOtabil.jpg',
      alt: 'Dr. Mensa otabil',
    },
    about: 'Founder of International Central Gospel Church headquartered in Accra, Ghana.',
    work: 'Mensa Otabil is a Ghanaian Pastor, theologian, Motivational Speaker, and entrepreneur.',
  },
  {
    id: 3,
    name: 'Joel Osteen',
    images: {
      img: './images/speakers/joel-osteen.jpg',
      alt: 'team_3',
    },
    about: 'Pastor of charismatic Lakewood Church in  Houston, USA.',
    work: 'Joel Scott Osteen is an American pastor, televangelist, and author, based in Houston, Texas.',
  },
  {
    id: 4,
    name: 'Joyce Mayer',
    images: {
      img: './images/speakers/meyer.jpg',
      alt: 'Joyce Mayer',
    },
    about: 'President of Joyce Meyer Ministries.',
    work: 'Christian author, speaker and president of Joyce Meyer Ministries.',
  },
  {
    id: 5,
    name: 'Bishop David Oyedepo',
    images: {
      img: './images/speakers/bishopdavidOyedepo.jpg',
      alt: 'David Oyedepo',
    },
    about: 'Founder of Living Faith Church Worldwide.',
    work: 'David Olaniyi Oyedepo is a Nigerian preacher, Christian author, businessman, architect and the founder of the Living Faith Church Worldwide.',
  },
  {
    id: 6,
    name: 'Prof. Johnson suleman',
    images: {
      img: './images/speakers/suleman.jpeg',
      alt: 'team_6',
    },
    about: 'General overseer of Omega Fire Ministries International,',
    work: 'He is the bishop of The Potter House, a non-denominational American megachurch.',
  },
];

const teamContainer = document.querySelector('#Team .teams');

// Implementing the Flex card dynamically

function createCard(dataInfo) {
  const li = document.createElement('li');
  li.className = 'card d-flex';
  li.innerHTML = `<div class="card-img">
    <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
  </div>
  <div class="card-body">
    <h3>${dataInfo.name}</h3>
    <h4>${dataInfo.about}</h4>
    <p>${dataInfo.work}</p>
  </div>`;
  return li;
}

speaker.forEach((info) => {
  const card = createCard(info);
  teamContainer.appendChild(card);
});

// Implementing the Flex card dynamically

const teamList = document.querySelectorAll('#Team .teams li');
const moreBtn = document.querySelector('#Team button');
const btnSpan = document.querySelector('#Team button span');
const btnIcon = document.querySelector('#Team button i');

let state = false;

function displayMore() {
  if (!state) {
    teamList.forEach((team) => {
      team.style.display = 'flex';
    });
    btnSpan.textContent = 'LESS';
    btnIcon.classList.remove('fa', 'fa-chevron-down');
    btnIcon.classList.add('fa', 'fa-chevron-up');

    state = true;
  } else {
    teamList.forEach((team) => {
      team.style.display = 'none';
    });
    teamList[0].style.display = 'flex';
    teamList[1].style.display = 'flex';

    btnSpan.textContent = 'MORE';
    btnIcon.classList.remove('fa', 'fa-chevron-up');
    btnIcon.classList.add('fa', 'fa-chevron-down');

    state = false;
  }
}

moreBtn.addEventListener('click', displayMore);
