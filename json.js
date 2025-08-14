var data = {
    "gebuchte Zeiten letzter Monat": { 
        "headers": ["nicht abrechenbar", "Vertrag", "Auftrag", "verfügbare Arbeitstage"], 
        "rows": [ ["20", "19", "18", "17"] ] 
    }, 
    "gebuchte Zeiten dieser Monat": { 
        "headers": ["nicht abrechenbar", "Vertrag", "Auftrag", "verfügbare Arbeitstage"], 
        "rows": [ ["1", "2", "3", "4"] ] 
    }, 
    "Prognose": {
        "headers": ["nicht abrechenbar", "Vertrag", "Auftrag", "verfügbare Arbeitstage"], 
        "rows": [ ["9", "3", "1", "0"] ] 
    }        
  };
  
  var myJSON = JSON.stringify(data);
  document.querySelector('output').innerText = myJSON;


  