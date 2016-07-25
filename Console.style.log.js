var Console = {
  css:"",
  style:function(){
    this.css = Array.prototype.slice.apply(arguments).join(';');
    return this;
  },
  log:function(){
    var args = Array.prototype.slice.apply(arguments).join(' ');
    if(args.length>0){
    	console.log("%c"+args,this.css);
    }
  }
};
