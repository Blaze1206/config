



function loadGoods(){
let count = 1;
let page = 1;
let itemsPerPage=21;
fetch('/api/good/')
.then(res => res.json())
.then(data => {
    data.forEach(good => {
        TODO:"rövidebbre csinálni,oldalanként x elem töltsön be"
        if (good.is_visible==true) {
        let list = document.getElementById('goods_list')
        let tr = document.createElement('tr')
        tr.className="page"+page;
        let item_code = document.createElement('td')
        let item_code_link = document.createElement('a')
        item_code_link.setAttribute('href', "/item/"+good.id)
        item_code_link.setAttribute('target','_blank')    
        item_code_link.innerText = good.item_code
        item_code.append(item_code_link)
        let name = document.createElement('td')
        name.innerText = good.name
        let amount = document.createElement('td')
        amount.innerText = good.amount
        let price_in = document.createElement('td')
        price_in.innerText = good.price_in
        let price_out = document.createElement('td')
        price_out.innerText = good.price_out
        let discount = document.createElement('td')
        discount.innerText = good.discount
        tr.append(item_code,name,amount,price_in,price_out,discount)
        list.appendChild(tr)
        }
        if(count%itemsPerPage===0){
            page++;
            
        }
        count++;
    });
    setPage(page)
    showhPage(1)
    });
}

function setPage(page){
    document.getElementById('pages').innerHTML="";
        let pages = document.getElementById('pages')
        for (let i = 0; i < page; i++) {
        let button = document.createElement('button')
        button.innerText=i+1;
        button.addEventListener("click", function(){showhPage(i+1)})
        pages.appendChild(button)
        
    }
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


document.getElementById('available').addEventListener("change",function(){
    if(this.checked){
        let count = 1;
        let page = 1;
        let itemsPerPage= 21;
        fetch('/api/good/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        document.getElementById('goods_list').innerHTML="<tr><td>Termék kód</td><td>Név</td><td>Mennyiség</td><td>Beszerzési ár</td><td>Eladási ár</td><td>Akció</td></tr>";
        data.forEach(good => {
        TODO:"rövidebbre csinálni,oldalanként x elem töltsön be"
        if (good.is_visible==false) {
        let list = document.getElementById('goods_list')
        let tr = document.createElement('tr')
        tr.className="page"+page;
        let item_code = document.createElement('td')
        let item_code_link = document.createElement('a')
        item_code_link.setAttribute('href', "/item/"+good.id)
        item_code_link.setAttribute('target','_blank')    
        item_code_link.innerText = good.item_code
        item_code.append(item_code_link)
        let name = document.createElement('td')
        name.innerText = good.name
        let amount = document.createElement('td')
        amount.innerText = good.amount
        let price_in = document.createElement('td')
        price_in.innerText = good.price_in
        let price_out = document.createElement('td')
        price_out.innerText = good.price_out
        let discount = document.createElement('td')
        discount.innerText = good.discount
        tr.append(item_code,name,amount,price_in,price_out,discount)
        list.appendChild(tr)  
        }
        if(good.is_visible==false && count%itemsPerPage===0){
            page++;
            
        }
        count++;  
    });
        setPage(page)
        showhPage(1)    
    });
    }
    else{
        let count = 1;
        let page = 1;
        let itemsPerPage= 21;
        fetch('/api/good/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        document.getElementById('goods_list').innerHTML="<tr><td>Termék kód</td><td>Név</td><td>Mennyiség</td><td>Beszerzési ár</td><td>Eladási ár</td><td>Akció</td></tr>";
        data.forEach(good => {
        TODO:"rövidebbre csinálni,oldalanként x elem töltsön be"
        if (good.is_visible==true) {
        let list = document.getElementById('goods_list')
        let tr = document.createElement('tr')
        tr.className="page"+page;
        let item_code = document.createElement('td')
        let item_code_link = document.createElement('a')
        item_code_link.setAttribute('href', "/item/"+good.id)
        item_code_link.setAttribute('target','_blank')    
        item_code_link.innerText = good.item_code
        item_code.append(item_code_link)
        let name = document.createElement('td')
        name.innerText = good.name
        let amount = document.createElement('td')
        amount.innerText = good.amount
        let price_in = document.createElement('td')
        price_in.innerText = good.price_in
        let price_out = document.createElement('td')
        price_out.innerText = good.price_out
        let discount = document.createElement('td')
        discount.innerText = good.discount
        tr.append(item_code,name,amount,price_in,price_out,discount)
        list.appendChild(tr)  
        }
        if(count%itemsPerPage===0){
            page++;
            
        }
        count++;    
    });
        setPage(page)
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
            document.getElementById('goods_list').innerHTML="<tr><td>Termék kód</td><td>Név</td><td>Mennyiség</td><td>Beszerzési ár</td><td>Eladási ár</td><td>Akció</td></tr>";  
            loadGoods();
            
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









