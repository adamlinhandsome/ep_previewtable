exports.tableGetFilterStack = function(name, context){
  return [
    context.linestylefilter.getRegexpFilter(
      new RegExp("<br/><table(.*?)table><br/>", "g"), 'table')
  ];
}


exports.tableCreateDomLine = function(name, args){
  if (args.cls.indexOf('table') > -1) { // If it's a table
    var content;
    cls = args.cls.replace(/(^| )table:(\S+)/g, function(x0, space, tableContent) {
      content = tableContent;
      return space + "table table_" + tableContent;
    });
    //cls=args.cls;

    return [{
      cls: cls,
      //extraOpenTags: '<span style="display:block;"><table style=" border: 2px solid rgb(140 140 140);  letter-spacing: 1px;text-align:center;">' +cls+content + '</table></span>',
      extraOpenTags: '<div style="display:block;">'+content + '</div>',
      extraCloseTags:''
    }];
  }
}


