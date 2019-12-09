function ge(url,cn,data){
    data=data||{};
    var str="";
    for(i in data ){
    str+=`${i}=${data[i]}&`;
    }
    var d=new Date;
    url=url+"?"+str+"__qft="+d.getTime();
    var aj=new XMLHttpRequest();
    aj.open("get",url,true);
    aj.onreadystatechange=function(){
        if(aj.readyState==4&&aj.status==200){
            // console.log(aj.responseText)
            cn(aj.responseText)
        }else if(aj.readyState==4&&aj.status!=200){
            console.log(aj.status)
        }
    }
    aj.send()
}

function po(url,cn,data){
    data=data||{};
    var str="";
    for(i in data ){
    str+=`${i}=${data[i]}&`;
    }
    var aja=new XMLHttpRequest();
    aja.open("post",url,true);
    aja.onreadystatechange=function(){
        if(aja.readyState==4&&aja.status==200){
            cn(aja.responseText)
        }else if(aja.readyState==4&&aja.status!=200){
            console.log(aja.status)
        }
    }
    aja.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    aja.send(str);
}

function jsonp(url,cn,data){
    data=data||{};
    var str="";
    for(i in data ){
    str+=`${i}=${data[i]}&`;
    }
    d=new Date;
    url=url+"?"+str+d.getTime();
    var script=document.createElement("script");
    script.src=url;
    document.body.appendChild(script);
    window[data[data.constum]]=function(res){
        cn(res)
    }

}