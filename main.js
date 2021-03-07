
function encrypt() {
alert("begin?");
//vars because i hate myself
let alph = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let inp1 = prompt("encryption factor(cannot be 26 or a multiple of it):");
let inp = parseInt(inp1);
let inp2 = prompt("what is your message?");
let msg1 = inp2.toLowerCase();
let msg = msg1.split("");
let msglen = msg.length;
var final = [ ];
let charpos = 0;
let bruh = ' ';
while (charpos <= msglen) {
  switch (msg[charpos]) {
    case ' ':
      final[charpos] = alph[0 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[0 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'a':
      final[charpos] = alph[1 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[1 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'b':
      final[charpos] = alph[2 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[2 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'c':
      final[charpos] = alph[3 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[3 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'd':
      final[charpos] = alph[4 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[4 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'e':
      final[charpos] = alph[5 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[5 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'f':
      final[charpos] = alph[6 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[6 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'g':
      final[charpos] = alph[7 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[7 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'h':
      final[charpos] = alph[8 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[8 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'i':
      final[charpos] = alph[9 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[9 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'j':
      final[charpos] = alph[10 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[10 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'k':
      final[charpos] = alph[11 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[11 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'l':
      final[charpos] = alph[12 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[12 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'm':
      final[charpos] = alph[13 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[13 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'n':
      final[charpos] = alph[14 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[14 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'o':
      final[charpos] = alph[15 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[15 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'p':
      final[charpos] = alph[16 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[16 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'q':
      final[charpos] = alph[17 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[17 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'r':
      final[charpos] = alph[18 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[18 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 's':
      final[charpos] = alph[19 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[19 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 't':
      final[charpos] = alph[20 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[20 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'u':
      final[charpos] = alph[21 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[21 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'v':
      final[charpos] = alph[22 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[22 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'w':
      final[charpos] = alph[23 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[23 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'x':
      final[charpos] = alph[24 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[24 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'y':
      final[charpos] = alph[25 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[25 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    case 'z':
      final[charpos] = alph[26 + inp];
      if (final[charpos] == undefined) {
        final[charpos] = alph[26 + inp - 27]
      }
      console.log(final[charpos]);
      break;
    default:
    final[charpos] = msg[charpos];
  };
  charpos++;
}
alert(final.join('') + "//");
}
