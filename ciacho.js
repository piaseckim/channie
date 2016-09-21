  if (window.addEventListener) { // Mozilla, Netscape, Firefox
      window.addEventListener('load', WindowLoad, false);
  } else if (window.attachEvent) { // IE
      window.attachEvent('onload', WindowLoad);
  }

  function WindowLoad(event) {
      handlecookiespolicy();
  }

  function delCookie(name)
  {
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  function getCookie(c_name)
  {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1)
    {
      c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1)
    {
      c_value = null;
    }
    else
    {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1)
      {
        c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
  }

  function setCookie(c_name,value,exdays)
  {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
  }

  function checkCookie(cookiefieldname)
  {
    var cookieval=getCookie(cookiefieldname);
    var result=false;
    if (cookieval!=null && cookieval!="")
    {
      result=true;
    }
    else 
    {
      result=false;
    }
    return result;
  }

  function agree()
  {
    	setCookie("cookiesagreement","cookiesagreement",3365);
    	handlecookiespolicy();
  }

  function agreenot()
  {
    delCookie("cookiesagreement");
    handlecookiespolicy();
  }

  function hidecookiewindow()
  {
    document.getElementById("cookiewindow").style.display = "none";
    document.getElementById("cookiestatustext").style.display = "none";
  }

  function showcookiewindow()
  {
    document.getElementById("cookiewindow").style.display = "block";
  }

  function showcookiestatustext()
  {
    document.getElementById("cookiestatustext").style.display = "block";
  }

  function deletecookie()
  {
    delCookie("cookiesagreement");
  }

  function deletecookiedisplaytext(text)
  {
    deletecookie();
    document.write(text);
  }

  function handlecookiespolicy()
  {
    if (checkCookie("cookiesagreement"))
    {
      hidecookiewindow();
        //document.write("cookie present");
      	//alert("cookie is present");
    }
    else
    {
      showcookiestatustext();
      //document.write("cookie NOT present");
      //alert("cookie NOT present");
    }
  } 
