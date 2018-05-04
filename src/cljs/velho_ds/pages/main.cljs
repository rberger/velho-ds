(ns velho-ds.pages.main
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.buttons :as buttons]))

(defn page-content []
  [:div
   [:p "This is the content of the Reagent Design System"]
   (buttons/button-primary "Heikin nappi")
   (buttons/button-danger "Nyt on vaarallista")])

(defn page [nav]
  (tpl/default {:navigation nav
                :heading "Reagent Design System"
                :main-content (page-content)}))