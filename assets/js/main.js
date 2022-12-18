/*var result, mainKeyName;
parseExcel = function (file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
      type: "binary",
    });
    // workbook.SheetNames.forEach(function (sheetName) {
    // var dataIncludedLists = []
    // if (workbook.Sheets[sheetName].A1){
    // dataIncludedLists.push(sheetName)
    // }
    var XL_row_object = XLSX.utils.sheet_to_row_object_array(
      workbook.Sheets["Лист3"]
    );
    mainKeyName = Object.keys(XL_row_object[0])[0];
    var json_object = JSON.stringify(XL_row_object);
    result = json_object;
    onload();
    // });
  };

  reader.onerror = function (ex) {
    console.log(ex);
  };
  reader.readAsBinaryString(file);
  return result;
};
function onload() {
  var allWords = {
    topic_vocabulary_in_contrast: [],
    phrasal_verbs: [],
    phrases_and_collocations: [],
    word_patterns: [],
    word_formation: [],
  };
  result = result.replaceAll("undefined", "i");
  var data = JSON.parse(result);
  var current;
  for (var i = 0; i < data.length; i++) {
    item = data[i];
    switch (item[mainKeyName]) {
      case "Topic vocabulary in contrast":
        current = "topic_vocabulary_in_contrast";
        item[mainKeyName] = "";
        break;
      case "Phrasal verbs":
        current = "phrasal_verbs";
        item[mainKeyName] = "";
        break;
      case "Phrases and collocations":
        current = "phrases_and_collocations";
        item[mainKeyName] = "";
        break;
      case "Word patterns":
        current = "word_patterns";
        item[mainKeyName] = "";
        break;
      case "Word formation":
        current = "word_formation";
        item[mainKeyName] = "";
        break;
    }
    console.log(item["i"]);
    allWords[current].push(
      item[mainKeyName],
      typeof item["i"] !== void 0 ? item["i"] : ""
    );
  }
  allWords = Object.keys(allWords).reduce(function (acc, key) {
    acc[key] = allWords[key].filter(Boolean);
    return acc;
  }, {});
  console.log(allWords);
}

input.onchange = function () {
  parseExcel(this.files[0]);
};
*/

var data = {
  pharsal_verbs: [
    ["ask after", "ask for news about"],
    ["back down", "stop demanding sth, stop saying that you will do something"],
    ["back out", "decide not to do something you agreed to do"],
    ["bank on ", "depend on something"],
    ["break down", "stop working"],
    ["break out", "escape from prison"],
    ["break out", "start suddenly"],
    ["bring forward", "change the date/time event so it happens earlier"],
    ["bring in", "introduce a new law or system"],
    ["bring on", "cause to illness"],
    ["bring out", "produce and start to sell new product"],
    ["bring up", "look after a child until he/she becomes an adult"],
    ["bring up", "start discussion"],
    ["call for", "require or need"],
    ["call for", "demand"],
    ["call of", "cancel"],
    ["carry on", "continue"],
    ["carry out", "perform an expirement"],
    ["catch on", "become a popular or fashinable"],
    ["catch on", "understand"],
    ["catch up with", "reach the "],
    ["chase after", "follow sb/sth quickly in order to catch them"],
    ["check in", "register at a hotel or an airport"],
    ["check out", "leave a hotel"],
    ["check out", "investigate"],
    ["clear up", "become brighter and better (for weather)"],
    ["close down", "stop operating (for companiest)"],
    ["come (a)round", "happen again (for regular events)"],
    ["come (a)round (to)", "be persuaded to change your mind (about)"],
    ["come across", "find sth or meet sb by chance"],
    ["come by", "get sth, especially sth that is really hard to get"],
    ["come down with", "start to suffer from a minor illness"],
    ["come forward", "offer help or information"],
    ["come into", "inherit"],
    ["come off", "succeded"],
    ["come on", "develop or make progress"],
    ["come on", "start to be broadcast"],
    ["come out", "be published"],
    ["come round/to", "become conscious"],
    ["come up with", "think of (an idea, a plan, etc)"],
    ["count on", "rely on, trust"],
    ["cross out", "draw a line throught sth written"],
    ["cut down (on)", "do less of (smoking, etc)"],
    ["cut down (on)", "reduce an amount of"],
    [
      "cut off",
      "make a place difficult or impossible to enter, leave or communicate with",
    ],
    ["cut off", "stop the supple of smth"],
    ["cut off", "disconnect"],
    ["dawn on", "if sth downs on you, you realise it for the first time"],
    ["deal with", "handle, cope with"],
    ["die down", "become less noisy, powerful or active"],
    ["do away with", "get rid of"],
    ["do up", "repair, paint or improve"],
    ['do without', 'live without (sth you can not afford)'],
    ['draw up', 'create (plans, etc)'],
    ['dress up', 'put on fancy or unusual clothes'],
    ['drop in', 'visit unexpectedly'],
    ['drop off', 'let someone get out of a vehicle'],
    ['drop off', 'fall asleep'],
    ['drop out (of)', 'leave school, etc before you have finished a course'],
    ['drown out', 'prevent a sound from being heard by making a louder noise'],
    ['face up to', 'accept sth and try to deal with it'],
    ['fall for', 'fall in love with'],
    ['fall for', 'believe (a lie/trick/joke, etc)'],
    ['fall out (with)', 'have an argument with and stop being friends'],
    ['feel up to', 'feel well enought to do'],
    ['fill in', 'add information in the space on a documents',],
    ['find out', 'discover information, etc'],
    ['flick through' ,'turn and lokk at the pages of a magazine, etc quickly'],
    ['get (sb) down', 'make sb feel sad or lose hope'],
    ['get along (with)', 'have a good relationship (with)'],
    ['get back', 'return from a place'],
    ['get by', 'manage to survive (financially)'],
    ['get on (with)', 'have a good relationship (with)'],
    ['get on for', 'be almost a particular time'],
    ['get on with', 'continue doing'],
    ['get over', 'recover from (an illness, etc)'],
    ['get round to', 'start (after planning to do sth for a long time)'],
    ['get through', 'use all of, finish '],
    ['get up to', 'do; do sth you should not do'],
    ['give away', 'give free of charge'],
    ['give in', 'stop making an effor to achieve sth difficult'],
    ['give off', 'produce sth such as heat or a smell'],
    ['give up', 'stop doing sth you do regularly']
    ['go away', 'go on holiday'],
    ['go down (as)', 'be remembered for having done sth'],
    ['go in for', 'enter ( a competition'],
    ['go in for', 'like'],
    ['go into', 'deal with sth in detail'],
    ['go off', 'be no longer fresh'],
    ['go off', 'explode' ],
    ['go on', 'do sth after doing sth else'],
    ['go on', 'continue happening or doing sth'],
    ['go over', 'repeat or think about again in order to understand completely'],
    ['go/come round', 'go come to sb\'s house to visit them'],
    ['grow on','if sth grows on you, you start to like it more'],
    ['grow out of', 'develop from'],
    ['grow out of', 'become too big for'],
    ['grow up', 'become older'],
    ['hand down', 'give something valuable to your children or grandchildren, usually when you die'],
    ['hand in', 'give to a person in authority'],
    ['hand out', 'give things to people in a group'],
    ['hold up', 'rob while threatening violence'],
    ['hold up', 'delay'],
    ['join in', 'participate take part'],
    ['keep on', 'continue doing'],
    ['keep up with', 'stay at the sam point'],
    ['knock out', 'defeat and remoe from a competition'],
    ['knock out', 'make unconsicious'],
    ['leave out', 'not include'],
    ['let down', 'disappoing'],
    ['let off','give little or no punishment'],
    ['let off', 'make a bomb, etc explode'],
    ['line up', 'get/put into lie'],
    ['live on', 'use as a source of money'],
    ['look after', 'take care of']
    ['look down on', 'think that you are better'],
    ['look into', 'investigate'],
    ['look out', 'be careful'],
    ['look round', 'examine ( a place)'],
    ['look up to', 'admire and respect']
    ['look up', 'try to find information in a book or a list, etc'],
    ['make off', 'escape'],
    ['make up', 'become friends again after an argument'],
    ['make up', 'invent an explanation excuse']
  ],
};
