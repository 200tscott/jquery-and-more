const div = $('<div>Hello world!</div>');


const body = $('body');


body.append(div);


const chart = $('#myChart');


const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

let data = {
    labels: labels,
    datasets: [{
    label: 'First one',
    backgroundColor: 'rgb(255, 100, 100)',
    borderColor: 'rgb(4, 4, 4)',
    data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

let config = {
    type: 'line',
    data: data,
    options: {}
};

div.on('click', function(){
    alert("Hello world!");
    console.log('It is working!');
});







  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



const secondChart = $('#secondChart');



let myChart2 = new Chart(secondChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'white', 'blue'],
        datasets: [{
            label: 'Second One',
            data: [5, 10, 15],
            backgroundColor: [
                'rgb(255, 100, 100)',
                'rgb(255, 255, 255)',
                'rgb(14, 67,255)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

