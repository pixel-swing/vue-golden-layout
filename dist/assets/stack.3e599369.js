import{_ as o}from"./index.6d8cd6b4.js";import{d as e,r as n,i as t,o as p,c as s}from"./vendor.73f8751f.js";const m={Example:e({render:()=>h("span","It works!")})},a={components:{GoldenLayout:o},data:()=>({option:{settings:{hasHeaders:!0},dimensions:{borderWidth:4},root:{type:"stack",content:[{type:"component",componentType:"Example"},{type:"component",componentType:"Example"},{type:"component",componentType:"Example"}]}}}),setup:()=>({componentTypes:n(m)})};a.render=function(o,e,n,m,a,c){const r=t("golden-layout");return p(),s(r,{componentTypes:m.componentTypes,option:o.option},null,8,["componentTypes","option"])};export default a;