$(document).ready(function(){
   $("#favorite").click(function(){
      var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd':'Ctrl';
   if(document.all)
   {
      window.external.addFavorite(window.location,document.title);
   }
   else if(window.sidebar)
   {
       window.sidebar.addPanel(document.title,window.location);
   }
   else{
       alert('添加失败，请用Ctrl+D进行添加');
   }
   });
});