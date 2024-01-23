$(document).ready(function () {

// Page Troupeau
    Tableau();
    $("#Ovin").hide();
    $("#TitreOvin").hide();
    ChoixID_Troupeau();
    $("#choixID_Troupeau").change(function () {
      $("h2").hide();
      TableauOvin()
      $("#Ovin").show();
      $("#TitreOvin").show();
      $("#Femelle").hide();
      $("#Male").hide();

    })

//Page Traitement
    ChoixID_ES();
    $("#Traitement").hide();
    $("#poids").hide();
    $("#choixID_ES").change(function () {
      //Liste_traitement();
      Poids();
      $("#poids").show();
    })
    //TitreTabPoids();

});

function ChoixID_ES(){
	$.ajax({
		url: "D:/Moi/Site/Officiel/www/WS/WSListeragneautest.php",
    //url: "D:/Moi/Site/Officiel/www/WS2/WSListerAgneaux.php" ,
    //url: "http://172.17.1.20/~adebrie/ProjetOvins/WSListerAgneaux.php",
		dataType: "json",
		success: function (id) {
              console.log( "Il y a " + id.length + " id");
              for (var i = 0; i < id.length; i++) {
             var option = '<option value="' + id[i] + '"' + '>' + id[i]  + "</option>";
                  $("#choixID_ES").append(option)
              }
          }
    });
}
function ChoixID_Troupeau(){
	$.ajax({
		url: "D:/Moi/Site/Officiel/www/WS/WSListeragneautest.php",
    //url: "D:/Moi/Site/Officiel/www/WS2/WSListerAgneaux.php",
    //url: "http://172.17.1.20/~adebrie/ProjetOvins/WSListerAgneaux.php",
		dataType: "json",
		success: function (id) {
              for (var i = 0; i < id.length; i++) {
             var option = '<option value="' + id[i] + '"' + '>' + id[i]  + "</option>";
                  $("#choixID_Troupeau").append(option)
              }
          }
    });
}
function TableauOvin() {
  $("#Ovin").html("<tr> <th> ID </th> <th> ID Père </th> <th> ID Mère </th> <th> Typage </th> <th> Poids </th> <th> Naissance </th> </tr>");
    $.ajax( {
        url: "D:/Moi/Site/Officiel/www/WS/troupeau.php" + $("#choixID_Troupeau").val(),
        //url : "D:/Moi/Site/Officiel/www/WS2/WSagneaux.php" + $("#choixID_Troupeau").val(),
        //url: "http://172.17.1.20/~obalde/ProjetOvins/WSagneaux.php/?id_bete=" + $("#choixID_Troupeau").val(),
        dataType:"json",
         success: function (donnees) {
          console.log(donnees);
          var ligne = " <tr> <td> " + donnees.id_bete + " </td> <td> " + donnees.id_Pere + " </td> <td> " + donnees.id_Mere +  " </td> <td> " + donnees.Type +  " </td> <td> " + donnees.Poids +  " kg  </td> <td> " + donnees.dateNaissance +  " </td> </tr> ";
          $("#Ovin").append(ligne)
       }
    });
}


function Tableau() {
  $("#Male").html("<tr> <th> ID </th> <th> ID Père </th> <th> ID Mère </th> <th> Typage </th> <th> Poids </th> <th> Naissance </th> </tr>");
  $("#Femelle").html("<tr> <th> ID </th> <th> ID Père </th> <th> ID Mère </th> <th> Poids </th> <th> Naissance </th> </tr>");
    $.ajax( {
        url: "D:/Moi/Site/Officiel/www/WS/Troupeau2.php",
        //url: "D:/Moi/Site/Officiel/www/WS2/WStroupeau.php",
        //url: "http://172.17.1.20/~obalde/ProjetOvins/WStroupeau.php",
        dataType:"json",
         success: function (donnees) {
          console.log(donnees.Male);
          for (var i = 0; i < donnees.Male.length; i++) {
          var ligne = " <tr> <td> " + donnees.Male[i].id_bete + " </td> <td> " + donnees.Male[i].id_Pere + " </td> <td> " + donnees.Male[i].id_Mere +  " </td> <td> " + donnees.Male[i].Type +  " </td> <td> " + donnees.Male[i].Poids +  " kg  </td> <td> " + donnees.Male[i].dateNaissance +  " </td> </tr> ";
          $("#Male").append(ligne)
          }
         console.log(donnees.Femelle);
         for (var i = 0; i < donnees.Femelle.length; i++) {
         var ligne = " <tr> <td> " + donnees.Femelle[i].id_bete + " </td> <td> " + donnees.Femelle[i].id_Pere + " </td> <td> " + donnees.Femelle[i].id_Mere +  " </td> <td> " + donnees.Femelle[i].Poids +  " kg  </td> <td> " + donnees.Femelle[i].dateNaissance +  " </td> </tr> ";
         $("#Femelle").append(ligne)
         }
       }
    });
}
function Poids() {
  $("#poids").html("<tr> <th> Poids Actuel </th> <th> Poids 3 jours </th> <th> Poids 10 jours </th> <th> Poids 30 jours </th> </tr>");
  poids = [];
    $.ajax( {
        url: "D:/Moi/Site/Officiel/www/WS/troupeau.php" + $("#choixID_ES").val(),
        //url: "D:/Moi/Site/Officiel/www/WS2/WSagneaux.php" + $("#choixID_ES").val(),
        //url: "http://172.17.1.20/~adebrie/ProjetOvins/WSagneaux.php/?id_bete=" + $("#choixID_ES").val(),
        dataType:"json",
         success: function (poids) {
          console.log("Poids Actuel: " + poids.Poids + "  Poids 3 Jours: " + poids.Poids_3j + "  Poids 10 Jours: " + poids.Poids_10j + "  Poids 30 Jours: " + poids.Poids_10j );
          var ligne = " <tr> <td> " + poids.Poids + " </td> <td> " + poids.Poids_3j+ " </td> <td> " + poids.Poids_10j + " </td> <td> "  + poids.Poids_30j+ " </td> </tr> ";
          $("#poids").append(ligne)
          var timestamp = Date.parse(poids.dateNaissance);
          poids.push( [ timestamp , poids.Poids ] );
          dessinerCourbe();
        }

    });
}
function dessinerCourbe() {
  $('#courbe').highcharts({
    chart: {
      type: 'line'
    },
      title: {
          text: 'Courbe de Poids'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis:{
          title:{
            text: 'Poids'
          }
      },
      plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
      series: [{
          name: 'Poids',
          data: poids
      }]
  });

}
/*function Liste_traitement() {
  $("#Traitement").html("<tr> <th>Liste traitement</th> <th>Date Dernier Traitement</th> <th>Date Prochain Traitement</th> </tr>");
    $.ajax( {
        url: "http://172.17.1.20/~obalde/ProjetOvins/WSListerTraitement.php/?id_bete=" + $("#choixID_ES").val(),
        dataType:"json",
        success: function (liste) {
        console.log(liste);
          var ligne = " <tr> <td> " + liste.Vermifuge + " </td> <td> " + liste.date_traitement-vermifuge + " </td> <td> " + liste.date_prochain-vermifuge + " </td> </tr>"
          + " <tr> <td> " + liste.Enterotoxemie + " </td> <td> " + liste.date_traitement-enterotoxemie + " </td> <td> " + liste.date_prochain-enterotoxemie + " </td> </tr>"
           + " <tr> <td> " + liste.Douve + " </td> <td> " + liste.date_traitement-douve + " </td> <td> " + liste.date_prochain-douve + " </td> </tr>"
           + " <tr> <td> " + liste.Inopinee + " </td> <td> " + liste.date_traitement-inopinee + " </td> </tr>";
          $("#Traitement").append(ligne)

        }
    });
}

 function TitreTabTraitement(){
  $.ajax({

      dataType: "json",
      success: function (titre) {
          var texte = "Liste de traitement #" + $("choixID_ES").val();
          $("#TitreTab").append(texte)
      }
  });
}

function TitreTabPoids(){
 $.ajax({

     dataType: "json",
     success: function (titre) {
         var texte = "Évolution du poids de l'ovin #" + $("choixID_ES").val();
         $("#TitreTab").append(texte)
     }
 });
}*/






/*function Tableauid() {
  $("#ovins").html("<tr> <th> ID </th> <th> ID Père </th> <th> ID Mère </th> <th> Typage </th> <th> Poids </th> <th> Naissance </th> </tr>");
    $.ajax( {
        url: "http://172.17.1.20/~obalde/ProjetOvins/WSagneaux.php/?id_bete=" + $("#choixID").val(),
        dataType:"json",
         success: function (donnees) {
          console.log(donnees);
          for (var i = 0; i < donnees.length; i++) {
          var ligne = " <tr> <td> " + donnees.id_bete + " </td> <td> " + donnees.id_Pere + " </td> <td> " + donnees.id_Mere +  " </td> <td> " + donnees.Type +  " </td> <td> " + donnees.Poids +  " kg  </td> <td> " + donnees.dateNaissance +  " </td> </tr> ";
          $("#Male").append(ligne)
          }
       }
    });
}*/
