const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map();
const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',style:{},classList:{remove(){},toggle(){}}});return elements.get(id)};
const storage=()=>{const data=new Map();return{getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)}};
const context={document:{getElementById:element,querySelectorAll:()=>[]},location:{hash:''},localStorage:storage(),sessionStorage:storage(),window:{addEventListener(){},scrollTo(){}},Intl,Date,crypto:require('node:crypto').webcrypto,setTimeout,Blob,URL};
vm.createContext(context);vm.runInContext(fs.readFileSync('dist/app.js','utf8'),context);
assert.match(element('main').innerHTML,/Vận hành có chuẩn/);
for(const route of ['library','module/0','module/1','module/2','sop/ORG-001','sop/HR-001','sop/HR-002','sop/HR-003','sop/HR-004','sop/HR-005','sop/DOC-001','sop/KIT-003','training','checklists','documents']){context.location.hash='#'+route;vm.runInContext('render()',context);assert.ok(element('main').innerHTML.length>100,route)}
assert.equal(vm.runInContext('sops.length',context),33);assert.equal(vm.runInContext('sops.filter(s=>s.ready).length',context),7);
assert.equal(vm.runInContext('checklistItems.length',context),14);
assert.equal(vm.runInContext("write('verification',{ok:true});read('verification',{}).ok",context),true);
console.log('PASS: 15 route renders, 33 index entries, 7 draft SOPs, 14 training items, local persistence. Browser layout unverified.');
