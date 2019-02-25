/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define({iexcl:"semnul exclamării inversat",cent:"semnul cent",pound:"semnul liră sterlină",curren:"semnul monedă",yen:"semnul yen\nsemnul yuan",brvbar:"bară întreruptă\nbară verticală întreruptă",sect:"semn secţiune",uml:"tremă\ntremă spaţiere",copy:"semnul copyright",ordf:"indicator ordinal feminin",laquo:"semn de citare paranteză unghiulară dublă la stânga\nsemn de citare la stânga",not:"semn nu",shy:"liniuţă de despărţire soft\nliniuţă de despărţire discreţionară",reg:"semnul de înregistrat\nsemnul de marcă comercială înregistrată",macr:"macron\nmacron spaţiere\nsupralinie\nsuprabară APL",deg:"semn de grade",plusmn:"semn plus-minus\nsemn plus-sau-minus",sup2:"doi ca indice superior\ncifra doi ca indice superior\nla pătrat",sup3:"trei ca indice superior\ncifra trei ca indice superior\nla cub",acute:"accent ascuţit\nascuţit spaţiere",micro:"semn micro",para:"semn pilcrow\nsemn de paragraf",middot:"punct median\nvirgulă georgiană\npunct median grecesc",cedil:"sedilă\nsedilă spaţiere",sup1:"unu ca indice superior\ncifra unu ca indice superior",ordm:"indicator ordinal masculin",raquo:"semn de citare paranteză unghiulară dublă la dreapta\nsemn de citare la dreapta",frac14:"fracţie obişnuită un sfert\nfracţie un sfert",frac12:"fracţie obişnuită jumătate\nfracţie jumătate",frac34:"fracţie obişnuită trei sferturi\nfracţie trei sferturi",iquest:"semn de întrebare inversat\nsemn de întrebare răsturnat",Agrave:"literă mare latină A cu accent grav\nliteră mare latină A grav",Aacute:"literă mare latină A cu accent ascuţit",Acirc:"literă mare latină A cu circumflex",Atilde:"literă mare latină A cu tilda",Auml:"literă mare latină A cu tremă",Aring:"literă mare latină A cu cerculeţ deasupra\nliteră mare latină A cerculeţ",AElig:"literă mare latină AE\nligatură mare latină AE",Ccedil:"literă mare latină C cu sedilă",Egrave:"literă mare latină E cu grav",Eacute:"literă mare latină E cu ascuţit",Ecirc:"literă mare latină E cu circumflex",Euml:"literă mare latină E cu tremă",Igrave:"literă mare latină I cu grav",Iacute:"literă mare latină I cu ascuţit",Icirc:"literă mare latină I cu circumflex",Iuml:"literă mare latină I cu tremă",ETH:"literă mare latină ETH",Ntilde:"literă mare latină N cu tilda",Ograve:"literă mare latină O cu grav",Oacute:"literă mare latină O cu ascuţit",Ocirc:"literă mare latină O cu circumflex",Otilde:"literă mare latină O cu tilda",Ouml:"literă mare latină O cu tremă",times:"semnul înmulţire",Oslash:"literă mare latină O cu liniuţă\nliteră mare latină O slash",Ugrave:"literă mare latină U cu grav",Uacute:"literă mare latină U cu ascuţit",Ucirc:"literă mare latină U cu circumflex",Uuml:"literă mare latină U cu tremă",Yacute:"literă mare latină Y cu ascuţit",THORN:"literă mare latină THORN",szlig:"literă latină mică s ascuţit\ns zeta",agrave:"literă latină mică a cu grav\nliteră latină mică a cu grav",aacute:"literă latină mică a cu ascuţit",acirc:"literă latină mică a cu circumflex",atilde:"literă latină mică a cu tilda",auml:"literă latină mică a cu tremă",aring:"literă latină mică cu cerculeţ deasupra\nliteră latină mică cu cerculeţ",aelig:"literă latină mică ae\nligatură latină mică ae",ccedil:"literă latină mică c cu sedilă",egrave:"literă latină mică e cu grav",eacute:"literă latină mică e ascuţit",ecirc:"literă latină mică e cu circumflex",euml:"literă latină mică e cu tremă",igrave:"literă latină mică i cu grav",iacute:"literă latină mică i cu ascuţit",icirc:"literă latină mică i cu circumflex",iuml:"literă latină mică i cu tremă",eth:"literă latină mică eth",ntilde:"literă latină mică n cu tilda",ograve:"literă latină mică o cu grav",oacute:"literă latină mică o cu ascuţit",ocirc:"literă latină mică o cu circumflex",otilde:"literă latină mică o cu tilda",ouml:"literă latină mică o cu tremă",divide:"semnul împărţire",oslash:"literă latină mică o cu liniuţă\nliteră latină mică o slash",ugrave:"literă latină mică u cu grav",uacute:"literă latină mică u cu ascuţit",ucirc:"literă latină mică u cu circumflex",uuml:"literă latină mică u cu tremă",yacute:"literă latină mică y cu ascuţit",thorn:"literă latină mică thorn",yuml:"literă latină mică y cu tremă",fnof:"f mic latin cu cârlig\nfuncţie\nflorin",Alpha:"literă greacă mare alfa",Beta:"literă greacă mare beta",Gamma:"literă greacă mare gamma",Delta:"literă greacă mare delta",Epsilon:"literă greacă mare epsilon",Zeta:"literă greacă mare zeta",Eta:"literă greacă mare eta",Theta:"literă greacă mare theta",Iota:"literă greacă mare iota",Kappa:"literă greacă mare kappa",Lambda:"literă greacă mare lambda",Mu:"literă greacă mare miu",Nu:"literă greacă mare niu",Xi:"literă greacă mare xi",Omicron:"literă greacă mare omicron",Pi:"literă greacă mare pi",Rho:"literă greacă mare rho",Sigma:"literă greacă mare sigma",Tau:"literă greacă mare tau",Upsilon:"literă greacă mare upsilon",Phi:"literă greacă mare phi",Chi:"literă greacă mare chi",Psi:"literă greacă mare psi",Omega:"literă greacă mare omega",alpha:"literă greacă mică alfa",beta:"literă greacă mică beta",gamma:"literă greacă mică gamma",delta:"literă greacă mică delta",epsilon:"literă greacă mică epsilon",zeta:"literă greacă mică zeta",eta:"literă greacă mică eta",theta:"literă greacă mică theta",iota:"literă greacă mică iota",kappa:"literă greacă mică kappa",lambda:"literă greacă mică lambda",mu:"literă greacă mică miu",nu:"literă greacă mică niu",xi:"literă greacă mică xi",omicron:"literă greacă mică omicron",pi:"literă greacă mică pi",rho:"literă greacă mică rho",sigmaf:"literă greacă mică sigma final",sigma:"literă greacă mică sigma",tau:"literă greacă mică tau",upsilon:"literă greacă mică upsilon",phi:"literă greacă mică phi",chi:"literă greacă mică chi",psi:"literă greacă mică psi",omega:"literă greacă mică omega",thetasym:"literă greacă mică simbol theta",upsih:"simbolul grec upsilon cu cârlig",piv:"simbolul grec pi",bull:"bullet\ncerc mic negru",hellip:"elipsă orizontală\ntrei puncte",prime:"prim\nminute\npicioare",Prime:"prim dublu\nsecunde\ninch",oline:"supralinie\ntăiere spaţiere",frasl:"linie fracţie",weierp:"litera P mare de mână\nmulţimea submulţimilor\np Weierstrass",image:"litera I mare neagră\npartea imaginară",real:"litera R mare neagră\nsimbolul părţii reale",trade:"semnul de marcă înregistrată",alefsym:"simbolul alef\nprimul cardinal transfinit",larr:"săgeată spre stânga",uarr:"săgeata în sus",rarr:"săgeată spre dreapta",darr:"săgeata în jos",harr:"săgeata stânga dreapta",crarr:"săgeata în jos cu colţ spre stânga",lArr:"săgeata dublă spre stânga",uArr:"săgeata dublă în sus",rArr:"săgeata dublă spre dreapta",dArr:"săgeata dublă în jos",hArr:"săgeata dublă stânga dreapta",forall:"pentru toate",part:"diferenţiale parţiale",exist:"Există",empty:"mulţime vidă\nmulţime nulă\ndiametru",nabla:"nabla\ndiferenţă înapoi",isin:"element al",notin:"nu este un element al",ni:"conţine ca membru",prod:"produs cu n termeni\nsemnul produs",sum:"sumă cu n termeni",minus:"semnul minus",lowast:"operatorul asterisc",radic:"rădăcină pătrată\nsemnul radical",prop:"proporţional cu",infin:"infinit",ang:"unghi",and:"şi logic\ncăciulă",or:"sau logic\nV",cap:"intersecţie\nU răsturnat",cup:"uniune\nU",int:"integrală",there4:"de aceea",sim:"operatorul tilde\nvariază cu\nsimilar cu",cong:"aproximativ egal cu",asymp:"aproape egal cu\nasimptotic la",ne:"nu este egal cu",equiv:"identic cu",le:"mai mic sau egal cu",ge:"mai mare sau egal cu",sub:"subset al",sup:"superset al",nsub:"nu este un subset al",sube:"subset al sau egal cu",supe:"superset al sau egal cu",oplus:"plus încercuit\nsumă directă",otimes:"Semnul înmulţirii încercuit\nprodus vectorial",perp:"T răsturnat\nortogonal\nperpendicular",sdot:"operator punct",lceil:"plafon stânga\nupstile APL",rceil:"plafon dreapta",lfloor:"plafon dreapta\ndownstile APL",rfloor:"podea dreapta",lang:"paranteză unghiulară spre stânga",rang:"paranteză unghiulară spre dreapta",loz:"romb",spades:"treflă neagră",clubs:"pică neagră\ntrifoi",hearts:"cupă neagră\ninimă",diams:"caro negru",OElig:"ligatură mare latină OE",oelig:"ligatură mică latină oe",Scaron:"literă mare latină S cu caron",scaron:"literă mică latină s cu caron",Yuml:"literă mare latină Y cu tremă",circ:"accent circumflex modificator de literă",tilde:"tilda mică",ensp:"spaţiu en",emsp:"spaţiu em",thinsp:"spaţiu îngust",zwnj:"zero fără unificator",zwj:"zero cu unificator",lrm:"semn stânga spre dreapta",rlm:"semn dreapta spre stânga",ndash:"linie en",mdash:"linie em",lsquo:"ghilimele simple stânga",rsquo:"ghilimele simple dreapta",sbquo:"single low-9 semn de citare",ldquo:"ghilimele duble stânga",rdquo:"ghilimele duble dreapta",bdquo:"double low-9 semn de citare",dagger:"cruce",Dagger:"cruce dublă",permil:"semn per mie",lsaquo:"ghilimele singure unghiulare spre stânga",rsaquo:"ghilimele singure unghiulare spre dreapta",euro:"semn euro"});
//# sourceMappingURL=../../../../sourcemaps/editor/plugins/nls/ro/latinEntities.js.map
