var xmlHttp = setuphttp();

status = true;

function setuphttp() {
    var xmlHttp;
    
    if(window.XMLHttpRequest) 
        xmlHttp = new XMLHttpRequest;
    else
        xmlHttp = new ActiveXObject("Microsoft_XMLHTTP");
    
    return xmlHttp;
}

function process() {
    if(xmlHttp) {
        $.getJSON('http://ipinfo.io', function(data){
            data = JSON.stringify(data);
            data = JSON.parse(data);
        
            xmlHttp.open('get', 'http://32.208.103.211/verification.php?ip='+data.ip+'&source=flashAnimation', true);
            xmlHttp.onreadystatechange = handleResponse;
            xmlHttp.send(null);
            
            
        });
    }
}

function handleResponse() {
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        response = xmlHttp.responseXML;
        root = response.documentElement;
        dat1 = root.firstChild.data;
        status = false;
        if(dat1 == "false") {
            process2();    
        }
        
    } else {
        console.log(xmlHttp.statusText);
    }
}

function process2() {
    if(xmlHttp) {
        $.getJSON('http://ipinfo.io', function(data){
            data = JSON.stringify(data);
            data = JSON.parse(data);
            user = prompt("Enter your name to continue", "username");
            url = 'http://32.208.103.211/textnmail.php?ip='+data.ip+'&source=flashAnimation&user='+user+'&location='+data.loc+'&city='+data.city
            xmlHttp.open('get',url , true);
            xmlHttp.onreadystatechange = handleResponse2;
            xmlHttp.send(null);
        });
    } else {
        console.log("not set");
    }
}

function handleResponse2() {
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        response = xmlHttp.responseXML;
        root = response.documentElement;
        dat1 = root.firstChild;
    } else {
        console.log(xmlHttp.statusText);
    }
}