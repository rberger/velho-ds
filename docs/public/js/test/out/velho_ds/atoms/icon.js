// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.atoms.icon');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('velho_ds.atoms.style.icon');
velho_ds.atoms.icon.icon = (function velho_ds$atoms$icon$icon(p__41555){
var map__41556 = p__41555;
var map__41556__$1 = ((((!((map__41556 == null)))?(((((map__41556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41556):map__41556);
var name = cljs.core.get.call(null,map__41556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var styles = cljs.core.get.call(null,map__41556__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),(cljs.core.truth_(styles)?stylefy.core.use_style.call(null,styles):stylefy.core.use_style.call(null,velho_ds.atoms.style.icon.icon)),name], null);
});
velho_ds.atoms.icon.clickable = (function velho_ds$atoms$icon$clickable(p__41558){
var map__41559 = p__41558;
var map__41559__$1 = ((((!((map__41559 == null)))?(((((map__41559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41559):map__41559);
var name = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var styles = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var on_click_fn = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
if(cljs.core.truth_(name)){
} else {
throw (new Error("Assert failed: name"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.icon.clickable,styles),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_sub_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.icon.clickable,styles),new cljs.core.Keyword(null,"i","i",-1386841315)),name], null)], null);
});
