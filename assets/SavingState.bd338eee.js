import{_ as o}from"./index.6d8cd6b4.js";import{d as e,r as n,i as t,o as p,c as a}from"./vendor.73f8751f.js";const m={Example:e({render:()=>h("span","It works!")})},c={components:{GoldenLayout:o},data:()=>({option:{settings:{hasHeaders:!0},root:{type:"row",content:[{type:"component",componentType:"Example",componentState:{label:"A"}},{type:"column",content:[{type:"component",componentType:"Example",componentState:{label:"B"}},{type:"component",componentType:"Example",componentState:{label:"C"}}]}]}}}),setup:()=>({componentTypes:n(m)})};c.render=function(o,e,n,m,c,s){const l=t("golden-layout");return p(),a(l,{componentTypes:m.componentTypes,option:o.option},null,8,["componentTypes","option"])};export default c;