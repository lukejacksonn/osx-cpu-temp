const $ = x => document.querySelector(x);

const getData = () => {
  glu('./osx-cpu-temp').then(data => {
    $('#temperature').innerText = data.replace(/\s/, '');
  });
  glu('./osx-cpu-temp -f').then(data => {
    const speed = data.match(/\d+\sRPM.*/);
    $('#fans').innerText = speed;
  });
};

setInterval(getData, 1000);
getData();
