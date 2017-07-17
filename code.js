function init(){
	var champ = document.getElementById("champ_mot_de_passe");
	champ.addEventListener("keyup",affiche);
}
function affiche() {
  var chaine = document.getElementById("champ_mot_de_passe").value;
  var ncp = 0;
  ncp += (chaine.search(/[A-Z]/) == -1 ? 0 : 26);
  ncp += (chaine.search(/[a-z]/) == -1 ? 0 : 26);
  ncp += (chaine.search(/[0-9]/) == -1 ? 0 : 10);
  ncp += (chaine.search(/[#@%!$]/) == -1 ? 0 : 5);
  var tce = Math.ceil(chaine.length*Math.log10(ncp)/Math.log10(2));
  /*
  var force = "très faible";
  if ( tce >= 64 ) force = "faible";
  else if ( tce >= 80 ) force = "moyen";
  else if ( tce >= 100 ) force = "fort";
  */ 
  var force;
  var CSS_class;
  if ( tce < 64 ) {
	  force = "très faible";
	  CSS_class = "force_tres_faible";
  }
  else if ( tce < 80 ) {
	  force = "faible";
	  CSS_class = "force_faible";
  }
  else if ( tce < 100 ) {
	  force = "moyen";
	  CSS_class = "force_moyen";
  }
  else {
	  force = "fort";
	  CSS_class = "force_fort";
  }	  
  
  var message = force + " ("+tce+" bits)";
  document.getElementById("zone_reponse").innerHTML = message;
  document.getElementById("zone_reponse").className = CSS_class;
}  

window.addEventListener("load",init);

function nv(lvl) {
	if (lvl == 1) {
            pict = ["B                  B",
                    "B                  B",
                    "B                  B",
                    "B                  B",
                    "B                  B",
                    "B   B       B      B",
                    "BG  B   B O B O R  B",
                    "BBBBBBBBBBBBBBBBBBBB"]
        } else if (lvl == 2) {
            pict = [" B    BB        BB    ",
                    " B                B   ",
                    "BB                 B  ",
                    "BG                  B ",
                    "BB                   B",
                    " B           B  O    B",
                    " B           BO OOL  B",
                    " BBBBB   BBBBBBBBBBBBB",
                    "     B  OB            ",
                    "     BBBBB            "]
        } else if (lvl == 3){
            pict = [" B                 ",
                    " B   BBBBBBBBBBBBB ",
                    "B B B             B",
                    "B  B              B",
                    "B                OB",
                    "B               OOB",
                    "B BBB    L   BO BB ",
                    "B B B    B  BBBBB  ",
                    "B B BOO BB  B      ",
                    "BGB BBBBBB BB      ",
                    "BBB BB   BBB       "]
        } else if (lvl == 4){
            pict = ["                  B     ",
                    "                 B B    ",
                    "       B        B   B   ",
                    "      B B      B     B  ",
                    "   BBB   B    B       B ",
                    "  B       B  B         B",
                    " B         BB          B",
                    " B                    OB",
                    " B                   OOB",
                    " B               L   BBB",
                    "BB    B          B   B  ",
                    "BG    B O        BBBBB  ",
                    "BBBBB B O   O  BBB      ",
                    "    B B O B BO B        ",
                    "    B BBBBBBBBBB        ",
                    "    BBB                 "]
        } else if (lvl == 5){
            pict = ["     BBB    BBBBBBBBB ",
                    " BBBB   BBBB         B",
                    "B                    B",
                    "B                    B",
                    "B                    B",
                    "B     B              B",
                    "B     B              B",
                    "B     BOOOO          B",
                    "BG   BBBBBBBL        B",
                    "BB BBB     BB B     OB",
                    " B B        B BB   OOB",
                    " B B        B BB  OOOB",
                    " BBB        B BBBBBBBB",
                    "            BBB       "]
        } else if (lvl == 6){
            pict = [" BBB             BBBB",
                    " B  BBBBBBBBBBBBB   B",
                    "BB                  B",
                    "BG                  B",
                    "BB                  B",
                    " B                OOB",
                    " BOO        B  O  BBB",
                    " BOOO       BLOOO B  ",
                    " BOOOO      BBBBB B  ",
                    " BBBBB    BBB   BBB  ",
                    "     B   OB          ",
                    "     BB BBB          ",
                    "      BBB            "]
        } else if (lvl == 7){
            pict = ["  B   BBBBB   BB   BBB  ",
                    " B B B     B B  B B   B ",
                    " B  BB      BB   BB    B",
                    " B   B       B    B    B",
                    " B                    OB",
                    " B                    OB",
                    "BB                   OOB",
                    "BG   O               BBB",
                    "BB   B O     B    BB B  ",
                    " B   B O    BB O LBBBB  ",
                    " BB  B OOO  BB OOOB     ",
                    "  B  BBBBBB BBBBBBB     ",
                    "  BB B    BBB           ",
                    "   BBB                  "]
        } else if (lvl == 8){
            pict = [" BBB       BBBB   BBBBBBB  ",
                    "B   B     B    B B       B ",
                    "B    B   B     BB         B",
                    "BO    BBB    B B     BBB  B",
                    "BOO         BB      BB B  B",
                    "BBBB       BB          BG B",
                    "   BB            BB    BB B",
                    "  B    O B      B  B      B",
                    "  B    OB B    B   B      B",
                    " B   BBB   B    B  B     OB",
                    " B      B B      BB     OOB",
                    "B        B           BBBBBB",
                    "B            O            B",
                    "B    O      BBB          OB",
                    "B   BBB                 OOB",
                    "B        O       O  L  OOOB",
                    "BBBBBBBBBBBBBBBBBBBBBBBBBBB"]
        } else if (lvl == 9){
            pict = ["        BBB         ",
                    "       B   B        ",
                    "      B     B  BBBBB",
                    "     B       BB    B",
                    "    B     O        B",
                    "   B      OO      OB",
                    "  B       BBB    OOB",
                    " B            L BBBB",
                    "B             O    B",
                    "BG           BBB   B",
                    "BB    BB   B      OB",
                    " B    BBO  BB   BBBB",
                    " B    BBBBBBB  BB   ",
                    " BBB  B     B BB    ",
                    "   B BB     BBB     ",
                    "   BBB              "]
        } else if (lvl == 10){
            pict = ["   BBBBBBBBBBBBBBBBBBBBB   ",
                    " BB           B         B  ",
                    "BBBBO       OOBO   OOO OBB ",
                    "B  BB  B   BBBBB  OBBB BB B",
                    "B   B  BB        BBB BBB  B",
                    "B   BB  BBOOOO            B",
                    "BG       BBBBBBB          B",
                    "BB        B   BBB        BB",
                    " B     O   B B  BB        B",
                    " B     B    B    BB       B",
                    " BBBB  BB             BBBBB",
                    "   BBBBB      L           B",
                    "   B          B           B",
                    "   B         BB    BBBBBBBB",
                    "   B        BB           B ",
                    "   B          O         OB ",
                    "   BO    BBBBBBBBBBB   OOB ",
                    "   BOO  BB         BB OOOB ",
                    "   BBBBBB           BBBBBB "]
        } else if (lvl == 11){
            pict = ["BBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                    "B  B   B                    B",
                    "B     OBOO            BBBBB B",
                    "BO   BBB OBB     O  BB  G B B",
                    "BOO    BBB   L  O       B B B",
                    "BBB  OOB     B O          B B",
                    "B   BBBB      B  BBB   BBB  B",
                    "BO            B B      B  O B",
                    "BOO       BBB B BO    B  BBBB",
                    "BBBB O   BBB  B BBO  B O B  B",
                    "B           O BBB  OB   B   B",
                    "B   O     OO B   BBBB       B",
                    "B    BBBBBBBBB        BBBBB B",
                    "B              O   OBB    B B",
                    "BBBB           O   B    OOB B",
                    "BOBB   B    B          BBBB B",
                    "BBOBBB B    B   OOO O       B",
                    "BOBOBOBB    B        OOO    B",
                    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBB"]
				}
            
        return pict;
}        
