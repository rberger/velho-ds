// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.atoms.style.button');
goog.require('cljs.core');
goog.require('velho_ds.tokens.color');
goog.require('velho_ds.tokens.font_size');
goog.require('velho_ds.tokens.spacing');
goog.require('velho_ds.tokens.timing');
goog.require('velho_ds.tools.measures');
goog.require('velho_ds.tokens.border');
goog.require('velho_ds.tokens.box_shadow');
goog.require('stylefy.core');
velho_ds.atoms.style.button.button = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"height","height",1025178622)],[velho_ds.tokens.font_size.font_size_xx_large,"border-box",velho_ds.tokens.box_shadow.box_shadow,velho_ds.tokens.color.color_neutral_5,velho_ds.tokens.font_size.font_size_base,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-position","background-position",1112702746),"left bottom",new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"200% auto"], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-position","background-position",1112702746),"right center",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),velho_ds.tokens.box_shadow.box_shadow_small,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.95, 0.95)"], null),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null),["all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.timing.duration_slow)," ease-in-out"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_xx_large,new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),velho_ds.tokens.spacing.space_x_small_rem,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),velho_ds.tokens.spacing.space_x_small_rem,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),velho_ds.tokens.color.color_primary,velho_ds.tokens.color.color_white,"pointer",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),null,new cljs.core.Keyword(null,"transition","transition",765692007),null], null), null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.font_size.font_size_large)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.font_size.font_size_x_large)].join(''),"inline-table",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),"left center","none","200% auto","none",velho_ds.tokens.spacing.space_x_large]);
velho_ds.atoms.style.button.small = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),velho_ds.tools.measures.rem_times.call(null,velho_ds.tokens.spacing.space_small_rem,(2)),new cljs.core.Keyword(null,"padding","padding",1660304693),"0 0.375rem",new cljs.core.Keyword(null,"display","display",242065432),"inline-table",new cljs.core.Keyword(null,"line-height","line-height",1870784992),velho_ds.tokens.font_size.font_size_x_large,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_x_large,new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),["0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)].join(''),new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null)], null);
velho_ds.atoms.style.button.primary = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),["linear-gradient(-45deg,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.color.color_primary_dark),"0%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.color.color_primary)," 100%)"].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_primary,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_white], null);
velho_ds.atoms.style.button.secondary = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),["linear-gradient(-45deg,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.color.color_neutral_5),"0%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.color.color_neutral_4)," 100%)"].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_primary,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_white], null);
velho_ds.atoms.style.button.outline = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_primary,new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_white,new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_default)," solid"].join(''),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),velho_ds.tokens.color.color_primary,new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_white,new cljs.core.Keyword(null,"padding","padding",1660304693),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.font_size.font_size_large)," calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.font_size.font_size_x_large)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_default),")"].join(''),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),velho_ds.tokens.color.color_primary_dark], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_primary,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_white,new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),velho_ds.tokens.box_shadow.box_shadow_small], null),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null)], null);
velho_ds.atoms.style.button.outline_small = cljs.core.merge.call(null,velho_ds.atoms.style.button.small,velho_ds.atoms.style.button.outline,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),["0 calc(0.375rem - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_default),")"].join('')], null));
velho_ds.atoms.style.button.upper = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_neutral_1], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_neutral_2,new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(1px) scale(0.95, 0.95)",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),velho_ds.tokens.box_shadow.box_shadow_small], null),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),null], null), null)], null);
velho_ds.atoms.style.button.lower = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_neutral_1], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_neutral_2,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.95, 0.95)",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),velho_ds.tokens.box_shadow.box_shadow_small], null),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),null], null), null)], null);