document.getElementById('item').addEventListener("change",function(){
    id=document.getElementById('item').value
    fetch('/api/good/')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            if (element.id==id) {
                if(element.discount==0){
                price=element.price_out
                }
                else{
                    price=element.price_out*(element.discount/100)
                }
                document.getElementById('price').value=price
                document.getElementById('amount').setAttribute('max',element.amount)
            }
                
            
        });
    })
    
    
})