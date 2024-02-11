



function loadGoods(goods_list){
fetch('/api/good/')
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(good => {
        TODO:"rövidebbre csinálni,oldalanként x elem töltsön be"
        if (good.is_visible==true) {
        let list = document.getElementById('goods_list')
        let tr = document.createElement('tr')
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
        tr.append(item_code,name,amount,price_in,price_out)
        list.appendChild(tr)   
        }  
    });
    });
}






