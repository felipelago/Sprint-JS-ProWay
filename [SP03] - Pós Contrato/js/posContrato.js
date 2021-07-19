function message() {
    alert('volta pra página inicial');
  }
  
  function titleClick() {
    alert('encaminha menu de crédito');
  }
  
  function buttonVisualizar() {
    alert('saldo mudou de visibilidade');
  }
  
  function buttonRenegocie(event) {
    event.preventDefault();
    alert('Renegocie seu crédito');
  }

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Crédito', 'Debito'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'variação do crédito anual',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

let container = document.getElementById('container');
let simbolo = document.getElementById('action');

simbolo.addEventListener('click',function(){
  let container = document.getElementById('container');

    if(container.style.display =='none'){
      container.style.display = 'block'
    }else{
      container.style.display = 'none'
    }
});

function olhoAberto(){
    document.getElementById("teste").src= "/img/EyeSlash.svg"

}
document.getElementById("teste").addEventListener("click", olhoAberto)

function olhoFechado(){
  document.getElementById("teste").src= "/img/eye-regular.svg"
}
document.getElementById("teste").addEventListener("click", olhoFechado)