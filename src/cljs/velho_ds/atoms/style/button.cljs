(ns velho-ds.atoms.style.button
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.timing :as timing]
            [velho-ds.tools.measures :as measures]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.box-shadow :as box-shadow]
            [stylefy.core :as stylefy]))

(def button
  {:cursor "pointer"
   :user-select "none"
   :font-size font-size/font-size-base
   :padding (str font-size/font-size-large " " font-size/font-size-x-large)
   :box-sizing "border-box"
   :border "none"
   :box-shadow box-shadow/box-shadow
   :color color/color-neutral-5
   :background color/color-white
   :background-color color/color-primary
   :background-position "left center"
   :background-size "200% auto"
   :display "inline-table"
   :line-height font-size/font-size-xx-large
   :height spacing/space-x-large-rem
   :transition (str "all " timing/duration-slow " ease-in-out")
   ::stylefy/mode {:hover {:background-position "left bottom"
                           :background-size "200% auto"}
                   :active {:background-position "right center"
                            :outline "none"
                            :box-shadow box-shadow/box-shadow-small
                            :transform "scale(0.95, 0.95)"}
                   :focus {:outline "none"}}
   ::stylefy/sub-styles {:i {:font-size font-size/font-size-xx-large
                             :display "table-cell"
                             :vertical-align "middle"}
                         :span {:padding-left spacing/space-x-small-rem
                                :padding-right spacing/space-x-small-rem
                                :text-decoration "none"
                                :display "table-cell"
                                :vertical-align "middle"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition :box-sizing}})

(def button-disabled
  {:color color/color-neutral-2
   :background color/color-neutral-3
   :background-color color/color-neutral-3
   :box-shadow box-shadow/box-shadow-small
   :transition (str "all " timing/duration-slow " ease-in-out")
   ::stylefy/mode {:hover {:background-position "left bottom"
                           :background-size "200% auto"}
                   :active {:background-position "right center"
                            :outline "none"
                            :box-shadow box-shadow/box-shadow-small
                            :transform "translate(1px, 1px) rotate(-1deg)"}
                   :focus {:outline "none"}}})

(def button-icon
  {:font-size font-size/font-size-xx-large
   :display "table-cell"
   :vertical-align "middle"})

(def small
  {:height (measures/rem-times spacing/space-small-rem 2)
   :padding "0 0.25rem"
   :display "inline-table"
   :line-height font-size/font-size-x-large
   ::stylefy/sub-styles {:i {:font-size font-size/font-size-x-large
                             :display "table-cell"
                             :vertical-align "middle"}
                         :span {:padding (str "0 " spacing/space-x-small-rem)
                                :display "table-cell"
                                :vertical-align "middle"}}})

(def primary
  {:background (str "linear-gradient(-45deg," color/color-primary-dark "0%," color/color-primary " 100%)")
   :background-color color/color-primary
   :color color/color-white})

(def secondary
  {:background (str "linear-gradient(-45deg," color/color-neutral-5 "0%," color/color-neutral-4 " 100%)")
   :background-color color/color-primary
   :color color/color-white})

(def outline
  {:color color/color-primary
   :background color/color-white
   :border (str border/border-default " solid")
   :border-color color/color-primary
   :background-color color/color-white
   :padding (str font-size/font-size-large " calc(" font-size/font-size-x-large " - " border/border-default ")")
   ::stylefy/mode {:hover {:border-color color/color-primary-dark}
                   :active {:background-color color/color-primary
                            :color color/color-white
                            :outline "none"
                            :box-shadow box-shadow/box-shadow-small}
                   :focus {:outline "none"}}})
(def outline-small
  (merge small outline {:padding (str "0 calc(0.25rem - " border/border-default ")")}))

(def upper
  {:position "relative"
   ::stylefy/mode {:hover {:background color/color-neutral-1}
                   :active {:background color/color-neutral-2
                            :transform "translateY(1px) scale(0.95, 0.95)"
                            :box-shadow box-shadow/box-shadow-small}
                   :focus {:outline "none"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def lower
  {:position "relative"
   ::stylefy/mode {:hover {:background color/color-neutral-1}
                   :active {:background color/color-neutral-2
                            :transform "scale(0.95, 0.95)"
                            :box-shadow box-shadow/box-shadow-small}
                   :focus {:outline "none"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def icon-link
  {:margin 0
   :white-space "nowrap"
   :color color/color-primary
   :user-select "none"
   :cursor "pointer"
   :padding "0.5rem 1rem 0.5rem 0"
   :display "inline-block"
   :transition (str "all " timing/duration-slow " ease-in-out")
   ::stylefy/mode {:hover {:color color/color-primary-dark}
                   :active {:color color/color-primary-lightest}}
   ::stylefy/auto-prefix #{:transition :color}})

(def icon-link-active
  (merge icon-link {:color color/color-neutral-5}))

(def icon-link-icon
  {:color "inherit"
   :position "relative"
   :top "6px"
   :font-size font-size/font-size-xx-large
   :white-space "nowrap"})

(def icon-link-value
  {:color "inherit"
   :padding-left "6px"
   :white-space "nowrap"})
