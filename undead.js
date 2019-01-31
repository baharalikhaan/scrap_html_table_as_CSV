
window.onload = function() {
 
 

    $('table').each(function () {
        var $table = $(this);

        var $button = $("<button type='button'>");
        $button.text("Downlaod Excel");
        $button.insertBefore($table);

        $button.click(function () {
            var csv = $table.table2CSV({delivery:'value'});
        //   window.location.href = 'data:text/csv;charset=UTF-8,'
        //                       + encodeURIComponent(csv);
          
           var file = new Blob([csv], {type: csv});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, "Data.csv");
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = "Data.csv" ;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }

        });
    });
  
// Function to download data to a file

    /*
  //  document.getElementsByTagName('table')[1].appendChild(aButton);
     var a = document.getElementsByTagName('table');
     
     for(var i=0;i<a.length;i++)
     {
        var aButton = document.createElement('button');
        aButton.id = i;
        var t = document.createTextNode(i);    
        aButton.appendChild(t); 
        aButton.onclick = function(e) {
     
    alert(this.id);
        }

        aButton.insertBefore( document.getElementsByTagName('table')[i]);
        document.getElementsByTagName('table')[i].appendChild(aButton);
     }
*/
     
}
 