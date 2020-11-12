/*
<li class="extensionMenuItem item ziggyOverride" 
vaultaction="launch" title="Launch zoom.us" 
 aria-label="Site: zoom.us" navindex="0">
     <div class="itemIcon">
     <img class="squareIcon" src="robotc.png">
         <div class="itemIconOverlay">
             </div>
    </div>
             <div class="itemInfoText">
                 <p class="name">zoom.us</p>
                 <div class="actionTextWrapper">
                     <div class="actionTextWrapperInner">
                         <p class="small infoLabel">ryota7369@gmail.com</p>
                         <p class="actionText">Launch</p>
                     </div>
            </div>
                     </div>
                         <div class="moreItem moreActions moreItem-override backgroundCircle fa-stack">
                             <div class="fa fa-circle fa-stack-2x circle" vaultaction="launch" title="Launch">
                                 </div>
                                 <span class="fa lp-fill fa-stack-1x">
                                     </span>
                        </div>
                        <div class="moreItem moreActions moreItem-override backgroundCircle fa-stack">
                                         <div class="fa fa-circle fa-stack-2x circle" vaultaction="openInContextOptions" title="Copy">
                                             <div class="fa fa-clone fa-stack-1x fontAwesomeIcon">
                                                 </div>
                                                 <div class="fa fa-circle fa-stack-2x circle dropDownCircle">
                                                     <div class="fa fa-caret-down fa-stack-1x fontAwesomeIcon dropDownIcon">
                                                     </div>
                                                     </div>
                                                     <ul class="contextOptionsDropdown displaynone">
                                                         <li class="contextOptionsDropdownElement" title="Copy Username" vaultaction="copyUsername">Copy Username</li>
                                                         <li class="contextOptionsDropdownElement" title="Copy Password" vaultaction="copyPassword">Copy Password</li>
                                                    </ul>
                                                    </div>
                        </div>
                        <div class="moreItem moreActions moreItem-override backgroundCircle fa-stack">
                                                        <div class="fa fa-circle fa-stack-2x circle" vaultaction="edit" title="Edit">
                                                            <div class="fa fa-pencil fa-stack-1x fontAwesomeIcon">
                        </div>
                    </div>
    </div>
</li>*/
function openTab() {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById('b1').style.display = "block";
  }
$(function(){
    
/*var list={};
for(var i = 0;i<list.length;i++ ) {
   var articleQuery = $(article)
   var content = $(".contents").append(articleQuery);
   articleQuery.find(".date_time").html(list[i].datetime);
   articleQuery.find(".text").html(list[i].text);
 };*/
$('.column').click(function(){
    openTab();
})
$('.closebtn').click(function(){
    this.parentElement.style.display='none';
})
/*$('#menuitem').click(function() {
    window.alert('アプリ開いたね！');
});*/
$('.listname').click(function() {
    window.alert('アプリ開いたね！');
});
$('.extensionMenuItem.item').click(function() {
    window.alert('アプリ開いたね！');
});
$('.more').click(function() {
    openTab();
});

var list = $('#theList li:last-child'),
limit = 20,
current = 0;

function rand() {
return Math.random().toString(36).substr(2); // Just for some random contnt
}
$('#trigger').click(function() { // We're using a static button to start the population of the list
var end = setInterval(function() {
    if ( current == limit ) {
        current = 0;
        clearInterval(end);
    }
    list.append('<li style="display:none;color:green;">' + rand() + '</li>');
    var newList = $('#theList li:last-child');
    newList.fadeIn();
    var colorEnd = setInterval(function() {
            newList.css('color', 'black');
            clearInterval(colorEnd);
    }, 350);
    current =  current + 1;
}, 300);
});
});
