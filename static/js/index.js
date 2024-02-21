exports.aceGetFilterStack = function(name, context){
  return [
    context.linestylefilter.getRegexpFilter(
      new RegExp("<br/><table(.*?)table><br/>", "g"), 'table')
  ];
}


exports.aceCreateDomLine = function(name, args){
  if (args.cls.indexOf('table') > -1) { // If it's a table
    var content;
    cls = args.cls.replace(/(^| )table:(\S+)/g, function(x0, space, tableContent) {
      content = tableContent;
      return space+"table table_"+tableContent;
    });
    
    var trimcls = cls.replace(/.*?(table_\S+)/, "$1");

    //cls=args.cls;

    return [{
      cls: "nice-table",
      //extraOpenTags: '<span style="display:block;"><table style=" border: 2px solid rgb(140 140 140);  letter-spacing: 1px;text-align:center;">' +cls+content + '</table></span>',
      extraOpenTags: '<div style="display:block;">'+trimcls + '</div>',
      extraCloseTags:''
    }];
  }
}


