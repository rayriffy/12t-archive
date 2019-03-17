

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	12หางออนไลน์ : ALL SHOW Wallpaper Screenshot ClipVideo
</title>

   <script language="javascript" src="js/jquery.js" type="text/javascript"></script>
       <script type="text/javascript" src="js/thickbox.js"></script>
    <link rel="stylesheet" href="js/thickbox.css" type="text/css" />
 <script  language="javascript">
        var reqPageUrl = new Array();
        reqPageUrl[1] = "wallpaper.html";
        reqPageUrl[2] = "screenshot.html";
        reqPageUrl[3] = "clipvideo.html";
   

        function loadTab(id) {
            if (reqPageUrl[id].length > 0) {
                $("#preloader").show();
                $.ajax(
		{
		    url: reqPageUrl[id],
		    cache: false,
		    error: function (XMLHttpRequest, textStatus, errorThrown) {
		        $('#tabmenu a').removeClass('active'); //remove all class='active' for all anchors
		        $("#content_tab" + id).toggleClass('active'); //add class to the current one
		        $("#content").empty().append('<img src=\"loading.gif\" /> Error in Loading page, please do check with the path'); //if there is any error in the request
		        $("#preloader").hide(); //hide the preloader
		    },
		    success: function (message) {
		        $('#tabmenu a').removeClass('active'); //remove all class='active' for all anchors
		        $("#content_tab" + id).toggleClass('active'); //add class to the current one
		        $("#content").empty().append(message); //first empty the content, then append content
		        $("#preloader").hide(); //hide the preloader
		        tb_init('a.thickbox, area.thickbox, input.thickbox'); //call tb_init function to initiate ThichBox into your respective tab panels
		    }

		});
            }
        }

        $(document).ready(function () {
            loadTab(3); //After page loading, active tab 2
            $("#preloader").hide();
            $("#content_tab1").click(function (e) { e.preventDefault(); loadTab(1); }); //Here e.preventDefault(); is to prevent the respective href from going the user off the link, that is the href url '#' which is appending to the URL will going off 
            $("#content_tab2").click(function (e) { e.preventDefault(); loadTab(2); });
            $("#content_tab3").click(function (e) { e.preventDefault(); loadTab(3); });

        });

</script>


 <style type="text/css">
<!--
    #headbtboxvdo{float:left; background:url(images/tab_screen.jpg) no-repeat; height:29px; width:490px;}  
    #headbtboxvdo ul li { list-style-type:none; height:30px; display:inline; float:left;} 
    #headbtboxvdo a{ width:125px; height:30px;float:left;} 
    #boxcontentvdofile{ background:url(images/tab_content.jpg) no-repeat;width:490px; height:155px; float:left; padding:15px 0 0 35px;}

-->
</style>
</head>


<body style="margin:0;">
    <form method="post" action="allshow.aspx" id="form1">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwULLTE0MDkxNzYwNDNkZOUou6QTaoOv0jUhqk6vJAR0lxzEewz1W3qxNCjffJKo" />



   
    <div style="height:185px; width:491px;">
    <div id="headbtboxvdo"><ul>
    <li><a href="#"  id="content_tab1" title="wallpaper" ></a></li>
    <li><a href="#"  id="content_tab2" title="Screenshot"></a></li>
    <li><a href="#"  id="content_tab3" title="Video"></a></li></ul></div>
    <div id="boxcontentvdofile">
    <div id="preloader" style="position:absolute; top:25px; left:10px; font-size:11px;"><img src="js/loading.gif" align="absmiddle" /> Loading..Please Wait... </div>
	  <div id="content"></div>
    </div>
   </div>


                  <script type="text/javascript">

                      var _gaq = _gaq || [];
                      _gaq.push(['_setAccount', 'UA-19728821-1']);
                      _gaq.push(['_setDomainName', '.herorangers.com']);
                      _gaq.push(['_trackPageview']);

                      (function () {
                          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
                      })();

</script>
    
    </form>
</body>
</html>
