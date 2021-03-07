function text() {
let ding = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alph = [':sparkles:',':grinnng:',':face_with_monocle:',':exploding_head:',':disguised_face:',':scream:',':cry:',':pleading_face:',':weary:',':lungs:',':o2:',':bust_in_silhouette:',':hospital:',':shinto_shrine:','🈚️',':do_not_litter:',':octagonal_sign:',':three:',':cool:',':construction_site:',':mountain_snow:',':dividers:',':round_pushpin:',':crayon:',':newspaper:',':safety_pin:',':flag_lr:' ]
let inp2 = prompt("what is your message?");
let msg1 = inp2.toLowerCase();
let msg = msg1.split(" ");
let msglen = msg.length;
var final = [ ];
let charpos = 0;
while (charpos <= msglen) {
switch (msg[charpos]) {
  case ':sparkles:':
    final[charpos] = ding[0 ];
    console.log(final[charpos]);
    break;
  case ':grinnng:':
    final[charpos] = ding[1 ];
    console.log(final[charpos]);
    break;
  case ':face_with_monocle:':
    final[charpos] = ding[2 ];
    console.log(final[charpos]);
    break;
  case ':exploding_head:':
    final[charpos] = ding[3 ];
    console.log(final[charpos]);
    break;
  case ':disguised_face:':
    final[charpos] = ding[4 ];
    console.log(final[charpos]);
    break;
  case ':scream:':
    final[charpos] = ding[5 ];
    console.log(final[charpos]);
    break;
  case ':cry:':
    final[charpos] = ding[6 ];
    console.log(final[charpos]);
    break;
  case ':pleading_face:':
    final[charpos] = ding[7 ];
    console.log(final[charpos]);
    break;
  case ':weary:':
    final[charpos] = ding[8 ];
    console.log(final[charpos]);
    break;
  case ':lungs:':
    final[charpos] = ding[9 ];
    console.log(final[charpos]);
    break;
  case ':o2:':
    final[charpos] = ding[10 ];
    break;
    console.log(final[charpos]);
    break;
  case ':bust_in_silhouette:':
    final[charpos] = ding[11 ];
    console.log(final[charpos]);
    break;
  case ':hospital:':
    final[charpos] = ding[12 ];
    console.log(final[charpos]);
    break;
  case ':shinto_shrine:':
    final[charpos] = ding[13 ];
    console.log(final[charpos]);
    break;
  case '🈚️':
    final[charpos] = ding[14 ];
    console.log(final[charpos]);
    break;
  case ':do_not_litter:':
    final[charpos] = ding[15 ];
    console.log(final[charpos]);
    break;
  case ':octagonal_sign:':
    final[charpos] = ding[16 ];
    console.log(final[charpos]);
    break;
  case ':three:':
    final[charpos] = ding[17 ];
    console.log(final[charpos]);
    break;
  case ':cool:':
    final[charpos] = ding[18 ];
    console.log(final[charpos]);
    break;
  case ':construction_site:':
    final[charpos] = ding[19 ];
    console.log(final[charpos]);
    break;
  case ':mountain_snow:':
    final[charpos] = ding[20 ];
    console.log(final[charpos]);
    break;
  case ':dividers:':
    final[charpos] = ding[21 ];
    console.log(final[charpos]);
    break;
  case ':round_pushpin:':
    final[charpos] = ding[22 ];
    console.log(final[charpos]);
    break;
  case ':crayon:':
    final[charpos] = ding[23 ];
    console.log(final[charpos]);
    break;
  case ':newspaper:':
    final[charpos] = ding[24 ];
    break;
  case ':safety_pin:':
    final[charpos] = ding[25 ];
    console.log(final[charpos]);
    break;
  case ':flag_lr:':
    final[charpos] = ding[26 ];
    console.log(final[charpos]);
    break;
  default:
  final[charpos] = msg[charpos];
};
charpos++;
}
alert(final.join(""));
}
