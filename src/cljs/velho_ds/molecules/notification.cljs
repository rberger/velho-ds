(ns velho-ds.molecules.notification
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.atoms.icon :as icon]
            [velho-ds.molecules.style.notification :as style]
            [velho-ds.tokens.color :as color]))

(defn default [{:keys [close-fn styles]} & content]
  [:div (stylefy/use-style (merge style/notification-area styles))
   [:a (merge (stylefy/use-sub-style style/notification-area :a) {:on-click close-fn})
    [icon/clickable {:name "close"
                     :on-click-fn close-fn
                     :styles {:top "2px"
                              :position "relative"
                              :color "white"
                              ::stylefy/mode {:hover {:color color/color-neutral-5}}}}]]
   (into [:div] (for [item content]
                  (if (vector? (first item))
                    (for [i item] ^{:key i} [:div i])
                    (for [item content] ^{:key item} [:div item]))))])

(defn error [{:keys [icon-fn styles] :as args} & content]
  [default (merge {:styles style/error} args) content])

(defn warning [{:keys [icon-fn styles] :as args} & content]
  [default (merge {:styles style/warning} args) content])

(defn success [{:keys [icon-fn styles] :as args} & content]
  [default (merge {:styles style/success} args) content])
