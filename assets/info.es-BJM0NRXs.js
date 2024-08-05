import{C as v}from"./codemirror.es-Bh644rv_.js";import{g as D,a as E,b as N,c as T,d as g,e as s}from"./SchemaReference.es-D2kftfix.js";import"./info-addon.es-DNViqGlO.js";import{d as u,e as f}from"./index-qM9G7d4u.js";import"./codemirror.es2-CXusOVRv.js";import"./forEachState.es-C8esYVuF.js";v.registerHelper("info","graphql",(a,n)=>{var d;if(!n.schema||!a.state)return;const{kind:e,step:r}=a.state,i=D(n.schema,a.state);if(e==="Field"&&r===0&&i.fieldDef||e==="AliasedField"&&r===2&&i.fieldDef||e==="ObjectField"&&r===0&&i.fieldDef){const c=document.createElement("div");c.className="CodeMirror-info-header",h(c,i,n);const t=document.createElement("div");return t.append(c),o(t,n,i.fieldDef),t}if(e==="Directive"&&r===1&&i.directiveDef){const c=document.createElement("div");c.className="CodeMirror-info-header",M(c,i,n);const t=document.createElement("div");return t.append(c),o(t,n,i.directiveDef),t}if(e==="Argument"&&r===0&&i.argDef){const c=document.createElement("div");c.className="CodeMirror-info-header",y(c,i,n);const t=document.createElement("div");return t.append(c),o(t,n,i.argDef),t}if(e==="EnumValue"&&(!((d=i.enumValue)===null||d===void 0)&&d.description)){const c=document.createElement("div");c.className="CodeMirror-info-header",x(c,i,n);const t=document.createElement("div");return t.append(c),o(t,n,i.enumValue),t}if(e==="NamedType"&&i.type&&i.type.description){const c=document.createElement("div");c.className="CodeMirror-info-header",m(c,i,n,i.type);const t=document.createElement("div");return t.append(c),o(t,n,i.type),t}});function h(a,n,d){C(a,n,d),p(a,n,d,n.type)}function C(a,n,d){var e;const r=((e=n.fieldDef)===null||e===void 0?void 0:e.name)||"";l(a,r,"field-name",d,E(n))}function M(a,n,d){var e;const r="@"+(((e=n.directiveDef)===null||e===void 0?void 0:e.name)||"");l(a,r,"directive-name",d,N(n))}function y(a,n,d){var e;const r=((e=n.argDef)===null||e===void 0?void 0:e.name)||"";l(a,r,"arg-name",d,T(n)),p(a,n,d,n.inputType)}function x(a,n,d){var e;const r=((e=n.enumValue)===null||e===void 0?void 0:e.name)||"";m(a,n,d,n.inputType),l(a,"."),l(a,r,"enum-value",d,g(n))}function p(a,n,d,e){const r=document.createElement("span");r.className="type-name-pill",e instanceof u?(m(r,n,d,e.ofType),l(r,"!")):e instanceof f?(l(r,"["),m(r,n,d,e.ofType),l(r,"]")):l(r,(e==null?void 0:e.name)||"","type-name",d,s(n,e)),a.append(r)}function m(a,n,d,e){e instanceof u?(m(a,n,d,e.ofType),l(a,"!")):e instanceof f?(l(a,"["),m(a,n,d,e.ofType),l(a,"]")):l(a,(e==null?void 0:e.name)||"","type-name",d,s(n,e))}function o(a,n,d){const{description:e}=d;if(e){const r=document.createElement("div");r.className="info-description",n.renderDescription?r.innerHTML=n.renderDescription(e):r.append(document.createTextNode(e)),a.append(r)}F(a,n,d)}function F(a,n,d){const e=d.deprecationReason;if(e){const r=document.createElement("div");r.className="info-deprecation",a.append(r);const i=document.createElement("span");i.className="info-deprecation-label",i.append(document.createTextNode("Deprecated")),r.append(i);const c=document.createElement("div");c.className="info-deprecation-reason",n.renderDescription?c.innerHTML=n.renderDescription(e):c.append(document.createTextNode(e)),r.append(c)}}function l(a,n,d="",e={onClick:null},r=null){if(d){const{onClick:i}=e;let c;i?(c=document.createElement("a"),c.href="javascript:void 0",c.addEventListener("click",t=>{t.preventDefault(),i(r,t)})):c=document.createElement("span"),c.className=d,c.append(document.createTextNode(n)),a.append(c)}else a.append(document.createTextNode(n))}
