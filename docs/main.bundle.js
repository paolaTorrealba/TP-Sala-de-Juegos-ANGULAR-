webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ruteando_ruteando_module__ = __webpack_require__("../../../../../src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_listados_listados_component__ = __webpack_require__("../../../../../src/app/componentes/listados/listados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_cabecera_cabecera_component__ = __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_input_jugadores_input_jugadores_component__ = __webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_sexo_pipe__ = __webpack_require__("../../../../../src/app/pipes/sexo.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__componentes_memotec_memotec_component__ = __webpack_require__("../../../../../src/app/componentes/memotec/memotec.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_paises_paises_component__ = __webpack_require__("../../../../../src/app/componentes/paises/paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__componentes_animales_animales_component__ = __webpack_require__("../../../../../src/app/componentes/animales/animales.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { HttpModule } from '@angular/http';













// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
                __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__["a" /* PrincipalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
                __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_16__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__componentes_listado_listado_component__["a" /* ListadoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__componentes_listados_listados_component__["a" /* ListadosComponent */],
                __WEBPACK_IMPORTED_MODULE_23__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
                __WEBPACK_IMPORTED_MODULE_24__componentes_registro_registro_component__["a" /* RegistroComponent */],
                __WEBPACK_IMPORTED_MODULE_25__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
                __WEBPACK_IMPORTED_MODULE_26__componentes_cabecera_cabecera_component__["a" /* CabeceraComponent */],
                __WEBPACK_IMPORTED_MODULE_27__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
                __WEBPACK_IMPORTED_MODULE_28__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
                __WEBPACK_IMPORTED_MODULE_29__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__componentes_input_jugadores_input_jugadores_component__["a" /* InputJugadoresComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_sexo_pipe__["a" /* SexoPipe */],
                __WEBPACK_IMPORTED_MODULE_32__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */],
                __WEBPACK_IMPORTED_MODULE_33__componentes_memotec_memotec_component__["a" /* MemotecComponent */],
                __WEBPACK_IMPORTED_MODULE_34__componentes_paises_paises_component__["a" /* PaisesComponent */],
                __WEBPACK_IMPORTED_MODULE_35__componentes_animales_animales_component__["a" /* AnimalesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__ruteando_ruteando_module__["a" /* RuteandoModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__servicios_juego_service_service__["a" /* JuegoServiceService */], __WEBPACK_IMPORTED_MODULE_8__servicios_mi_http_mi_http_service__["a" /* MiHttpService */], __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__["a" /* PaisesService */], __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__["a" /* ArchivosJugadoresService */], __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__["a" /* JugadoresService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAdivina = /** @class */ (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAgilidad = /** @class */ (function (_super) {
    __extends(JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador) {
        var _this = _super.call(this, "Agilidad Aritmetica", gano, jugador) || this;
        _this.primerNumero = 0;
        _this.segundoNumero = 0;
        _this.operadorList = ["suma", "resta", "multiplicacion", "division"];
        _this.operadorSeleccionado = '';
        _this.resultado = 0;
        _this.resultadoIngresado = 0;
        return _this;
    }
    JuegoAgilidad.prototype.verificar = function () {
        if ((this.primerNumero != 0) && (this.segundoNumero != 0) && (this.operadorSeleccionado != '')) {
            switch (this.operadorSeleccionado) {
                case '+': {
                    this.resultado = this.primerNumero + this.segundoNumero;
                    break;
                }
                case '-': {
                    this.resultado = this.primerNumero - this.segundoNumero;
                    break;
                }
                case '/': {
                    if (this.segundoNumero > 0)
                        this.resultado = this.primerNumero / this.segundoNumero;
                    else {
                        console.log("error al dividir por 0");
                    }
                    break;
                }
                case '*': {
                    this.resultado = this.primerNumero * this.segundoNumero;
                    break;
                }
                default: {
                    break;
                }
            }
            if (this.resultadoIngresado == this.resultado)
                this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoAgilidad;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-piedra-papel-tijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoPiedraPapelTijera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoPiedraPapelTijera = /** @class */ (function (_super) {
    __extends(JuegoPiedraPapelTijera, _super);
    function JuegoPiedraPapelTijera(nombre, gano, jugador) {
        var _this = _super.call(this, "", false, "") || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoPiedraPapelTijera.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoPiedraPapelTijera.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoPiedraPapelTijera.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoPiedraPapelTijera;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-piedra-papel-tijera.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = /** @class */ (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]);

// module
exports.push([module.i, "/*custom font*/\r\n\r\n/*basic reset*/\r\n* {margin: 0; padding: 0;}\r\n\r\nhtml {\r\n\theight: 100%;\r\n\t/*Image only BG fallback*/\r\n\t\r\n\t/*background = gradient + image pattern combo*/\r\n\tbackground: \r\n\t\tlinear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));\r\n}\r\n\r\nbody {\r\n\tfont-family: montserrat, arial, verdana;\r\n}\r\n/*form styles*/\r\n#msform {\r\n\twidth: 400px;\r\n\tmargin: 50px auto;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n}\r\n#msform fieldset {\r\n\tbackground: rgba(67, 72, 82, 0.884);\r\n\tborder: 0 none;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\r\n\tpadding: 20px 30px;\r\n\tbox-sizing: border-box;\r\n\twidth: 80%;\r\n\tmargin: 0 10%;\r\n\t\r\n\t/*stacking fieldsets above each other*/\r\n\tposition: relative;\r\n}\r\n/*Hide all except first fieldset*/\r\n#msform fieldset:not(:first-of-type) {\r\n\tdisplay: none;\r\n}\r\n/*inputs*/\r\n#msform input, #msform textarea {\r\n\tpadding: 15px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 10px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n\tfont-family: montserrat;\r\n\tcolor: #2C3E50;\r\n\tfont-size: 13px;\r\n}\r\n/*buttons*/\r\n#msform .action-button {\r\n\twidth: 170px;\r\n\tbackground: rgba(0, 225, 255, 0.568);\r\n\tfont-weight: bold;\r\n\tcolor: rgb(0, 24, 88);\r\n\tborder: 0 none;\r\n\tborder-radius: 10px;\r\n\tcursor: pointer;\r\n\tpadding: 10px 5px;\r\n\tmargin: 10px 5px;\r\n}\r\n#msform .action-button:hover, #msform .action-button:focus {\r\n\tbox-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;\r\n}\r\n/*headings*/\r\n.fs-title {\r\n\tfont-size: 15px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #2C3E50;\r\n    margin-bottom: 10px;\r\n    margin-top: 20px;\r\n}\r\n.fs-subtitle {\r\n\tfont-weight: normal;\r\n\tfont-size: 13px;\r\n\tcolor: #666;\r\n\tmargin-bottom: 20px;\r\n}\r\n/*progressbar*/\r\n#progressbar {\r\n\tmargin-bottom: 30px;\r\n\toverflow: hidden;\r\n\t/*CSS counters to number the steps*/\r\n\tcounter-reset: step;\r\n}\r\n#progressbar li {\r\n\tlist-style-type: none;\r\n\tcolor: white;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 9px;\r\n\twidth: 33.33%;\r\n\tfloat: left;\r\n\tposition: relative;\r\n}\r\n#progressbar li:before {\r\n\tcontent: counter(step);\r\n\tcounter-increment: step;\r\n\twidth: 20px;\r\n\tline-height: 20px;\r\n\tdisplay: block;\r\n\tfont-size: 10px;\r\n\tcolor: #333;\r\n\tbackground: white;\r\n\tborder-radius: 3px;\r\n\tmargin: 0 auto 5px auto;\r\n}\r\n/*progressbar connectors*/\r\n#progressbar li:after {\r\n\tcontent: '';\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\tleft: -50%;\r\n\ttop: 9px;\r\n\tz-index: -1; /*put it behind the numbers*/\r\n}\r\n#progressbar li:first-child:after {\r\n\t/*connector not needed before the first step*/\r\n\tcontent: none; \r\n}\r\n/*marking active/completed steps green*/\r\n/*The number of the step and the connector before it = green*/\r\n#progressbar li.active:before,  #progressbar li.active:after{\r\n\tbackground: #27AE60;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*form {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n   /* color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n/*@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n\r\n<!--\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{nuevoJuego.nombre}}!\r\n  </h1>\r\n </div>\r\n<h2></h2>\r\n\r\n<form name=\"juego\">\r\n\r\n   <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\r\n \r\n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n \r\n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n \r\n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n\r\n\r\n</form>\r\n<div id=\"snackbar\">{{Mensajes}}</div> -->\r\n\r\n <!-- fieldsets -->\r\n<!-- multistep form -->\r\n\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n      {{nuevoJuego.nombre}}!\r\n    </h1>\r\n</div>\r\n<form id=\"msform\">    \r\n    <fieldset>\r\n        <button  (click)=\"generarnumero()\"  name=\"next\" class=\"next action-button\" >Nuevo Numero</button>\r\n        <h2 [hidden]=\"nuevoJuego.numeroSecreto==0\">Se ha generado un nuevo número secreto</h2>\r\n        \r\n        <br>\r\n      <h3 class=\"fs-title\">Ingrese su respuesta</h3>\r\n      <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" />\r\n      \r\n      <!-- <h1>{{nuevoJuego.numeroIngresado}}  </h1>-->\r\n       <button *ngIf=\"nuevoJuego.numeroIngresado!=0\" (click)=\"verificar()\" type=\"button\" class=\"btn btn-outline-dark\" style=\"color:rgba(251, 255, 0, 0.979); border-color: #ffffff00;\">Verificar</button>\r\n        <br>\r\n        <br>\r\n        <div id=\"snackbar\">{{Mensajes}}</div>  \r\n     \r\n    </fieldset>\r\n   <br>\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">--- Usted aún no gano ---</h3>\r\n</form>\r\n  "

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaElNumeroComponent = /** @class */ (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    var _a;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
    AdivinaElNumeroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-adivina-el-numero',
            template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdivinaElNumeroComponent);
    return AdivinaElNumeroComponent;
}());

//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \r\n<h1> listado </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdivinaMasListadoComponent = /** @class */ (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    };
    AdivinaMasListadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-adivina-mas-listado',
            template: __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdivinaMasListadoComponent);
    return AdivinaMasListadoComponent;
}());

//# sourceMappingURL=adivina-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]);

// module
exports.push([module.i, "/*custom font*/\r\n\r\n/*basic reset*/\r\n* {margin: 0; padding: 0;}\r\n\r\nhtml {\r\n\theight: 100%;\r\n\t/*Image only BG fallback*/\r\n\t\r\n\t/*background = gradient + image pattern combo*/\r\n\tbackground: \r\n\t\tlinear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));\r\n}\r\n\r\nbody {\r\n\tfont-family: montserrat, arial, verdana;\r\n}\r\n/*form styles*/\r\n#msform {\r\n\twidth: 400px;\r\n\tmargin: 50px auto;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n}\r\n#msform fieldset {\r\n\tbackground: white;\r\n\tborder: 0 none;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\r\n\tpadding: 20px 30px;\r\n\tbox-sizing: border-box;\r\n\twidth: 80%;\r\n\tmargin: 0 10%;\r\n\t\r\n\t/*stacking fieldsets above each other*/\r\n\tposition: relative;\r\n}\r\n/*Hide all except first fieldset*/\r\n#msform fieldset:not(:first-of-type) {\r\n\tdisplay: none;\r\n}\r\n/*inputs*/\r\n#msform input, #msform textarea {\r\n\tpadding: 15px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 10px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n\tfont-family: montserrat;\r\n\tcolor: #2C3E50;\r\n\tfont-size: 13px;\r\n}\r\n/*buttons*/\r\n#msform .action-button {\r\n\twidth: 100px;\r\n\tbackground: #27AE60;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n\tborder: 0 none;\r\n\tborder-radius: 1px;\r\n\tcursor: pointer;\r\n\tpadding: 10px 5px;\r\n\tmargin: 10px 5px;\r\n}\r\n#msform .action-button:hover, #msform .action-button:focus {\r\n\tbox-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;\r\n}\r\n/*headings*/\r\n.fs-title {\r\n\tfont-size: 15px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #2C3E50;\r\n\tmargin-bottom: 10px;\r\n}\r\n.fs-subtitle {\r\n\tfont-weight: normal;\r\n\tfont-size: 13px;\r\n\tcolor: #666;\r\n\tmargin-bottom: 20px;\r\n}\r\n/*progressbar*/\r\n#progressbar {\r\n\tmargin-bottom: 30px;\r\n\toverflow: hidden;\r\n\t/*CSS counters to number the steps*/\r\n\tcounter-reset: step;\r\n}\r\n#progressbar li {\r\n\tlist-style-type: none;\r\n\tcolor: white;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 9px;\r\n\twidth: 33.33%;\r\n\tfloat: left;\r\n\tposition: relative;\r\n}\r\n#progressbar li:before {\r\n\tcontent: counter(step);\r\n\tcounter-increment: step;\r\n\twidth: 20px;\r\n\tline-height: 20px;\r\n\tdisplay: block;\r\n\tfont-size: 10px;\r\n\tcolor: #333;\r\n\tbackground: white;\r\n\tborder-radius: 3px;\r\n\tmargin: 0 auto 5px auto;\r\n}\r\n/*progressbar connectors*/\r\n#progressbar li:after {\r\n\tcontent: '';\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\tleft: -50%;\r\n\ttop: 9px;\r\n\tz-index: -1; /*put it behind the numbers*/\r\n}\r\n#progressbar li:first-child:after {\r\n\t/*connector not needed before the first step*/\r\n\tcontent: none; \r\n}\r\n/*marking active/completed steps green*/\r\n/*The number of the step and the connector before it = green*/\r\n#progressbar li.active:before,  #progressbar li.active:after{\r\n\tbackground: #27AE60;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<form name=\"juego\">\r\n<ul>\r\n   <li>\r\n   Primer número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" />\r\n\r\n  </li>\r\n  <li>\r\n   Operador: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" />\r\n\r\n  </li>\r\n  <li>\r\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" />\r\n\r\n  </li>\r\n  <li>\r\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n\r\n   </li>\r\n  <li>\r\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\r\n  </li>\r\n  <li>\r\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\r\n  </li>\r\n  <li>\r\n    <h2><p><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero...</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n  </li>\r\n</ul>\r\n\r\n</form>-->\r\n\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n      {{nuevoJuego.nombre}}!\r\n    </h1>\r\n</div>\r\n<form id=\"msform\">    \r\n    <fieldset>\r\n        <button  (click)=\"generarnumero()\"  name=\"next\" class=\"next action-button\" >Nuevo Numero</button>\r\n   \r\n        \r\n        <br>\r\n      <h3 class=\"fs-title\">Ingrese primer numero</h3>\r\n      <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"primerIngresado\" type=\"text\" class=\"form-control\" />\r\n\r\n      <h3 class=\"fs-title\">Ingrese primer numero</h3>\r\n     \r\n         \r\n            <ul>\r\n                <li *ngFor=\"let item of operadorLista\">\r\n                  {{item}}\r\n                </li>\r\n              </ul>\r\n          \r\n      <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"operadorIngresado\" type=\"text\" class=\"form-control\" />\r\n      \r\n      <!-- <h1>{{nuevoJuego.numeroIngresado}}  </h1>-->\r\n       <button *ngIf=\"nuevoJuego.numeroIngresado!=0\" (click)=\"verificar()\" type=\"button\" class=\"btn btn-outline-dark\" style=\"color:rgba(251, 255, 0, 0.979); border-color: #ffffff00;\">Verificar</button>\r\n        <br>\r\n        <br>\r\n        <div id=\"snackbar\">{{Mensajes}}</div>  \r\n     \r\n    </fieldset>\r\n   <br>\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">--- Usted aún no gano ---</h3>\r\n</form>\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadAritmeticaComponent = /** @class */ (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.ocultarVerificar = false;
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
    };
    var _a;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
    AgilidadAritmeticaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-agilidad-aritmetica',
            template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgilidadAritmeticaComponent);
    return AgilidadAritmeticaComponent;
}());

//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \r\n<h1> Listado de Resultados </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgilidadMasListadoComponent = /** @class */ (function () {
    function AgilidadMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    AgilidadMasListadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-agilidad-mas-listado',
            template: __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgilidadMasListadoComponent);
    return AgilidadMasListadoComponent;
}());

//# sourceMappingURL=agilidad-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  anagrama works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnagramaComponent = /** @class */ (function () {
    function AnagramaComponent() {
    }
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    AnagramaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-anagrama',
            template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnagramaComponent);
    return AnagramaComponent;
}());

//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/animales/animales.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>ANIMALES</h1>\n\n    <button  (click)=\"jugar()\"  name=\"next\" class=\"next action-button\" >Jugar!</button>\n    <p>Se le mostraran 8 imagenes de animales al azar y tendrá que memorizarlas en 8 segundos.\n      Al acabar el tiempo se le preguntará por el animal que aparece en cierta ubicación. \n    </p>\n  \n   \n    <div *ngIf=\"mostrarFotos && juegoEmpezado\">\n      <div class=\"row\"><h2 style=\"text-align: center;\">tiempo: {{tiempo}}</h2></div>\n      <div class=\"row\">\n        <h2>1</h2><a href=\"#\"><div class=\"col-md-3 col-sm-4 col-xs-6\"><img class=\"img-responsive\" src=\n        \"{{animalesRandom[0]['path']}}\" width=\"150px\" height=\"100px\" /></div></a>\n        <h2>2</h2><a href=\"#\"><div class=\"col-md-3 col-sm-4 col-xs-6\"><img class=\"img-responsive\" src=\n        \"{{animalesRandom[1]['path']}}\" width=\"150px\" height=\"100px\" /></div></a>\n      </div>\n      <div class=\"row\">\n        <h2>3</h2><a href=\"#\"><div class=\"col-md-3 col-sm-4 col-xs-6\"><img class=\"img-responsive\" src=\n        \"{{animalesRandom[2]['path']}}\" width=\"140px\" height=\"100px\" /></div></a>\n        <h2>4</h2><a href=\"#\"><div class=\"col-md-3 col-sm-4 col-xs-6\"><img class=\"img-responsive\" src=\n        \"{{animalesRandom[3]['path']}}\" width=\"140px\" height=\"100px\" /></div></a>\n      </div>\n      <div class=\"row\">\n        <h2>5</h2><a href=\"#\"><div class=\"col-md-3 col-sm-4 col-xs-6\"><img class=\"img-responsive\" src=\n        \"{{animalesRandom[4]['path']}}\" width=\"140px\" height=\"100px\" /></div></a>\n        <h2>6</h2><a href=\"#\"><div class=\"col-md-3 col-sm-4 col-xs-6\"><img class=\"img-responsive\" src=\n        \"{{animalesRandom[5]['path']}}\" width=\"140px\" height=\"100px\" /></div></a>\n      </div>\n      <div class=\"row\">\n        <h2>7</h2><a href=\"#\"><div class=\"col-md-3 col-sm-4 col-xs-6\"><img class=\"img-responsive\" src=\n        \"{{animalesRandom[6]['path']}}\" width=\"140px\" height=\"100px\" /></div></a>\n        <h2>8</h2><a href=\"#\"><div class=\"col-md-3 col-sm-4 col-xs-6\"><img class=\"img-responsive\" src=\n        \"{{animalesRandom[7]['path']}}\" width=\"140px\" height=\"100px\" /></div></a>\n      </div>\n    </div>\n   \n\n\n    <div *ngIf=\"!mostrarFotos && juegoEmpezado\">\n      <h1>{{mensaje}}</h1>     \n        <p>Respuesta: </p>\n        <input type=\"text\" required [(ngModel)]=\"respuesta\" />    \n     \n        <div class=\"flex-v center-horizontal center-vertical height-100\" (click)=\"verificar()\">\n          <div class=\"text-title\">Verificar</div>\n        </div>      \n    </div>\n  \n    <div *ngIf=\"!ocultar && !mostrarSpiner\" class=\"flex-v buttons-container\">\n      <h1>{{mensajeRespuesta}}</h1>\n      \n        <div class=\"flex-v center-horizontal center-vertical height-100\" (click)=\"jugar()\">\n          <div class=\"text-title\">Jugar otra partida!</div>\n        </div>\n      \n     \n       \n          <div class=\"text-title\">Salir!</div>\n      \n      \n    </div>\n\n  \n  \n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/animales/animales.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "page-juego-descuento .scroll-content {\n  background-size: cover;\n  background-position: center;\n  background-color: #FCE5C6; }\n\npage-juego-descuento ion-navbar {\n  padding: 20px 10px !important; }\n  page-juego-descuento ion-navbar ion-icon {\n    color: white; }\n\npage-juego-descuento ion-navbar ion-icon {\n  font-size: 50px !important; }\n\npage-juego-descuento h1 {\n  text-align: center;\n  margin-bottom: 10px;\n  padding: 5px 10px 5px 10px;\n  color: black;\n  font-family: cinzel;\n  margin-bottom: 0; }\n\npage-juego-descuento .buttons-container {\n  height: calc(100% - 1em); }\n\npage-juego-descuento .big-button-container {\n  border-radius: 1em;\n  cursor: pointer;\n  border-radius: 1em; }\n\npage-juego-descuento .text-title {\n  color: white;\n  font-size: 3.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/animales/animales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_animales_http_service__ = __webpack_require__("../../../../../src/app/servicios/animales-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimalesComponent = /** @class */ (function () {
    function AnimalesComponent(animalesService) {
        var _this = this;
        this.animalesService = animalesService;
        this.myColor = '';
        this.numeroSecreto = 0;
        this.numeroIngresado = 0;
        this.animales = new Array();
        this.animalesRandom = new Array();
        this.animalesService.getAnimales().subscribe(function (lista) {
            _this.animales = lista;
            _this.mostrarSpiner = false;
            _this.ocultar = true;
        });
    }
    AnimalesComponent.prototype.obtenerAnimalesRandom = function () {
        this.animalesRandom = [];
        var num = 0;
        while (num < 8) {
            var numRandom = Math.floor((Math.random() * 50));
            if (this.PerteneceAnimal(this.animales[numRandom].nombreAnimal)) {
                this.animalesRandom.push(this.animales[numRandom]);
                num++;
            }
        }
    };
    AnimalesComponent.prototype.PerteneceAnimal = function (nombre) {
        for (var i = 0; i < this.animalesRandom.length; i++) {
            if (this.animalesRandom[i].nombreAnimal == nombre) {
                return false;
            }
        }
        return true;
    };
    AnimalesComponent.prototype.jugar = function () {
        var _this = this;
        this.obtenerAnimalesRandom();
        this.mostrarFotos = true;
        this.juegoEmpezado = true;
        this.ocultar = true;
        var numRandom = Math.floor((Math.random() * 8)) + 1;
        this.tiempo = 8;
        this.mensaje = '';
        this.respuesta = '';
        this.repetidor = setInterval(function () {
            _this.tiempo--;
            if (_this.tiempo == 0) {
                //this.GuardarJugada()
                clearInterval(_this.repetidor);
                _this.tiempo = 8;
                _this.mensaje = "Cual es el nombre del animal de la foto: " + numRandom + "?";
                _this.nombreAnimal = _this.animalesRandom[numRandom - 1].nombreAnimal;
                _this.mostrarFotos = false;
            }
        }, 900);
    };
    AnimalesComponent.prototype.verificar = function () {
        this.respuesta = this.respuesta.toLowerCase();
        if (this.respuesta == this.nombreAnimal) {
            this.mensajeRespuesta = "Felicidades!! Ganaste";
        }
        else {
            this.mensajeRespuesta = "Lo siento, perdiste. El animal era " + this.nombreAnimal;
        }
        this.ocultar = false;
    };
    AnimalesComponent.prototype.ngOnInit = function () {
        this.mostrarFotos = false;
        this.juegoEmpezado = false;
        this.myColor = "primary";
        this.color = "red";
        this.tiempo = 8;
        this.mensaje = '';
    };
    var _a;
    AnimalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-animales',
            template: __webpack_require__("../../../../../src/app/componentes/animales/animales.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/animales/animales.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__servicios_animales_http_service__["a" /* AnimalesHttpService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_animales_http_service__["a" /* AnimalesHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_animales_http_service__["a" /* AnimalesHttpService */]) === "function" && _a || Object])
    ], AnimalesComponent);
    return AnimalesComponent;
}());

//# sourceMappingURL=animales.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".by{\r\n    font-size: 14px;\r\n}\r\nbody {\r\n    background-color: #222222;\r\n    background: repeating-linear-gradient(45deg, #2b2b2b 0%, #2b2b2b 10%, #222222 0%, #222222 50%) 0 / 15px 15px;\r\n  }\r\n  \r\n  #container {\r\n    width: 500px;\r\n    margin: auto;\r\n  }\r\n  \r\n  /*Neon*/\r\n  p {\r\n    text-align: center;\r\n    font-size: 7em;\r\n    margin: 20px 0 20px 0;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    transition: all 0.5s;\r\n  }\r\n  \r\n  p:nth-child(1) a {\r\n    color: #fff;\r\n    font-family: Monoton;\r\n    animation: neon1 1.5s ease-in-out infinite alternate;\r\n  }\r\n  \r\n  p:nth-child(1) a:hover {\r\n    color: #FF1177;\r\n    animation: none;\r\n  }\r\n  \r\n  p:nth-child(2) a {\r\n    font-size: 50%;\r\n    color: #228DFF;\r\n    font-family: Iceland;\r\n  }\r\n  \r\n  p:nth-child(2) a:hover {\r\n    animation: neon2 1.5s ease-in-out infinite alternate;\r\n  }\r\n  \r\n  p:nth-child(3) a {\r\n    color: #FFDD1B;\r\n    font-family: Pacifico;\r\n  }\r\n  \r\n  p:nth-child(3) a:hover {\r\n    animation: neon3 1.5s ease-in-out infinite alternate;\r\n  }\r\n  \r\n  p:nth-child(4) a {\r\n    color: #B6FF00;\r\n    font-family: \"Press Start 2P\";\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  p:nth-child(4) a:hover {\r\n    animation: neon4 1.5s ease-in-out infinite alternate;\r\n  }\r\n  \r\n  p:nth-child(5) a {\r\n    color: #FF9900;\r\n    font-family: Audiowide;\r\n  }\r\n  \r\n  p:nth-child(5) a:hover {\r\n    animation: neon5 1.5s ease-in-out infinite alternate;\r\n  }\r\n  \r\n  p:nth-child(6) a {\r\n    color: #BA01FF;\r\n    font-family: Vampiro One;\r\n  }\r\n  \r\n  p:nth-child(6) a:hover {\r\n    animation: neon6 1.5s ease-in-out infinite alternate;\r\n  }\r\n  \r\n  p a:hover {\r\n    color: #ffffff;\r\n  }\r\n  /*glow for webkit*/\r\n  /*glow for mozilla*/\r\n  /*glow*/\r\n  \r\n  @keyframes neon1 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;\r\n    }\r\n  }\r\n  \r\n  @keyframes neon2 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;\r\n    }\r\n  }\r\n  \r\n  @keyframes neon3 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FFDD1B, 0 0 70px #FFDD1B, 0 0 80px #FFDD1B, 0 0 100px #FFDD1B, 0 0 150px #FFDD1B;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FFDD1B, 0 0 35px #FFDD1B, 0 0 40px #FFDD1B, 0 0 50px #FFDD1B, 0 0 75px #FFDD1B;\r\n    }\r\n  }\r\n  \r\n  @keyframes neon4 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #B6FF00, 0 0 70px #B6FF00, 0 0 80px #B6FF00, 0 0 100px #B6FF00, 0 0 150px #B6FF00;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00;\r\n    }\r\n  }\r\n  \r\n  @keyframes neon5 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF9900, 0 0 70px #FF9900, 0 0 80px #FF9900, 0 0 100px #FF9900, 0 0 150px #FF9900;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF9900, 0 0 35px #FF9900, 0 0 40px #FF9900, 0 0 50px #FF9900, 0 0 75px #FF9900;\r\n    }\r\n  }\r\n  \r\n  @keyframes neon6 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;\r\n    }\r\n  }\r\n  /*REEEEEEEEEEESPONSIVE*/\r\n  \r\n  @media (max-width: 650px) {\r\n    #container {\r\n      width: 100%;\r\n    }\r\n    p {\r\n      font-size: 3.5em;\r\n    }\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"panel panel-default\">\r\n  <div class=\"hero-text\">\r\n      <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n      <p>Paola Torrealba</p>\r\n      <a href=\"https://github.com/paolaTorrealba\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n      <a  routerLink=\"/QuienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a>\r\n  </div>\r\n  <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a></li>\r\n          <li><a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n  </ul>\r\n</div> -->\r\n\r\n\r\n <div id=\"container\">\r\n    <p><a href=\"\"></a></p>  \r\n    <p><a href=\"\">\r\n      Sala de Juego\r\n    </a></p>    \r\n      <p class='by'>by Paola Torrealba</p> \r\n     <div class=\"btn-toolbar\" style='margin-left: 30%;' role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n            <a  href=\"https://github.com/paolaTorrealba\" class=\"btn btn-outline-secondary\">en GitHub </a>       \r\n        </div>\r\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n            <a  routerLink=\"/QuienSoy\"  class=\"btn btn-outline-secondary\">Quien Soy? </a>       \r\n        </div>      \r\n      </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = /** @class */ (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    CabeceraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-cabecera',
            template: __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CabeceraComponent);
    return CabeceraComponent;
}());

//# sourceMappingURL=cabecera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"hero-text\">\r\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n        <p>Octavio villegas</p>\r\n        <a href=\"https://github.com/paolaTorrealba\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n          </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/componentes/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  input-jugadores works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputJugadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputJugadoresComponent = /** @class */ (function () {
    function InputJugadoresComponent() {
    }
    InputJugadoresComponent.prototype.ngOnInit = function () {
    };
    InputJugadoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-input-jugadores',
            template: __webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputJugadoresComponent);
    return InputJugadoresComponent;
}());

//# sourceMappingURL=input-jugadores.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-menu></app-menu>\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n<br>\r\n  </h1>\r\n </div>\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = /** @class */ (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    JuegosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-juegos',
            template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JuegosComponent);
    return JuegosComponent;
}());

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-justified\">\r\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\r\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\r\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\r\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\r\n</ul>\r\n\r\n\r\n\r\n<table class=\"table table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th>usuario</th>\r\n      <th>cuit</th>\r\n      <th>sexo</th>\r\n      <th>gano</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let jugador of listado\" >\r\n      <td>{{jugador.usuario}} </td>\r\n      <td>{{jugador.cuit}} </td> \r\n      <td>{{jugador.sexo | sexo| uppercase}} </td> \r\n      <td>{{jugador.gano}} </td> \r\n      \r\n    </tr>\r\n   \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresListadoComponent = /** @class */ (function () {
    function JugadoresListadoComponent(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
    };
    JugadoresListadoComponent.prototype.TraerTodos = function () {
        var _this = this;
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerGanadores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerPerdedores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    var _a;
    JugadoresListadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-jugadores-listado',
            template: __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _a || Object])
    ], JugadoresListadoComponent);
    return JugadoresListadoComponent;
}());

//# sourceMappingURL=jugadores-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n Listado de paises\r\n</h1>\r\n<table class=\"table table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th>Pais</th>\r\n      <th>Región</th>\r\n      <th>Nombre local</th>\r\n      <th>Sub Región</th>\r\n      <th>Población</th>\r\n      <th>Bandera</th>\r\n      <th>Capital</th>\r\n      <th>GPS</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let pais of listadoDePaises\">\r\n      <td>{{pais.name}} </td>\r\n      <td>{{pais.region}} </td> \r\n      <td>{{pais.nativeName}} </td> \r\n      <td>{{pais.subregion}} </td>       \r\n      <td>{{pais.population}} </td> \r\n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \r\n      <td>{{pais.capital}} </td> \r\n      <td>{{pais.borders}} </td> \r\n      <td>{{pais.latlng}} </td> \r\n    </tr>\r\n   \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDePaisesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoDePaisesComponent = /** @class */ (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        //Paola: comento por error de compilacion al agegar http
        /* this.miServicioDePaises.listar()
         .then(datos=>{
           console.info("listado de paises",datos);
           this.listadoDePaises=datos;
         });*/
    };
    var _a;
    ListadoDePaisesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-listado-de-paises',
            template: __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */]) === "function" && _a || Object])
    ], ListadoDePaisesComponent);
    return ListadoDePaisesComponent;
}());

//# sourceMappingURL=listado-de-paises.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\r\n\r\n<p> {{juego.nombre}} </p>\r\n<p> {{juego.jugador}} </p>\r\n\r\n</div-->\r\n\r\n<table class=\"table table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th>Juego</th>\r\n        <th>Jugador</th>\r\n        <th>Resultado</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let juego of listado\">\r\n        <td>{{juego.nombre}} </td>\r\n        <td>{{juego.jugador}} </td> \r\n        <td *ngIf=\"juego.gano\">Gano </td>   \r\n        <td *ngIf=\"!juego.gano\">Perdio</td>     \r\n      </tr>\r\n     \r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = /** @class */ (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    var _a;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" && _a || Object)
    ], ListadoDeResultadosComponent.prototype, "listado", void 0);
    ListadoDeResultadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-listado-de-resultados',
            template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListadoDeResultadosComponent);
    return ListadoDeResultadosComponent;
}());

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Add a hover effect if you want */\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n/* Set a specific color for each brand */\r\n\r\n/* Facebook */\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n/* Twitter */\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \r\n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \r\n\r\n<!-- Centered Pills -->\r\n<ul class=\"nav nav-pills nav-justified\">\r\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\r\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\r\n  </ul>\r\n  \r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = /** @class */ (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    //Paola: comento por error de compilacion al agegar http
    /*llamaService(){
      console.log("llamaService");
      this.listadoParaCompartir= this.miServicioJuego.listar();
    }*/
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    var _a;
    ListadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-listado',
            template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
    ], ListadoComponent);
    return ListadoComponent;
}());

//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listados works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadosComponent = /** @class */ (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    ListadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-listados',
            template: __webpack_require__("../../../../../src/app/componentes/listados/listados.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/listados/listados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListadosComponent);
    return ListadosComponent;
}());

//# sourceMappingURL=listados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnContactSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin-right: 6%;\r\n    background-color: rgb(248, 244, 14);\r\n    color: rgb(0, 0, 0);\r\n    margin-top: 4%;\r\n    margin-left: 25%;\r\n}\r\n.register .nav-tabs .nav-link:hover{\r\n    border: none;\r\n}\r\n.text-align{\r\n    margin-top: -3%;\r\n    margin-bottom: -9%;\r\n\r\n    padding: 10%;\r\n    margin-left: 30%;\r\n}\r\n.form-new{\r\n    margin-right: 22%;\r\n    margin-left: 20%;\r\n}\r\n.register-heading{\r\n    margin-left: 21%;\r\n    margin-bottom: 10%;\r\n    color: #e9ecef;\r\n}\r\n.register-heading h1{\r\n    margin-left: 30%;\r\n    margin-bottom: 10%;\r\n    color: #e9ecef;\r\n}\r\n.btnLoginSubmit{\r\n    border: none;\r\n    padding: 2%;\r\n    width: 25%;\r\n    cursor: pointer;\r\n    background: #29abe2;\r\n    color: #fff;\r\n}\r\n.btnForgetPwd{\r\n    cursor: pointer;\r\n    margin-right: 5%;\r\n    color: #f8f9fa;\r\n}\r\n.register{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n    margin-top: 3%;\r\n    /*padding: 3%;*/\r\n    padding-bottom: 10%;\r\n    padding-top: 10%;\r\n    border-radius: 2.5rem;\r\n}\r\n.nav-tabs .nav-link{\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    color: white;\r\n}\r\n/*\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n/*@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n <div class=\"container\" >\r\n  <div class=\"jumbotron\" style=\"padding:50px;\">\r\n    <form action=\"return true;\">\r\n      <div class=\"imgcontainer\">\r\n        <img src=\"./assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <label><b>Usuario</b></label>\r\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\r\n\r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\r\n            \r\n        <button *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\r\n       \r\n        <div *ngIf=\"!logeando\" class=\"progress\">\r\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\r\n              {{progresoMensaje}} - {{progreso}}%\r\n            </div>\r\n        </div>\r\n       \r\n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\r\n      </div>\r\n\r\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n        <button type=\"button\" class=\"cancelbtn\">Cancelar</button>\r\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\r\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\r\n      </div>\r\n     \r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n-->\r\n\r\n\r\n       \r\n        <div class=\"container register\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"tab-content\" id=\"myTabContent\">\r\n                        <div class=\"tab-pane fade show active text-align form-new\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                            <h3 class=\"register-heading\">Sala e Juego</h3>\r\n                            <div class=\"row register-form\">\r\n                                <div class=\"col-md-12\">\r\n                                    <form method=\"post\">\r\n                                        <div class=\"form-group\">\r\n                                            <input  [(ngModel)]=\"usuario\"  type=\"text\" name=\"LGform1_user\" class=\"form-control\" placeholder=\"Usuario\" value=\"\" required/>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <input placeholder=\"Clave\"  [(ngModel)]=\"clave\" type=\"password\" name=\"LGform1_pwd\" class=\"form-control\" value=\"\" required/>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"submit\" name=\"LGform1\" class=\"btnContactSubmit\" value=\"Login\" />                       \r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <input routerLink=\"/Registro\" type=\"submit\" name=\"Registro\" class=\"btnContactSubmit\" value=\"Registrarse\" />                       \r\n                                        </div>\r\n                                        <div class=\"form-group\">                                            \r\n                                            <a href=\"\" class=\"btnForgetPwd\" value=\"Login\">Olvidaste tu contraseña?</a>\r\n                                            <!--<a href=\"ForgetPassword.php\" class=\"btnForgetPwd\" value=\"Login\">Olvidaste tu contraseña?</a>-->\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        if (this.usuario === 'admin' && this.clave === 'admin') {
            this.router.navigate(['/Principal']);
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    var _a, _b;
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/memotec/memotec.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  memotec works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/memotec/memotec.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/memotec/memotec.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemotecComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemotecComponent = /** @class */ (function () {
    function MemotecComponent() {
    }
    MemotecComponent.prototype.ngOnInit = function () {
    };
    MemotecComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-memotec',
            template: __webpack_require__("../../../../../src/app/componentes/memotec/memotec.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/memotec/memotec.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MemotecComponent);
    return MemotecComponent;
}());

//# sourceMappingURL=memotec.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* \r\n** Layout, Text & Colors \r\n*/\r\n\r\nbody {\r\n  background: #150f21;\r\n  font-size: 18px;\r\n}\r\n\r\np {\r\n  line-height: 1.5;\r\n}\r\n\r\n.container {\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* Cards */\r\n.card-column {\r\n  width: 50%;\r\n  float: left;\r\n  padding: 4%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.column-1 {\r\n  padding-top: 100px;\r\n}\r\n\r\n.card {\r\n  width: 92%;\r\n  max-width: 340px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  position: relative;\r\n  background: #EB5160;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.border {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 6px;\r\n  border: 1px solid #fff;\r\n  opacity: 0.5;\r\n  left: -6px;\r\n  top: -6px;\r\n}\r\n\r\n.card h1 {\r\n  position: relative;\r\n  padding: 190px 0px 100px 10px;\r\n  width: 90%;\r\n}\r\n\r\n.card > img {\r\n  width: 90%;\r\n  position: absolute;\r\n  top: -6%;\r\n  left: -6%;\r\n}\r\n\r\n.card-color-0 {\r\n  background-color: rgba(50, 180, 10, 0.753);\r\n}\r\n\r\n.card-color-1 {\r\n  background-color: rgb(18, 16, 110);\r\n}\r\n\r\n.card-color-2 {\r\n  background-color: rgba(24, 187, 199, 0.836);\r\n}\r\n\r\n.card-color-3 {\r\n  background-color: rgba(182, 58, 0, 0.692);\r\n}\r\n\r\n/* The cover (expanding background) */\r\n.cover {\r\n  position: fixed;\r\n  background: #EB5160;\r\n  z-index: 100;\r\n  transform-origin: 50% 50%;\r\n}\r\n\r\n/* The open page content */\r\n.open-content {\r\n  width: 100%;\r\n  z-index: 110;\r\n  position: absolute;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.open-content img {\r\n  position: relative;\r\n  width: 90%;\r\n  margin-left: 3%;\r\n  margin-top: 20px;\r\n  z-index: 5;\r\n}\r\n\r\n.open-content .text {\r\n  background: #fff;\r\n  margin-top: -56%;\r\n  padding: 60% 5% 5% 5%;\r\n  width: 80%;\r\n  margin-left: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.open-content .text h1, .open-content .text p {\r\n  max-width: 700px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.close-content {\r\n  display: block;\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 12px;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.close-content span {\r\n  background: #222;\r\n  width: 30px;\r\n  height: 6px;\r\n  display: block;\r\n  position: absolute;\r\n  top: 14px;\r\n}\r\n\r\n.x-1 {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.x-2 {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n/* \r\n** Transitions\r\n*/\r\n\r\n.card {\r\n  transition: opacity 200ms linear 320ms, transform 200ms ease-out 320ms;\r\n}\r\n\r\n.border {\r\n  transition: opacity 200ms linear, transform 200ms ease-out;\r\n}\r\n\r\n.card img {\r\n  transition: opacity 200ms linear 0ms, transform 200ms ease-in 0ms;\r\n}\r\n\r\n.card h1 {\r\n  transform: translate3d(20%, 0px, 0px);  \r\n  transition: opacity 200ms linear 120ms, transform 200ms ease-in 120ms;\r\n}\r\n\r\n/* Clicked card */\r\n.card.clicked img {\r\n  transform: translate3d(0px, -40px, 0px);\r\n  opacity: 0;\r\n}\r\n\r\n.card.clicked .border {\r\n  opacity: 0;\r\n  transform: scale(1.3);\r\n}\r\n\r\n.card.out, .card.out img {\r\n  transform: translate3d(0px, -40px, 0px);\r\n  opacity: 0;\r\n}\r\n\r\n.card.out h1, .card.clicked h1 {\r\n  transform: translate3d(20%, -40px, 0px);\r\n  opacity: 0;\r\n}\r\n\r\n.cover {\r\n  transition: transform 300ms ease-in-out;\r\n}\r\n\r\n.open-content {\r\n  transition: opacity 200ms linear 0ms;\r\n}\r\n\r\n.open-content.open {\r\n  opacity: 1;\r\n  pointer-events: all;\r\n  transition-delay: 1000ms;\r\n}\r\n\r\n/* \r\n** Media Queries\r\n*/\r\n\r\n@media screen and (max-width: 600px) {\r\n  .card-column {\r\n    width: 90%;\r\n  }\r\n  \r\n  .column-1 {\r\n    padding-top: 0px;\r\n  }\r\n  \r\n  .open-content img {\r\n    margin-top: 40px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\" >\r\n    <div class=\"card\">\r\n      <img class=\"img-thumbnail\"   src=\"./assets/imagenes/cerebro.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      <h1>Velocidad y agilidad aritmética </h1>\r\n      <p class=\"title\">Juego de agilidad mental</p>\r\n      <p>UTN FRA </p>\r\n  \r\n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \r\n      <p>           <button class=\"button\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\r\n    \r\n    </div>\r\n  \r\n    <div class=\"card\">\r\n      <img class=\"img-thumbnail\" src=\"./assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      <h1>Piedra Papel o Tijera</h1>\r\n      <p class=\"title\">Juega contra la máquina</p>\r\n      <p>UTN FRA </p>\r\n      \r\n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \r\n      <p>           <button class=\"button\"  (click)=\"Juego('PPT')\">Jugar</button></p>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/adivina.png\" alt=\"Avatar\" style=\"width:100%\">\r\n      <h1>Adivina el número secreto</h1>\r\n      <p class=\"title\">Juega de estrategia</p>\r\n      <p>UTN FRA </p>\r\n      \r\n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \r\n      <p>           <button class=\"button\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\r\n    </div>\r\n  </div>\r\n-->\r\n<!--\r\n  Please note: this code is in no way ready to be used as is in production on your website. It will need to be adapted to be cross browser compliant & accessible. I just wanted to share how one might go about this effect with CSS & JS and no other dependencies\r\n-->\r\n<div class=\"container\">\r\n  <div class=\"card-column column-0\">\r\n    <div class=\"card card-color-0\" routerLink=\"/Juegos/Agilidad\">    \r\n      <div class=\"border\"></div>\r\n      <img src=\"../../../assets/imagenes/cubo.jpg\" />\r\n      <h1 routerLink=\"/Juegos/Agilidad\" >Velocidad y Agilidad Aritmética </h1>\r\n    </div>\r\n    <div class=\"card card-color-2\" routerLink=\" /Juegos/PiedraPapelTijera\">\r\n      <div class=\"border\"></div>\r\n      <img src=\"../../../assets/imagenes/manos.jpg\" />\r\n      <h1 routerLink=\" /Juegos/PiedraPapelTijera\">Piedra<br>Papel<br>ó Tijera</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-column column-1\">\r\n    <div class=\"card card-color-1\" routerLink=\"/Juegos/Adivina\">\r\n      <div class=\"border\"></div>\r\n      <img src=\"../../../assets/imagenes/pregunta.jpg\" /> \r\n      <h1 routerLink=\"/Juegos/Adivina\" >Adivina el Número Secreto</h1>\r\n    </div>\r\n    <div class=\"card card-color-3\" routerLink=\"/Juegos/Tateti\">\r\n      <div class=\"border\"></div>\r\n      <img src=\"../../../assets/imagenes/tateti.jpg\" />\r\n      <h1 routerLink=\"/Juegos/Tateti\">TaTeTi</h1>\r\n    </div>\r\n    <div class=\"card card-color-4\" routerLink=\"/Juegos/Memotec\">\r\n      <div class=\"border\"></div>\r\n      <img src=\"../../../assets/imagenes/memotec.jpg\" />\r\n      <h1 routerLink=\"/Juegos/Memotec\">MemoTec</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"cover\" class=\"cover\"></div>\r\n\r\n<div id=\"open-content\" class=\"open-content\">\r\n  <a href=\"#\" id=\"close-content\" class=\"close-content\"><span class=\"x-1\"></span><span class=\"x-2\"></span></a>\r\n  <img id=\"open-content-image\" src=\"\" />\r\n  <div class=\"text\" id=\"open-content-text\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = /** @class */ (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    var _a, _b;
    MenuCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-menu-card',
            template: __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], MenuCardComponent);
    return MenuCardComponent;
}());

//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat|Open+Sans);", ""]);

// module
exports.push([module.i, ".navbar-brand {\r\n  font-family: 'Montserrat', sans-serif;\r\n  text-transform: uppercase\r\n}\r\n\r\n.navbar .nav {\r\n  font-family: 'Open Sans', sans-serif;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  font-size: 1.2rem\r\n}\r\n\r\n.navbar-inverse {\r\n  background-color: #000000\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.active>a:hover,\r\n.navbar-inverse .navbar-nav>li>a:hover,\r\n.navbar-inverse .navbar-nav>li>a:focus {\r\n  background-color: #0000009c\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.active>a,\r\n.navbar-inverse .navbar-nav>.open>a,\r\n.navbar-inverse .navbar-nav>.open>a,\r\n.navbar-inverse .navbar-nav>.open>a:hover,\r\n.navbar-inverse .navbar-nav>.open>a,\r\n.navbar-inverse .navbar-nav>.open>a:hover,\r\n.navbar-inverse .navbar-nav>.open>a:focus {\r\n  background-color: #0702027e\r\n}\r\n\r\n.dropdown-menu {\r\n    background-color: rgba(0, 0, 0, 0.726)\r\n}\r\n\r\n.dropdown-menu>li>a:hover,\r\n.dropdown-menu>li>a:focus {\r\n    background-color: #000000;\r\n}\r\n\r\n.navbar-inverse {\r\n  background-image: none;\r\n}\r\n\r\n.dropdown-menu>li>a:hover,\r\n.dropdown-menu>li>a:focus {\r\n  background-image: none;\r\n}\r\n\r\n.navbar-inverse {\r\n  border-color: #003300\r\n}\r\n\r\n.navbar-inverse .navbar-brand {\r\n  color: #FFFFFF\r\n}\r\n\r\n.navbar-inverse .navbar-brand:hover {\r\n  color: rgb(255, 166, 0)\r\n}\r\n\r\n.navbar-inverse .navbar-nav>li>a {\r\n  color: #FFFFFF\r\n}\r\n\r\n.navbar-inverse .navbar-nav>li>a:hover,\r\n.navbar-inverse .navbar-nav>li>a:focus {\r\n  color: #FFCC00\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.active>a,\r\n.navbar-inverse .navbar-nav>.open>a,\r\n.navbar-inverse .navbar-nav>.open>a:hover,\r\n.navbar-inverse .navbar-nav>.open>a:focus {\r\n  color: #FFCC00\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.active>a:hover,\r\n.navbar-inverse .navbar-nav>.active>a:focus {\r\n  color: #FFCC00\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n  color: #FFFFFF\r\n}\r\n\r\n.dropdown-menu>li>a:hover,\r\n.dropdown-menu>li>a:focus {\r\n  color: #FFCC00\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.dropdown>a .caret {\r\n  border-top-color: #FFFFFF\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.dropdown>a:hover .caret {\r\n  border-top-color: #FFFFFF\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.dropdown>a .caret {\r\n  border-bottom-color: #FFFFFF\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.dropdown>a:hover .caret {\r\n  border-bottom-color: #FFFFFF\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-inverse navbar-fixed-top bs-docs-nav\" role=\"banner\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      \r\n      <a href=\"./Principal\" class=\"navbar-brand\">Sala de Juegos</a>\r\n    </div>\r\n  \r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a href=\"#\">Inicio</a>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Menú de Juegos <b class=\"caret\"></b></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a routerLink=\"/Juegos/Adivina\">Adivina</a></li>\r\n            <li><a routerLink=\"/Juegos/Agilidad\">Agilidad</a></li>\r\n            <li><a routerLink=\"/Juegos/Agilidad\">Piedra Papel Tijera</a></li>\r\n            <li><a routerLink=\"/Juegos/Agilidad\">MemoTec</a></li>\r\n            <li><a routerLink=\"/Paises\">Paises</a></li>\r\n            <li><a routerLink=\"/Animales\">Animales</a></li>\r\n           <!-- <li><a href=\"#\">Adivina+Listado</a></li>\r\n            <li><a href=\"#\">Agilidad+Listado</a></li>-->\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/QuienSoy\">Mis datos</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/Principal\">Salir</a>\r\n        </li>\r\n        \r\n      </ul>\r\n\r\n  </div>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    var _a, _b;
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/paises/paises.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>PAISES</h1>\n<table>\n  <tr>\n    <th>Nombre</th>\n    <th>Región</th>\n    <th>Bandera</th>\n  </tr>\n  <tr *ngFor=\"let pais of paises\" >\n      <td>{{pais.name}}</td>\n      <td>{{pais.region}}</td>\n      <td><img id=\"paises\"src=\"{{pais.flag}}\" alt=\"\" style=\"width: 30%;\"></td>\n  </tr>\n\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/paises/paises.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th,\ntd {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/paises/paises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaisesComponent = /** @class */ (function () {
    function PaisesComponent(paisesService) {
        this.paisesService = paisesService;
    }
    PaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paisesService.BuscarTodos().subscribe(function (lista) {
            _this.paises = lista;
            console.log(_this.paises);
        });
    };
    var _a;
    PaisesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-paises',
            template: __webpack_require__("../../../../../src/app/componentes/paises/paises.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/paises/paises.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */]) === "function" && _a || Object])
    ], PaisesComponent);
    return PaisesComponent;
}());

//# sourceMappingURL=paises.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body{\r\n  height: 50%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.fondo{\r\nbackground-color: aquamarine;\r\n  background-size: cover;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n#encima:before{\r\n  content: '';\r\n  background: url(https://i.imgur.com/dJLNhFN.jpg) no-repeat left top;\r\n  /*background: url(https://s22.postimg.org/urrt8jfq9/d_JLNh_FN.jpg) no-repeat left top;*/\r\n  background-size: cover;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{nuevoJuego.nombre}}!\r\n  </h1>\r\n </div>\r\n<h2></h2>\r\n<form name=\"juego\">\r\n\r\n   <label>ingrese una opcion:  </label> \r\n   <h2><button (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Juega el sistema</button></h2>\r\n \r\n    <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\r\n \r\n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n \r\n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n \r\n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n\r\n\r\n</form>\r\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__ = __webpack_require__("../../../../../src/app/clases/juego-piedra-papel-tijera.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PiedraPapelTijeraComponent = /** @class */ (function () {
    function PiedraPapelTijeraComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    PiedraPapelTijeraComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    PiedraPapelTijeraComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    PiedraPapelTijeraComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
    };
    var _a;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], PiedraPapelTijeraComponent.prototype, "enviarJuego", void 0);
    PiedraPapelTijeraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-piedra-papel-tijera',
            template: __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PiedraPapelTijeraComponent);
    return PiedraPapelTijeraComponent;
}());

//# sourceMappingURL=piedra-papel-tijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecera></app-cabecera>\r\n<!-- \r\n<div class=\"container\" >\r\n   \r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item-danger\">\r\n           \r\n                <div class=\"media-body\">\r\n                    <div class=\"hero-text\">\r\n                        <h4 >Menú Principal</h4>\r\n                    </div>\r\n                 </div>\r\n               \r\n             \r\n          </li>\r\n        <li class=\"list-group-item list-group-item-success\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n              <div class=\"media-left\">\r\n                    <img src=\"./assets/imagenes/saladejuegos.png\" class=\"media-object imagenDeMenu\" >\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Juegos</h4>\r\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-info\">\r\n            <a routerLink=\"/Listado\">\r\n              <div class=\"media\">\r\n                  <div class=\"media-left\">\r\n                      <img src=\"./assets/imagenes/listado.jpg\" class=\"media-object imagenDeMenu\" >\r\n                    </div>\r\n                <div class=\"media-body\">\r\n                  <h4 class=\"media-heading\">Listados de resultados</h4>\r\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\r\n                </div>\r\n                \r\n              </div> \r\n            </a>\r\n          </li>\r\n        <li class=\"list-group-item list-group-item-warning\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <img src=\"./assets/imagenes/Configuracion.png\" class=\"media-object imagenDeMenu\" >\r\n                  </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\r\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-warning\">\r\n          <a routerLink=\"/Jugadores\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <img src=\"./assets/imagenes/jugadores.png\" class=\"media-object imagenDeMenu\" >\r\n                  </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Jugadores</h4>\r\n                <p>Listado de jugadores</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n       \r\n        \r\n      </ul>\r\n</div>-->\r\n<!-- \r\nTODO \r\n- la navbar non e' responsiva?\r\n-->\r\n<!-- nav bar -->\r\n<br>\r\n<br>\r\n<hr width=\"75%\" />\r\n<h2 style='text-align:center;'>Menu Principal</h2>\r\n<div class=\"accordion\">\r\n  <ul>\r\n    <li tabindex=\"1\">\r\n      <div>\r\n          \r\n        <a routerLink=\"/Juegos\">\r\n          <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en  los estudiantes.</p>\r\n          <h2>JUEGOS</h2>\r\n          <p> <a routerLink=\"/Juegos\"></a></p>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li tabindex=\"2\">\r\n      <div>\r\n          <a routerLink=\"/Listado\">\r\n            <p>Los listados de los resultados con ordenamiento y busqueda</p>\r\n          <h2>LISTADO DE RESULTADOS</h2>\r\n          <p> <a routerLink=\"/Listado\"></a></p>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li tabindex=\"3\">\r\n      <div>\r\n          <a routerLink=\"/Juegos\">\r\n          <p>Ajustes de la aplicacion y los métodos de autentificación</p>\r\n          <h2>CONFIGURACI&oacute;N</h2>\r\n          <p> <a routerLink=\"/Juegos\"></a></p>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    \r\n  </ul>\r\n</div>\r\n<p class=\"about\">\r\n\r\n</p>\r\n    \r\n    \r\n  \r\n    \r\n    \r\n    \r\n \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:700);", ""]);

// module
exports.push([module.i, "hr {\n  border-top: 2px solid rgba(0, 0, 0, 0.1); }\n\nh1 {\n  text-align: center;\n  font-family: Montserrat,sans-serif;\n  color: #333; }\n\n.accordion {\n  width: 100%;\n  max-width: 1080px;\n  height: 250px;\n  overflow: hidden;\n  margin: 50px auto; }\n  .accordion ul {\n    width: 100%;\n    display: table;\n    table-layout: fixed;\n    margin: 0;\n    padding: 0; }\n    .accordion ul li {\n      display: table-cell;\n      vertical-align: bottom;\n      position: relative;\n      width: 16.666%;\n      height: 250px;\n      background-repeat: no-repeat;\n      background-position: center center;\n      transition: all 500ms ease; }\n      .accordion ul li div {\n        display: block;\n        overflow: hidden;\n        width: 100%; }\n        .accordion ul li div a {\n          display: block;\n          height: 250px;\n          width: 100%;\n          position: relative;\n          z-index: 3;\n          vertical-align: bottom;\n          padding: 15px 20px;\n          box-sizing: border-box;\n          color: #fff;\n          text-decoration: none;\n          font-family: Open Sans, sans-serif;\n          transition: all 200ms ease; }\n          .accordion ul li div a * {\n            opacity: 0;\n            margin: 0;\n            width: 100%;\n            text-overflow: ellipsis;\n            position: relative;\n            z-index: 5;\n            white-space: nowrap;\n            overflow: hidden;\n            transform: translateX(-20px);\n            transition: all 400ms ease; }\n          .accordion ul li div a h2 {\n            font-family: Montserrat,sans-serif;\n            text-overflow: clip;\n            font-size: 24px;\n            text-transform: uppercase;\n            margin-bottom: 2px;\n            top: 160px; }\n          .accordion ul li div a p {\n            top: 160px;\n            font-size: 13.5px; }\n    .accordion ul li:nth-child(1) {\n      background-image: url(" + escape(__webpack_require__("../../../../../src/assets/imagenes/MenuJuego.jpg")) + "); }\n    .accordion ul li:nth-child(2) {\n      background-image: url(" + escape(__webpack_require__("../../../../../src/assets/imagenes/MenuGanadores.jpg")) + "); }\n    .accordion ul li:nth-child(3) {\n      background-image: url(" + escape(__webpack_require__("../../../../../src/assets/imagenes/MenuConfig.jpg")) + "); }\n    .accordion ul:hover li,\n    .accordion ul:focus-within li {\n      width: 8%; }\n    .accordion ul li:focus {\n      outline: none; }\n    .accordion ul:hover li:hover,\n    .accordion ul li:focus,\n    .accordion ul:focus-within li:focus {\n      width: 60%; }\n      .accordion ul:hover li:hover a,\n      .accordion ul li:focus a,\n      .accordion ul:focus-within li:focus a {\n        background: rgba(0, 0, 0, 0.4); }\n        .accordion ul:hover li:hover a *,\n        .accordion ul li:focus a *,\n        .accordion ul:focus-within li:focus a * {\n          opacity: 1;\n          transform: translateX(0); }\n    .accordion ul:hover li {\n      width: 8% !important; }\n      .accordion ul:hover li a * {\n        opacity: 0 !important; }\n    .accordion ul:hover li:hover {\n      width: 60% !important; }\n      .accordion ul:hover li:hover a {\n        background: rgba(0, 0, 0, 0.4); }\n        .accordion ul:hover li:hover a * {\n          opacity: 1 !important;\n          transform: translateX(0); }\n\n@media screen and (max-width: 600px) {\n  body {\n    margin: 0; }\n  .accordion {\n    height: auto; }\n    .accordion ul li, .accordion ul li:hover, .accordion ul:hover li, .accordion ul:hover li:hover {\n      position: relative;\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      transition: none; } }\n\n.about {\n  text-align: center;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  color: #666; }\n  .about a {\n    color: blue;\n    text-decoration: none; }\n    .about a:hover {\n      text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-principal',
            template: __webpack_require__("../../../../../src/app/componentes/principal/principal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/principal/principal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * ==== Losange\r\n */\r\n .losange, .losange div {\r\n    margin: 0 auto;\r\n    transform-origin: 50% 50%;\r\n    overflow: hidden;\r\n    width: 250px;\r\n    height: 250px;\r\n  }\r\n  .losange {\r\n    transform: rotate(45deg) translateY(10px);\r\n  }\r\n  .losange .los1 {\r\n    width: 355px;\r\n    height: 355px;\r\n    transform: rotate(-45deg) translateY(-74px);\r\n  }\r\n  .losange .los1 img {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n  \r\n  \r\n  \r\n  /*\r\n   * ==== diamond \r\n   */\r\n  \r\n  .diamond, .dia {\r\n    margin: 0 auto;\r\n    transform-origin: 50% 50%;\r\n    overflow: hidden;\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n  .diamond {\r\n    transform: rotate(45deg) translateY(-25px) translateX(-25px);\r\n  }\r\n  .diamond .dia {\r\n    width: 380px;\r\n    height: 380px;\r\n    transform: rotate(-45deg);\r\n  }\r\n  .diamond img {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n  \r\n  \r\n  /* \r\n   * ==== octogone\r\n   */\r\n  .octo, .octo div {\r\n    margin: 0 auto;\r\n    transform-origin: 50% 50%;\r\n    overflow: hidden;\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n  .octo, .octo div {\r\n    width: 270px;\r\n    height: 270px;\r\n  }\r\n  .octo {\r\n    transform: rotate(45deg);\r\n  }\r\n  .octo1 {\r\n    transform: rotate(-45deg);\r\n  }\r\n  \r\n  \r\n  \r\n  /*\r\n   * ==== hexagon\r\n   */\r\n  .hexa, .hexa div {\r\n    margin: 0 auto;\r\n    transform-origin: 50% 50%;\r\n    overflow: hidden;\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n  .hexa {\r\n    width: 325px;\r\n    height: 230px;\r\n  }\r\n  .hexa div {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .hexa {\r\n    transform: rotate(120deg);\r\n  }\r\n  .hex1 {\r\n    transform: rotate(-60deg);\r\n  }\r\n  .hex2 {\r\n    transform: rotate(-60deg);\r\n  }\r\n  \r\n  /*\r\n   * ==== dodecagon\r\n   */\r\n  .dodeca, .dodeca div {\r\n    margin: 0 auto;\r\n    transform-origin: 50% 50%;\r\n    overflow: hidden;\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n  .dodeca {\r\n    transform: rotate(120deg);\r\n  }\r\n  .dode1 {\r\n    transform: rotate(-60deg);\r\n  }\r\n  .dode2 {\r\n    transform: rotate(-60deg);\r\n  }\r\n  \r\n  /* irregular dodecagon */\r\n  .irr, .irr div {\r\n    width: 320px;\r\n  }\r\n  \r\n   \r\n  \r\n  /* dev mode */\r\n  .part.devmode div {\r\n    box-shadow: 0 0 4px;\r\n  }\r\n  /* presentation */\r\n  body {\r\n    padding: 0; margin: 0;\r\n    font-family: \"Open Sans Condensed\", \"Open Sans\", \"Droid Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    line-height: 1.7;\r\n    background: #208C8C;\r\n    color: #DFF7E5;\r\n  }\r\n  h1, h2 {\r\n    font-weight: normal;\r\n    text-align: center;\r\n  }\r\n  h1 {\r\n    margin-bottom: 0;\r\n  }\r\n  h2 {\r\n    margin: 0 0 1.7em;\r\n  }\r\n  p {\r\n    max-width: 600px;\r\n    margin: 3em auto;\r\n    text-align: center;\r\n  }\r\n  a {\r\n    color: #000;\r\n  }\r\n  .by {\r\n    margin-top: 0;\r\n    opacity: .5;\r\n    transition: opacity .4s;\r\n  }\r\n  .by:hover,\r\n  .by a:focus {\r\n    opacity: 1;\r\n  }\r\n  .by, .photos {\r\n    font-size: .8em;\r\n  }\r\n  .part {\r\n    padding: 50px 20px 85px;\r\n    background: #205B73;\r\n    color: #AFE4FC;\r\n  }\r\n  .part:nth-of-type(2n) {\r\n    background: #F2E6A7;\r\n    color: #CDAE51\r\n  }\r\n  .dev {\r\n    display: block;\r\n    margin: 1.5em auto;\r\n    max-width: 200px;\r\n    padding: 15px 25px;\r\n    border: 2px solid #FFF;\r\n    background: transparent;\r\n    color: #FFF;\r\n    font-size: .9em;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: all .4s\r\n  }\r\n  .dev:hover,\r\n  .dev:focus {\r\n    background: rgba(0,0,0,.2);\r\n  }\r\n  .hexa img {\r\n    position: relative;\r\n    top: -25px;\r\n    left: 20px;\r\n  }\r\n  .octo div img {\r\n    position :relative;\r\n    left:-5px; top: -5px;\r\n  }\r\n  .diamond img {\r\n    position: relative;\r\n    width: 105%; left: -7px; top: -5px;\r\n  }\r\n\r\n\r\n\r\n/*\r\n.imagenDeQuienSoy{\r\n    width: 100%;\r\n   \r\n    }\r\nbody {\r\n    font: 20px Montserrat, sans-serif;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n}\r\np {font-size: 16px;}\r\n.margin {margin-bottom: 45px;}\r\n.bg-1 { \r\n    background-color: #1abc9c; /* Green */\r\n   /* color: #ffffff;\r\n}\r\n.bg-2 { \r\n    background-color: #474e5d; /* Dark Blue */\r\n /*   color: #ffffff;\r\n}\r\n.bg-3 { \r\n    background-color: #ffffff; /* White */\r\n/*    color: #555555;\r\n}\r\n.bg-4 { \r\n    background-color: #2f2f2f; /* Black Gray */\r\n  /*  color: #fff;\r\n}\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n.navbar-nav  li a:hover {\r\n    color: #1abc9c !important;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h1>Memotec</h1>\r\n<p>Memotec- descripcion Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para </p>\r\n   \r\n<div class=\"part\">\r\n  <h2>Paola Torrealba</h2>\r\n    <div class=\"dodeca\">\r\n      <div class=\"dode1\">\r\n        <div class=\"dode2\">\r\n          <img src=\"./assets/imagenes/quiensoy.jpg\" alt=\"\" width=\"320\" height=\"313\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div id=\"container\">\r\n   <div class=\"btn-toolbar\" style='margin-left: 30%;' role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n            <a  style='color: #000;' routerLink=\"/Principal\"  class=\"btn \">Principal </a>       \r\n        </div>   \r\n   </div> \r\n </div> \r\n\r\n\r\n\r\n<!--\r\n<nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"./\">Sala De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"./QuienSoy#quien\">Quien</a></li>\r\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\r\n          <li><a href=\"./QuienSoy#donde\">Donde</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  \r\n\r\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\r\n    <h3 class=\"margin\">Quién Soy?</h3>\r\n    <img src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\r\n    <h3>Soy Un alumno de la UTN FRA</h3>\r\n  </div>\r\n  \r\n  \r\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\r\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\r\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\r\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\r\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\r\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\r\n    </a>\r\n  </div>\r\n  \r\n\r\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \r\n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\r\n        <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\r\n        <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\r\n        <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n  <footer class=\"container-fluid bg-4 text-center\">\r\n    <p>Modificado por <a href=\"https://github.com/paolaTorrealba\">Mi github</a></p> \r\n  </footer>\r\n\r\n-->"

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = /** @class */ (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    QuienSoyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-quien-soy',
            template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuienSoyComponent);
    return QuienSoyComponent;
}());

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn,.signupbtn {float:left;width:50%}\r\n\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 98%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button (x) */\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"jumbotron\">\r\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\r\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\r\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\r\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\r\n   \r\n  </div>\r\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\r\n  <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\r\n  <button  class=\"cancelbtn\"  routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\r\n  <div id=\"id01\" class=\"modal\">\r\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\r\n    <form class=\"modal-content animate\" >\r\n      <div class=\"container\">\r\n        <label><b>Email</b></label>\r\n        <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\r\n  \r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\r\n  \r\n        <label><b>Repita la clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\r\n        <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\r\n        <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\r\n  \r\n        <div class=\"clearfix\">\r\n          <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\r\n          <button type=\"submit\" class=\"signupbtn\">Registrarme</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n  <script>\r\n  // Get the modal\r\n  var modal = document.getElementById('id01');\r\n  \r\n  // When the user clicks anywhere outside of the modal, close it\r\n  window.onclick = function(event) {\r\n      if (event.target == modal) {\r\n          modal.style.display = \"none\";\r\n      }\r\n  }\r\n  </script>\r\n  \r\n  </body>"

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
var RegistroComponent = /** @class */ (function () {
    /* constructor( private miConstructor:FormBuilder) { }
     email=new FormControl('',[Validators.email]);
     formRegistro:FormGroup=this.miConstructor.group({
       usuario:this.email
     });*/
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-registro',
            template: __webpack_require__("../../../../../src/app/componentes/registro/registro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());

//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sexo.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SexoPipe = /** @class */ (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    };
    SexoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'sexo'
        })
    ], SexoPipe);
    return SexoPipe;
}());

//# sourceMappingURL=sexo.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_paises_paises_component__ = __webpack_require__("../../../../../src/app/componentes/paises/paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_animales_animales_component__ = __webpack_require__("../../../../../src/app/componentes/animales/animales.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal













//import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
//import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'




// declaro donde quiero que se dirija
var MiRuteo = [
    { path: 'Jugadores', component: __WEBPACK_IMPORTED_MODULE_14__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    //{path: 'Mapa' , component: MapaDeGoogleComponent},
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'Principal', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    //{path: 'Paises' , component: ListadoDePaisesComponent},
    { path: 'Paises', component: __WEBPACK_IMPORTED_MODULE_16__componentes_paises_paises_component__["a" /* PaisesComponent */] },
    { path: 'Animales', component: __WEBPACK_IMPORTED_MODULE_17__componentes_animales_animales_component__["a" /* AnimalesComponent */] },
    { path: 'Juegos',
        component: __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            { path: 'AdivinaMasListado', component: __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */] },
            { path: 'PiedraPapelTijera', component: __WEBPACK_IMPORTED_MODULE_15__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */] },
            { path: 'AgilidadaMasListado', component: __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] }]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = /** @class */ (function () {
    function RuteandoModule() {
    }
    RuteandoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], RuteandoModule);
    return RuteandoModule;
}());

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/animales-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalesHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimalesHttpService = /** @class */ (function () {
    function AnimalesHttpService(http) {
        this.http = http;
    }
    AnimalesHttpService.prototype.getAnimales = function () {
        return this.http.get('https://lab4ivagaza.000webhostapp.com/apiJuegos/animales/');
    };
    var _a;
    AnimalesHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], AnimalesHttpService);
    return AnimalesHttpService;
}());

//# sourceMappingURL=animales-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/archivos-jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivosJugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchivosJugadoresService = /** @class */ (function () {
    function ArchivosJugadoresService(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    ArchivosJugadoresService.prototype.traerJugadores = function (ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(function (data) {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, function (err) {
            console.log(err);
        });
    };
    var _a;
    ArchivosJugadoresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
    ], ArchivosJugadoresService);
    return ArchivosJugadoresService;
}());

//# sourceMappingURL=archivos-jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JuegoServiceService = /** @class */ (function () {
    function JuegoServiceService(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    //Paola: comento por error de compilacion al agegar http
    /*public listar(): Array<Juego> {
     this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
      .then( data => {
        console.log( data );
      })
      .catch( err => {
        console.log( err );
      });
     
    
      this.peticion
      .subscribe( data => {
        console.log("En listar");
        console.log( data );
      }, err => {
        console.info("error: " ,err );
      })
  
      let miArray: Array<Juego> = new Array<Juego>();
  
      miArray.push(new JuegoAdivina("Juego 1", false));
      miArray.push(new JuegoAdivina("Pepe", true));
      miArray.push(new JuegoAdivina("Juego 3", false));
      miArray.push(new JuegoAdivina("Juego 4", false));
      miArray.push(new JuegoAdivina("Juego 5", false));
      miArray.push(new JuegoAdivina("Juego 6", false));
      return miArray;
    } */
    JuegoServiceService.prototype.listarPromesa = function () {
        this.peticion
            .subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    var _a;
    JuegoServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
    ], JuegoServiceService);
    return JuegoServiceService;
}());

//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresService = /** @class */ (function () {
    //peticion:any;
    function JugadoresService(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JugadoresService.prototype.traertodos = function (ruta, filtro) {
        var _this = this;
        return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info("jugadores service", data);
            _this.filtrado = data;
            var ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            _this.filtrado = _this.filtrado.filter(function (data) { return data.gano === ganador || filtro == "todos"; });
            return _this.filtrado;
        })
            .catch(function (errror) {
            console.log("error");
            return _this.filtrado;
        });
    };
    var _a;
    JugadoresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */]) === "function" && _a || Object])
    ], JugadoresService);
    return JugadoresService;
}());

//# sourceMappingURL=jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/mi-http/mi-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MiHttpService = /** @class */ (function () {
    function MiHttpService(http) {
        this.http = http;
        this.url = 'https://restcountries.eu/rest/v2/';
    }
    MiHttpService.prototype.httpGetP = function (metodo) {
        console.log(this.url);
        return this.http.get(this.url + metodo).pipe(function (res) { return res; });
    };
    MiHttpService.prototype.httpPostP = function (url, objeto) {
        return this.http
            .get(url)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    MiHttpService.prototype.httpGetO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    var _a;
    MiHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], MiHttpService);
    return MiHttpService;
}());

//# sourceMappingURL=mi-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/paises.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaisesService = /** @class */ (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.BuscarTodos = function () {
        return this.miHttp.httpGetO('all');
    };
    var _a;
    PaisesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
    ], PaisesService);
    return PaisesService;
}());

//# sourceMappingURL=paises.service.js.map

/***/ }),

/***/ "../../../../../src/assets/imagenes/MenuConfig.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MenuConfig.d183a0ab4cae97ff6b87.jpg";

/***/ }),

/***/ "../../../../../src/assets/imagenes/MenuGanadores.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MenuGanadores.9ea884320c9554e06a80.jpg";

/***/ }),

/***/ "../../../../../src/assets/imagenes/MenuJuego.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MenuJuego.8010a381baba29ce45b6.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map