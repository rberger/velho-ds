// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.molecules.style.field');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('velho_ds.tokens.color');
goog.require('velho_ds.tokens.spacing');
goog.require('velho_ds.tokens.font_size');
goog.require('velho_ds.tokens.z_index');
goog.require('velho_ds.tokens.border');
goog.require('velho_ds.tokens.timing');
goog.require('velho_ds.tokens.font');
goog.require('velho_ds.tokens.box_shadow');
goog.require('velho_ds.tools.measures');
velho_ds.molecules.style.field.element = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"min-height","min-height",398480837),velho_ds.tokens.spacing.space_x_large], null);
velho_ds.molecules.style.field.input_field = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.Keyword(null,"margin","margin",-995903681)],["border-box",(0),velho_ds.tools.measures.rem_times.call(null,velho_ds.tokens.font_size.font_size_base,(2)),velho_ds.tokens.font_size.font_size_base,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_default)," solid"].join(''),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),velho_ds.tokens.color.color_primary], null),new cljs.core.Keyword(null,"valid+span","valid+span",1404605357),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small], null),new cljs.core.Keyword(null,"focus+span","focus+span",34388974),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_primary], null)], null),["border-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.timing.duration_slow)," ease-in-out"].join(''),velho_ds.tokens.spacing.space_small_rem,"100%",velho_ds.tokens.color.color_neutral_1,(0),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),null], null), null),(0),"none",velho_ds.tokens.color.color_neutral_4,"absolute",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),(0),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_default)," solid"].join(''),(0)]);
velho_ds.molecules.style.field.input_field_error = cljs.core.merge.call(null,velho_ds.molecules.style.field.input_field,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_large)," solid"].join(''),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),velho_ds.tokens.color.state_error], null),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),velho_ds.tokens.color.state_error], null),new cljs.core.Keyword(null,"valid+span","valid+span",1404605357),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small], null),new cljs.core.Keyword(null,"focus+span","focus+span",34388974),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small], null)], null)], null));
velho_ds.molecules.style.field.text_field = cljs.core.merge.call(null,velho_ds.molecules.style.field.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),velho_ds.tools.measures.rem_times.call(null,velho_ds.tokens.spacing.space_small_rem,(2)),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"resize","resize",297367086),"none"], null));
velho_ds.molecules.style.field.input_field_label = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809)],["1",velho_ds.tokens.color.color_neutral_4,velho_ds.tokens.font_size.font_size_base,["all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.timing.duration_slow)," ease-in-out"].join(''),velho_ds.tokens.spacing.space_base_rem,"100%","text",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),null], null), null),"block","absolute",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null)]);
velho_ds.molecules.style.field.input_field_label_static = cljs.core.merge.call(null,velho_ds.molecules.style.field.input_field_label,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small], null));
velho_ds.molecules.style.field.input_field_label_error = cljs.core.merge.call(null,velho_ds.molecules.style.field.input_field_label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.state_error], null));
velho_ds.molecules.style.field.validation_errors = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.state_error,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-0.875rem",new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.state_error,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small,new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null);
velho_ds.molecules.style.field.dropdown_label = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"inherit",new cljs.core.Keyword(null,"transition","transition",765692007),["all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.timing.duration_slow)," ease-in-out"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),null], null), null)], null);
velho_ds.molecules.style.field.dropdown = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],[(0),velho_ds.tokens.color.text_default,velho_ds.tokens.font_size.font_size_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null),velho_ds.tokens.color.color_neutral_1,"100%",(0),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"appearance","appearance",-216383432),null], null), null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_xx_small_rem)," 0"].join(''),velho_ds.tokens.color.color_neutral_4,"none",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),(0),(0),velho_ds.tools.measures.rem_times.call(null,velho_ds.tokens.font_size.font_size_base,(2)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_default)," solid"].join('')]);
velho_ds.molecules.style.field.icon = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_small_rem)," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_xx_small_rem),")"].join(''),new cljs.core.Keyword(null,"right","right",-452581833),velho_ds.tokens.spacing.space_xx_small_rem], null);
velho_ds.molecules.style.field.dropdown_icon = cljs.core.merge.call(null,velho_ds.molecules.style.field.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),velho_ds.tokens.spacing.space_base_rem], null));
velho_ds.molecules.style.field.dropdown_multiple_icon = cljs.core.merge.call(null,velho_ds.molecules.style.field.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),velho_ds.tokens.spacing.space_xx_small_rem], null));
velho_ds.molecules.style.field.keyvalue_content = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"line-height","line-height",1870784992),velho_ds.tokens.font_size.font_size_base], null);
velho_ds.molecules.style.field.keyvalue_label = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_neutral_4], null);
velho_ds.molecules.style.field.iconvalue = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),velho_ds.tokens.spacing.space_small_rem,new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null);
velho_ds.molecules.style.field.iconvalue_icon = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_xx_large,new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null);
velho_ds.molecules.style.field.iconvalue_value = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"6px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null);
velho_ds.molecules.style.field.dropdown_multiple_selected_items = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null);
velho_ds.molecules.style.field.dropdown_multiple_input_background = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),velho_ds.tools.measures.rem_times.call(null,velho_ds.tokens.spacing.space_small_rem,(2)),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_neutral_1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.color.color_neutral_4)].join('')], null);
velho_ds.molecules.style.field.dropdown_multiple_input = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],["border-box",velho_ds.tokens.font_size.font_size_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null),velho_ds.tokens.font.font_weight_base,["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_base_rem),")"].join(''),"none",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),null], null), null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)," 0"].join(''),"inline-block",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),(0),velho_ds.tokens.font.font_family_text,velho_ds.tools.measures.rem_times.call(null,velho_ds.tokens.spacing.space_small_rem,(2))]);
velho_ds.molecules.style.field.dropdown_multiple_list = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),velho_ds.tokens.box_shadow.box_shadow_small,new cljs.core.Keyword(null,"max-height","max-height",-612563804),["calc(4*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.font_size.font_size_base)," + 8*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)," + 4*1px)"].join(''),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),velho_ds.tokens.z_index.z_index_sticky], null);
velho_ds.molecules.style.field.dropdown_multiple_list_item = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null);
velho_ds.molecules.style.field.drag_n_drop_header = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"margin","margin",-995903681)],[velho_ds.tokens.color.color_white,velho_ds.tokens.color.color_neutral_4,velho_ds.tokens.spacing.space_large,"6px",velho_ds.tokens.spacing.space_small,"relative",["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_base)," / 4)"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_default)," solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.color.color_neutral_4)].join(''),"auto"]);
velho_ds.molecules.style.field.drag_n_drop_content = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_neutral_2,new cljs.core.Keyword(null,"padding","padding",1660304693),velho_ds.tokens.spacing.space_x_small_rem,new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.border.border_default)," dashed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.color.color_neutral_4)].join('')], null);
velho_ds.molecules.style.field.drag_n_drop_content_ul = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null)], null);
velho_ds.molecules.style.field.drag_n_drop_helparea = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)," 0"].join(''),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_neutral_4,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null);
velho_ds.molecules.style.field.drag_n_drop_item = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432)],["center",velho_ds.tokens.box_shadow.box_shadow_small,velho_ds.tools.measures.rem_times.call(null,velho_ds.tokens.spacing.space_small_rem,(2)),"none",["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem),")"].join(''),"white",velho_ds.tokens.spacing.space_x_small_rem,"space-between","flex"]);
velho_ds.molecules.style.field.drag_n_drop_item_btn_area = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),velho_ds.tokens.spacing.space_base_rem,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),velho_ds.tokens.spacing.space_xx_small_rem,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"auto"], null);
velho_ds.molecules.style.field.drag_n_drop_item_description_area = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_white,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),velho_ds.tokens.box_shadow.box_shadow_small,new cljs.core.Keyword(null,"padding","padding",1660304693),velho_ds.tokens.spacing.space_x_small_rem], null);
velho_ds.molecules.style.field.drag_n_drop_item_description_area_hidden = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null);
