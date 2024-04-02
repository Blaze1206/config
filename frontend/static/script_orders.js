function loadOrders(){
    let count = 1;
    let page = 1;
    let ordersPerPage = 21;
    fetch('/api/orders/')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(order => {
          if (order.is_visible==true && order.is_done==false){
            let list = document.getElementById('orders_list')
            let tr=document.createElement('tr')
            tr.className="page"+page
            let order_number = document.createElement('td')
            let order_number_link = document.createElement('a')
            order_number_link.setAttribute('href',"/order/"+order.id)
            order_number_link.setAttribute('target','_blank')
            order_number_link.innerText= order.id
            order_number.append(order_number_link)
            let good = document.createElement('td')
            good.innerText = order.item.name
            let amount = document.createElement('td')
            amount.innerText = order.amount
            let name = document.createElement('td')
            name.innerText = order.name
            let address = document.createElement('td')
            address.innerText = order.address
            let date = document.createElement('td')
            date.innerText = order.date
            let price = document.createElement('td')
            price.innerText = order.price
            tr.append(order_number,good,amount,name,address,date,price)
            list.appendChild(tr)
          }
          if(count%ordersPerPage===0){
            page++;
          }
          count++;  
        });
        let pages = document.getElementById('pages')
        for (let i = 0; i< page; i++){
            let button = document.createElement('button')
            button.innerText = i+1;
            button.addEventListener("click",function(){showhPage(i+1)})
            pages.appendChild(button)
        }
        showhPage(1)
    })
}

function showhPage(pageNumber){
    let pages = document.querySelectorAll('[class^="page"]');
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].classList.contains('page' + pageNumber)) {
            pages[i].style.display = 'table-row';
        } else {
            pages[i].style.display = 'none';
        }
        
    }
}

document.getElementById('deleted').addEventListener("change",function(){
    if(this.checked){
        let count = 1;
        let page = 1;
        let ordersPerPage = 21;
        fetch('/api/orders/')
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('orders_list').innerHTML="<tr><td>Rendelés szám</td><td>Termék</td><td>Mennyiség</td><td>Név</td><td>Cím</td><td>Dátum</td><td>Ár</td></tr>"
        data.forEach(order => {
          if (order.is_visible==false){
            let list = document.getElementById('orders_list')
            let tr=document.createElement('tr')
            tr.className="page"+page
            let order_number = document.createElement('td')
            let order_number_link = document.createElement('a')
            order_number_link.setAttribute('href',"/order/"+order.id)
            order_number_link.setAttribute('target','_blank')
            order_number_link.innerText= order.id
            order_number.append(order_number_link)
            let good = document.createElement('td')
            good.innerText = order.item.name
            let amount = document.createElement('td')
            amount.innerText = order.amount
            let name = document.createElement('td')
            name.innerText = order.name
            let address = document.createElement('td')
            address.innerText = order.address
            let date = document.createElement('td')
            date.innerText = order.date
            let price = document.createElement('td')
            price.innerText = order.price
            tr.append(order_number,good,amount,name,address,date,price)
            list.appendChild(tr)
          }
          if(order.is_visible==false && count%ordersPerPage===0){
            page++;
          }
          count++;  
        });
        document.getElementById('pages').innerHTML="";
        let pages = document.getElementById('pages')
        for (let i = 0; i< page; i++){
            let button = document.createElement('button')
            button.innerText = i+1;
            button.addEventListener("click",function(){showhPage(i+1)})
            pages.appendChild(button)
        }
        showhPage(1)
    });
    }
    else{
        let count = 1;
        let page = 1;
        let ordersPerPage = 21;
        fetch('/api/orders/')
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('orders_list').innerHTML="<tr><td>Rendelés szám</td><td>Termék</td><td>Mennyiség</td><td>Név</td><td>Cím</td><td>Dátum</td><td>Ár</td></tr>"
        data.forEach(order => {
          if (order.is_visible==true){
            let list = document.getElementById('orders_list')
            let tr=document.createElement('tr')
            tr.className="page"+page
            let order_number = document.createElement('td')
            let order_number_link = document.createElement('a')
            order_number_link.setAttribute('href',"/order/"+order.id)
            order_number_link.setAttribute('target','_blank')
            order_number_link.innerText= order.id
            order_number.append(order_number_link)
            let good = document.createElement('td')
            good.innerText = order.item.name
            let amount = document.createElement('td')
            amount.innerText = order.amount
            let name = document.createElement('td')
            name.innerText = order.name
            let address = document.createElement('td')
            address.innerText = order.address
            let date = document.createElement('td')
            date.innerText = order.date
            let price = document.createElement('td')
            price.innerText = order.price
            tr.append(order_number,good,amount,name,address,date,price)
            list.appendChild(tr)
          }
          if(order.is_visible==false && count%ordersPerPage===0){
            page++;
          }
          count++;  
        });
        document.getElementById('pages').innerHTML="";
        let pages = document.getElementById('pages')
        for (let i = 0; i< page; i++){
            let button = document.createElement('button')
            button.innerText = i+1;
            button.addEventListener("click",function(){showhPage(i+1)})
            pages.appendChild(button)
        }
        showhPage(1)
    });
    }
})


document.getElementById('deleted').addEventListener("change",function(){
    if(this.checked){
        let count = 1;
        let page = 1;
        let ordersPerPage = 21;
        fetch('/api/orders/')
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('orders_list').innerHTML="<tr><td>Rendelés szám</td><td>Termék</td><td>Mennyiség</td><td>Név</td><td>Cím</td><td>Dátum</td><td>Ár</td></tr>"
        data.forEach(order => {
          if (order.is_visible==false){
            let list = document.getElementById('orders_list')
            let tr=document.createElement('tr')
            tr.className="page"+page
            let order_number = document.createElement('td')
            let order_number_link = document.createElement('a')
            order_number_link.setAttribute('href',"/order/"+order.id)
            order_number_link.setAttribute('target','_blank')
            order_number_link.innerText= order.id
            order_number.append(order_number_link)
            let good = document.createElement('td')
            good.innerText = order.item.name
            let amount = document.createElement('td')
            amount.innerText = order.amount
            let name = document.createElement('td')
            name.innerText = order.name
            let address = document.createElement('td')
            address.innerText = order.address
            let date = document.createElement('td')
            date.innerText = order.date
            let price = document.createElement('td')
            price.innerText = order.price
            tr.append(order_number,good,amount,name,address,date,price)
            list.appendChild(tr)
          }
          if(order.is_visible==false && count%ordersPerPage===0){
            page++;
          }
          count++;  
        });
        document.getElementById('pages').innerHTML="";
        let pages = document.getElementById('pages')
        for (let i = 0; i< page; i++){
            let button = document.createElement('button')
            button.innerText = i+1;
            button.addEventListener("click",function(){showhPage(i+1)})
            pages.appendChild(button)
        }
        showhPage(1)
    });
    }
    else{
        let count = 1;
        let page = 1;
        let ordersPerPage = 21;
        fetch('/api/orders/')
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('orders_list').innerHTML="<tr><td>Rendelés szám</td><td>Termék</td><td>Mennyiség</td><td>Név</td><td>Cím</td><td>Dátum</td><td>Ár</td></tr>"
        data.forEach(order => {
          if (order.is_visible==true){
            let list = document.getElementById('orders_list')
            let tr=document.createElement('tr')
            tr.className="page"+page
            let order_number = document.createElement('td')
            let order_number_link = document.createElement('a')
            order_number_link.setAttribute('href',"/order/"+order.id)
            order_number_link.setAttribute('target','_blank')
            order_number_link.innerText= order.id
            order_number.append(order_number_link)
            let good = document.createElement('td')
            good.innerText = order.item.name
            let amount = document.createElement('td')
            amount.innerText = order.amount
            let name = document.createElement('td')
            name.innerText = order.name
            let address = document.createElement('td')
            address.innerText = order.address
            let date = document.createElement('td')
            date.innerText = order.date
            let price = document.createElement('td')
            price.innerText = order.price
            tr.append(order_number,good,amount,name,address,date,price)
            list.appendChild(tr)
          }
          if(order.is_visible==false && count%ordersPerPage===0){
            page++;
          }
          count++;  
        });
        document.getElementById('pages').innerHTML="";
        let pages = document.getElementById('pages')
        for (let i = 0; i< page; i++){
            let button = document.createElement('button')
            button.innerText = i+1;
            button.addEventListener("click",function(){showhPage(i+1)})
            pages.appendChild(button)
        }
        showhPage(1)
    });
    }
})

document.getElementById('done').addEventListener("change",function(){
    if(this.checked){
        let count = 1;
        let page = 1;
        let ordersPerPage = 21;
        fetch('/api/orders/')
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('orders_list').innerHTML="<tr><td>Rendelés szám</td><td>Termék</td><td>Mennyiség</td><td>Név</td><td>Cím</td><td>Dátum</td><td>Ár</td></tr>"
        data.forEach(order => {
          if (order.is_done==true){
            let list = document.getElementById('orders_list')
            let tr=document.createElement('tr')
            tr.className="page"+page
            let order_number = document.createElement('td')
            let order_number_link = document.createElement('a')
            order_number_link.setAttribute('href',"/order/"+order.id)
            order_number_link.setAttribute('target','_blank')
            order_number_link.innerText= order.id
            order_number.append(order_number_link)
            let good = document.createElement('td')
            good.innerText = order.item.name
            let amount = document.createElement('td')
            amount.innerText = order.amount
            let name = document.createElement('td')
            name.innerText = order.name
            let address = document.createElement('td')
            address.innerText = order.address
            let date = document.createElement('td')
            date.innerText = order.date
            let price = document.createElement('td')
            price.innerText = order.price
            tr.append(order_number,good,amount,name,address,date,price)
            list.appendChild(tr)
          }
          if(order.is_done==true && count%ordersPerPage===0){
            page++;
          }
          count++;  
        });
        document.getElementById('pages').innerHTML="";
        let pages = document.getElementById('pages')
        for (let i = 0; i< page; i++){
            let button = document.createElement('button')
            button.innerText = i+1;
            button.addEventListener("click",function(){showhPage(i+1)})
            pages.appendChild(button)
        }
        showhPage(1)
    });
    }
    else{
        let count = 1;
        let page = 1;
        let ordersPerPage = 21;
        fetch('/api/orders/')
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('orders_list').innerHTML="<tr><td>Rendelés szám</td><td>Termék</td><td>Mennyiség</td><td>Név</td><td>Cím</td><td>Dátum</td><td>Ár</td></tr>"
        data.forEach(order => {
          if (order.is_done==false){
            let list = document.getElementById('orders_list')
            let tr=document.createElement('tr')
            tr.className="page"+page
            let order_number = document.createElement('td')
            let order_number_link = document.createElement('a')
            order_number_link.setAttribute('href',"/order/"+order.id)
            order_number_link.setAttribute('target','_blank')
            order_number_link.innerText= order.id
            order_number.append(order_number_link)
            let good = document.createElement('td')
            good.innerText = order.item.name
            let amount = document.createElement('td')
            amount.innerText = order.amount
            let name = document.createElement('td')
            name.innerText = order.name
            let address = document.createElement('td')
            address.innerText = order.address
            let date = document.createElement('td')
            date.innerText = order.date
            let price = document.createElement('td')
            price.innerText = order.price
            tr.append(order_number,good,amount,name,address,date,price)
            list.appendChild(tr)
          }
          if(order.is_done==false && count%ordersPerPage===0){
            page++;
          }
          count++;  
        });
        document.getElementById('pages').innerHTML="";
        let pages = document.getElementById('pages')
        for (let i = 0; i< page; i++){
            let button = document.createElement('button')
            button.innerText = i+1;
            button.addEventListener("click",function(){showhPage(i+1)})
            pages.appendChild(button)
        }
        showhPage(1)
    });
    }
})

function search(){
  let searchItem = document.getElementById('search').value.toLowerCase();
  var elements = document.querySelectorAll('[class^="page"]');
  var load = false;
  elements.forEach(element => {
      let text = element.innerText.toLowerCase();
      if (searchItem=="" && load==false) {
          load=true
          document.getElementById('orders_list').innerHTML="<tr><td>Rendelés szám</td><td>Termék</td><td>Mennyiség</td><td>Név</td><td>Cím</td><td>Dátum</td><td>Ár</td></tr>"  
          loadOrders();
          
      }
      if (text.includes(searchItem) && searchItem!="") {
          element.style.display ='table-row'
          document.getElementById('pages').innerHTML="";
      }
      else{
          element.style.display ='none'
      }
  });
  
}