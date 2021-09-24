const Designs=function(name,design,size) {
    this.name = name;
    this.design = design;
    this.size= size;
   
   //  creating a funtion that will use the above constructor to return their total sum ""
       Designs.prototype.price = function(){
       return size + design   
   }

}



$(document).ready(function() {
    let total=0;
    $("#Add").click(function(event) {
        event.preventDefault();
      let Dname =$("#name option:selected").val();
      let Ddesign= parseInt($("#design option:selected").val());
      let Dsize= parseInt($("#size option:selected").val());
     

      let new_order=new Designs(Dname,Ddesign,Dsize);

      let price =(new_order.price())
      total+=price


      var Name= $("#name option:selected").text();
      var Pdesign= $("#design option:selected").text();
    //   var Psize= $("#topping option:selected").text();

      $("tbody:last").append("<tr>"+"<td>"+Name+"</td>"+"<td>"+Pdesign+"</td>"+"<td>"+"<td>"+price+ "</td>"+"</tr>")
      
    })

    $("button#final").click(function(event){
        $("#price:last").text(total);
        $("#last").show();
        
        
            alert("thank you we shall link you to our designers")
      
  
    })
    });
