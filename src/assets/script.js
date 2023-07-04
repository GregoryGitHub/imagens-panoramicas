var panoramas = [
  {
    id: 'foto1',
    img: 'http://192.168.0.104:5500/uploads/foto1.jpg',
    title: 'Foto 1'
  },
  {
    id: 'foto2',
    img: 'http://192.168.0.104:5500/uploads/foto1.jpg',
    title: 'Foto 2'
  },
  {
    id: 'foto3',
    img: 'http://192.168.0.104:5500/uploads/foto1.jpg',
    title: 'Foto 3'
  }
];

var currentIndex = 0;


function createSlider() {
  var container = document.getElementById('panorama');


  panoramas.forEach(function (panorama) {
    var panoramaElement = document.createElement('div');
    panoramaElement.id = panorama.id;
    container.appendChild(panoramaElement);


    var viewer = pannellum.viewer(panorama.id, {
      autoRotateInactivityDelay: 1000,
      orientationOnByDefault: true,
      panorama: panorama.img,
      autoLoad: true,
      title: panorama.title
    });
  });
}

// Chama a função para criar o slider ao carregar a página
window.addEventListener('load', createSlider);