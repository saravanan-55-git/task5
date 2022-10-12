

function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }

    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
    }

    function createlinebreak(tagname){
        var ele=document.createElement(tagname);
        return ele;
        }


var label=createlabels("label","for","firstname","FirstName");
var br1=createlinebreak("br");
var input=createinput("input","type","firstname","id","firstname");
var br2=createlinebreak("br");

var label1=createlabels("label","for","lastname","LastName");
var br3=createlinebreak("br");
var input1=createinput("input","type","lastname","id","lastname");
var br4=createlinebreak("br");

var label2=createlabels("label","for","middlename","MidedleName");
var br5=createlinebreak("br");
var input2=createinput("input","type","middlename","id","middlename");
var br6=createlinebreak("br");

var label3=createlabels("label","for","phonenumber","PhoneNumber");
var br7=createlinebreak("br");
var input3=createinput("input","type","phonenumber","id","phonenumber");
var br8=createlinebreak("br");

document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,label3,br7,input3);