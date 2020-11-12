let mod = angular.module('myApp',[]);
//angular.module('myApp', [])
mod.controller('AppController', function($scope) {
 
    　　　// 入力されたユーザー名を保持
    　　　$scope.meetingid = '';
        $scope.meetingpassword='';
        $scope.meetingname='';
        $scope.meetinglinkwithpassword='';
    　　　// ユーザー一覧（空の配列で初期化）
     
    　　　$scope.users;
           chrome.storage.sync.get("meetinglist", function (value) {
               if(value.meetinglist){
                $scope.$apply(function(){
                    $scope.users = value.meetinglist;
                })
                
               
                //this.changeDetectorRef.detectChanges();
               }
            });
     
    　　　// 登録を押されたときの関数
     
    　　　/*$scope.submit = function() {
     
    　　　　　// 新しいユーザーをユーザー一覧に登録する
            var id=$scope.meetingid.replace(/[^0-9]/g, '');//.replace([!0-9],"")
    　　　　　$scope.users.push({
     
    　　　　　　meetingid: $scope.meetingid,
                meetingpassword: $scope.meetingpassword,
                meetingname:$scope.meetingname,
    　　　　　　url: 'zoommtg://zoom.us/join?confno='+id+'&pwd='+$scope.meetingpassword
     
    　　　　　});
            
             $scope.meetingid = '';
             $scope.meetingpassword='';
             $scope.meetingname='';
             $scope.meetinglinkwithpassword='';
             save($scope.users)
    　　　};*/
        $scope.openURL= function() {
            window.open(chrome.runtime.getURL('register.html'));
        }
        $scope.open= function(url) {
            window.open(url);
        }
        $scope.deleteitem=function(index){
            $scope.users=arrayRemove($scope.users,index)
            save($scope.users)
        }
        $scope.edit=function(index){
            window.open(chrome.runtime.getURL('register.html'+"?p="+index.toString()));
        }

     
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
