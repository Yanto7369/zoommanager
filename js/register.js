let mod = angular.module('myApp',[]);
//angular.module('myApp', [])
mod.controller('AppController', function($scope) {
 
    　　　// 入力されたユーザー名を保持
    　　　$scope.meetingid = '';
        $scope.meetingpassword='';
        $scope.meetingname='';
        $scope.meetinglinkwithpassword='';
    　　　// ユーザー一覧（空の配列で初期化）
    var editindex;
    　　　$scope.users;
    var urlmode=true;
    var zoomlink;
    chrome.storage.sync.get("meetinglist", function (value) {
        if(value.meetinglist){
            $scope.users = value.meetinglist;
         $scope.$apply(function(){     
             var search = location.search;
             if(search){
             editindex=search.split("=")[1]
             user= $scope.users[editindex]
             $scope.meetingid =user['meetingid'] ;
            $scope.meetingpassword=user['meetingpassword'];
            $scope.meetingname=user['meetingname'] ;
            $scope.meetinglinkwithpassword=user['meetinglinkwithpassword'] ;
             }
        })
         
        
         //this.changeDetectorRef.detectChanges();
        }
     });

    　　　// 登録を押されたときの関数
     
    　　　$scope.submit = function() {
        chrome.storage.sync.get("meetinglist", function (value) {
            if(value.meetinglist){
                 $scope.users = value.meetinglist;
            var id=$scope.meetingid.replace(/[^0-9]/g, '');//.replace([!0-9],"")
             if(urlmode){
                zoomlink='zoommtg://zoom.us/join?confno='+id+'&pwd='+$scope.meetingpassword
             }
             else{
                 zoomlink=$scope.meetinglinkwithpassword
             }
             
             newitem={
                            mode:urlmode,
                　　　　　　meetingid: $scope.meetingid,
                            meetingpassword: $scope.meetingpassword,
                            meetingname:$scope.meetingname,
                            meetinglinkwithpassword:$scope.meetinglinkwithpassword,
                　　　　　　url: zoomlink
                 
                　　　　　};
             if(editindex){
                $scope.users[editindex]=newitem
             }
             else{
    　　　　　$scope.users.push(newitem);
            }
            $scope.$apply(function(){
                $scope.meetingid = '';
                $scope.meetingpassword='';
                 $scope.meetingname='';
                 $scope.meetinglinkwithpassword='';
            })
             save($scope.users)
            window.close()
             //this.changeDetectorRef.detectChanges();
            }
         });
         
    　　　　　// 新しいユーザーをユーザー一覧に登録する
            
    　　　};
        $scope.openURL= function() {
            window.open(chrome.runtime.getURL('register.html'));
        }
        $scope.open= function(url) {
            window.open(url);
        }
        $scope.connecttext=function(ischecked){
            urlmode=ischecked;
            enabledname="id&pass"
            disabledname="link"
            if( ischecked == false ) {
                // チェックが入っていたら有効化
                ar=document.getElementsByName(disabledname)
                ar.forEach(element => {
                    element.disabled=false;
                });
                (document.getElementsByName(enabledname)).forEach(element => {
                 element.disabled=true;
             });
               // document.getElementById(textid).disabled = false;
             }
             else {
                 (document.getElementsByName(disabledname)).forEach(element => {
                     element.disabled=true;
                 });
                 (document.getElementsByName(enabledname)).forEach(element => {
                  element.disabled=false;
                 });
                // チェックが入っていなかったら無効化
               // document.getElementById(textid).disabled = true;
             }
        }
        /*$scope.deleteitem=function(index){
            chrome.storage.sync.get("meetinglist", function (value) {
                if(value.meetinglist){
                 $scope.$apply(function(){
                     $scope.users = value.meetinglist;
                 })
                 $scope.users=arrayRemove($scope.users,index)
                 save($scope.users)
                
                 //this.changeDetectorRef.detectChanges();
                }
             });
       
           
        }*/

     
    　　});
function save(array) {
        chrome.storage.sync.set({
            "meetinglist":array
        })
      }
function arrayRemove(arr, index) {
    ar=[]
    for(i=0;i<arr.length;i++){
        if(i!=index)
        ar.push(arr[i])
    }
   return ar; }

