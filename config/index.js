module.exports = {
  fieldAdd:{
    parent:"",
    name: "undefined",
    data:"{}"
  },
  fieldCopy:{
    from:"",
    to:"",
  },
  fieldRemove:{
    path:""
  },
  fieldRename:{
    path:"",
    name:""
  },
  fieldSetContent:{
    path:'',
    data:"{}",
  },
  groupToSibling:{
    from: "",
    fromFeild: "",
    operation: "+",
    conditionPath: "",
    conditionValue: "",
    conditionRule: "eq",
    targetPath: "",
    targetObject: "",
  },
  groupBy:{
    from:"",
    groupBy:"",
    feilds:"",
    to:""
  },
  groupBySum:{
    from:"",
    groupBy:"",
    field:"",
    to:"",
    toResultField:"",
    toGroupByField:"",
  },
  flatten:{
    from:"",
    to:""
  },
  groupByFeild:{
    from:"",
    groupBy:"",
    field:"",
    to:"",
    groupByKey:""
  },
  CustomFunction:{
    script:""
  },
  lookup:{
    from:"",
    to:"",
    lookupFields:"",
    returningFields:""
  }
}