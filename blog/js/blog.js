//针对log页定义一个对象
var log={
    startdt:'2019-8-5',
    enddt:'2019-9-5',
    updatedt:'2019-8-5',
    anthor:'wsj',
}

//由对象派生业务逻辑
log.submit={
    check:function(v){//验证某个值是否为空
        v==''?true:false;
        return v;
    },
    autohide:function(obj){
        setTimeout(function(){
            obj.hide();
        },2000 )
    }
}


//定义一个验证内容的函数
function checkvalue(){
    var $username=$('#username');
    var $password=$('#password');
    var $err1=$('#err1');
    var $err2=$('#err2');
    //当用户名和密码都不为空时
    if($username.val()!=''&&$password.val()!=''){
        //直接提交
        return true;
    }else{
        //如果用户名为空时
        if($username.val()==''){
            $err1.show();
            log.submit.autohide($err1);
            return false;
        }else{
            $err2.show();
            log.submit.autohide($err2);
            return false;
        }
    }
}
//绑定按钮的简单事件
$(function(){
    //获取元素对象，并保存在变量中
    var $form=$('form');;  
    var $btn=$('.btn>input');
})

// 定义一个基于列表页的业务逻辑
var lst={
    template:function(t,u,p1,p2){
        var _html="";
        _html+='<div class="item">';
        _html+='<div class="title">';
        _html+='     <h3>'+t+'</h3>';
        _html+='</div>';
        _html+='<div class="con">';
        _html+='    <div class="cleft">';
        _html+='         <img src="'+u+'" alt="">';
        _html+='    </div>';
        _html+='    <div class="cright">';
        _html+='        <p class="ptop">';
        _html+='            '+p1;
        _html+='        </p>';
        _html+='        <p class="pbottom">';
        _html+='            '+p2;
        _html+='        </p>';
        _html+='    </div>';
        _html+='</div>';
        _html+='</div>';
        return _html;
    }
}
//使用数组保存展示的数组
var arrData=[{
    t:'Python语言的优势',
    u:'./imgs/b.jpg',
    p1:'本文探讨了Python语言在AI领域的优势与运用，谁会成为',
    p2:'初学璐 学无止境 2019-5-13 34567 阅读999'
},
{
    t:'Web开发的优势',
    u:'./imgs/b.jpg',
    p1:'本文探讨了Python语言在AI领域的优势与运用，谁会成为',
    p2:'初学璐 学无止境 2019-5-13 34567 阅读999'  
},
{
    t:'JavaScript语言的优势',
    u:'./imgs/b.jpg',
    p1:'本文探讨了Python语言在AI领域的优势与运用，谁会成为',
    p2:'初学璐 学无止境 2019-5-13 34567 阅读999'
}];
//使用流程
//遍历数组，获取每一组元素对象
//将获取的元素对象填充到模板中
//向页面元素追加模板内容
for(var i=0;i<arrData.length;i++){
    var _HTML=lst.template(arrData[i].t,arrData[i].u,arrData[i].p1,arrData[i].p2);
    //将数据追加到列表对象中去
    $('.lst').append(_HTML);
}

// //通过模板生成新的数据
// var _HTML=lst.template('Python语言的优势','./imgs/b.jpg','本文探讨了Python语言在AI领域的优势。谁会成为大数据时代的第一开发语言？这本已经是一个不需要争论的问题。如果说三年前，Matlab、Scaia、R、Java...','皮皮璐 学无止境 2018-5-13 34567已阅读 9999');
// //将数据追加到列表中
// $('.lst').append(_HTML);

//定义一个基于我的图片页的业务逻辑对象
var pics={
    template:function(u,n,t){
        var _html="";
        _html+='<div class="item">';
        _html+='<div class="img">';
        _html+='    <img src="'+u+'" alt="">';
        _html+='    <div class="tip">喜欢|'+n+'</div>';
        _html+='</div>';
        _html+='<div class="title">';
        _html+='    <h3>'+t+'</h3>';
        _html+='</div>';
        _html+='</div>';
        return _html;
    }
};
//定义一个包含三个对象内容的图片数据
var arrPics=[
    {
        u:'./imgs/toppic02.jpg',
        n:223,
        t:'Python中打开txt文件报错'
    },{
        u:'./imgs/banner01.jpg',
        n:260,
        t:'Python中打开txt文件报错'
    },{
        u:'./imgs/a.jpg',
        n:200,
        t:'Python中打开txt文件报错'
    }
];
 for(var j=0;j<arrPics.length;j++){
    //向模板中填充内容
    var _HTML=pics.template(arrPics[j].u,arrPics[j].n,arrPics[j].t);
    //将模板追加到页面元素中
    $('#pics').append(_HTML);
}
