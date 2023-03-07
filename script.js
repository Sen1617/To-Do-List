 var plus = document.getElementById("plusbtn");
        var invalue = document.getElementById("boxvalue");
        var item_div = document.getElementById("csroll");
    
        plus.addEventListener('click',function(){
            //for checkbox
            var ch=document.createElement('INPUT');
            ch.setAttribute("type","checkbox");

            item_div.appendChild(ch);
            //for item value
            var paragraph = document.createElement('p');
            paragraph.classList.add('pstyle');
            paragraph.innerText=invalue.value;
            item_div.appendChild(paragraph);
            //for delete_btn
            var del_ele = document.createElement('INPUT');
            del_ele.setAttribute("type","button");
            del_ele.setAttribute("value","-");
            del_ele.classList.add('minusbtn');
            item_div.appendChild(del_ele);
            
            invalue.value="";

            ch.addEventListener('click', function(){
                
                paragraph.style.textDecoration = "line-through";
            })

            del_ele.addEventListener('click',function(){
                item_div.removeChild(ch);
                item_div.removeChild(paragraph);
                item_div.removeChild(del_ele);
            })
        })
