module.exports = {
  "--Fields Actions---": "",
  fieldAdd: {
    parent: "",
    name: "undefined",
    data: "{}",
    conditionField: "",
    conditionValue: "",
    conditionRelative: "",
    descriptions: {
      overall: "Adds a feild based of path and data given",
      parent: "string : Path of parent Feild to add key",
      name:
        "string  : The key of adding item if the parent is an array it will be ommited",
      data:
        "* : Data to be inserted as item value if it's json-string it will be parsed ",
      conditionField: "string : address of condition fields",
      conditionValue: "string | [string] : addresses of condition value ",
      conditionRelative:
        " empty/not empty : defines if condition values are relative to conditionField or not"
    }
  },
  fieldCopy: {
    from: "",
    to: "",
    relative: "",
    conditionFeild: "",
    conditionValue: "",
    conditionRelative: "",
    descriptions: {
      overall: "Copy items value from one path to multiple paths",
      from: "string : The path of origin",
      to: "string : The path of destination",
      relative: "empty/not empty : relativity of copy",
      conditionFeild:
        "string : The path of feild to check the fromConditionValue with",
      conditionValue:
        "string | [string] : The paths of values to check the fromConditionFeild value with",
      conditionRelative:
        "empty/not empty : defines if condition values are relative to conditionField or not"
    }
  },
  fieldRemove: {
    path: "",
    conditionField: "",
    conditionValue: "",
    conditionRelative: "",
    descriptions: {
      overall: "Removes multiple feilds based on given paths",
      path: "string | [string] > Paths of items to be removed",
      conditionField:
        "string : The path of feild to check the fromConditionValue with",
      conditionValue:
        "string | [string] : The paths of values to check the fromConditionFeild value with",
      conditionRelative:
        "empty/not empty : defines if condition values are relative to conditionField or not"
    }
  },
  fieldRename: {
    path: "",
    name: "",
    conditionFeild: "",
    conditionValuePath: "",
    conditionRelative: "",
    descriptions: {
      overall: "Change the key at given paths",
      path: "string | [string] : Paths of items to be renamed",
      name: "string : New key name",
      conditionFeild:
        "string : The path of feild to check the fromConditionValue with",
      conditionValue:
        "string | [string] : The paths of values to check the fromConditionFeild value with",
      conditionRelative:
        "empty/not empty : defines if condition values are relative to conditionField or not"
    }
  },
  fieldSetContent: {
    path: "",
    data: "{}",
    conditionFeild: "",
    conditionValuePath: "",
    conditionRelative: "",
    descriptions: {
      overall: "Setting values in pathes",
      path: "string | [string] : The pathes to be changed",
      data: "* : Data to be set in path",
      conditionFeild:
        "string : The path of feild to check the fromConditionValue with",
      conditionValue:
        "string | [string] : The paths of values to check the fromConditionFeild value with",
      conditionRelative:
        "empty/not empty : defines if condition values are relative to conditionField or not"
    }
  },
  "--Data Manuplation---": "",
  groupBy: {
    from: "",
    groupBy: "",
    field: "",
    operation: "",
    to: "",
    toGroupByField: "",
    toResultField: "",
    conditionField: "",
    conditionValue: "",
    conditionRelative: "",
    descriptions: {
      overall:
        "Group array of items base on condition and returns operations defined",
      from:
        "string : path of arrays to pivot grouping data from (can't has more nested array then groupby)",
      groupBy: "string : (Relative to from) Path of grouping by field",
      field: "string : (Relative to from) Path of fields to operate on",
      operation: "string : can contain 'sum' and or 'count' and or 'array'",
      to: "string : Path of output object/array",
      toGroupByField: "string: (Optional) name of returning groupby field",
      toResultField: "string: (Optional) name of returning result field",
      conditionField:
        "string : (Optional) (Relative to from) Path of condition field",
      conditionValue:
        "string | [string] : (Optional) (Absolute Path)Path of condition field to match conditionField with",
      conditionRelative:
        "empty/not empty : (optional) if condition values relative to groupby feild"
    }
  },
  sortBy: {
    from: "",
    to: "",
    sortBy: "",
    sortArray: "",
    sortArrayRelativity: "",
    descriptions: {
      overall: "Sort array of items base on sortArray and copy to to location",
      from: "string : location of arrays to be sorted",
      to: "string? : (optional) location of output array",
      sortBy: "string : locations of sortingby field",
      sortArray: "string|[string] : location of arrays of sorted values",
      sortArrayRelativity:
        " empty/notempty : if the sortArray location is relative to from field"
    }
  },
  flatten: {
    from: "",
    to: "",
    relative: "",
    descriptions: {
      overall: "Flatten arrays in one level",
      from: "string | [string] : paths of Arrays to Flatten",
      to: "string : Path of target Array",
      relative: "string : whether the to is relative to from or not"
    }
  },
  lookup: {
    from: "",
    to: "",
    lookupFields: "",
    returningFields: "",
    relativeLookup: "",
    conditionField: "",
    conditionValue: "",
    conditionRelative: "",
    descriptions: {
      overall:
        "Lookups value form feilds and search for math then returns result",
      from: "string | [string] : Absolute paths of values to be looked up",
      to: "string | [string] : Absolute paths of returning value",
      lookupFields: "string | [string] : feilds that contain looking up values",
      returningFields: "string : returning path after lookup is done",
      relativeLookup:
        " empty/not empty if the lookupFields are relative to from ",
      conditionField:
        "string : (Optional) (Relative to from) Path of condition field",
      conditionValue:
        "string | [string] : (Optional) (Absolute Path)Path of condition field to match conditionField with",
      conditionRelative:
        "empty/not empty : (optional) if condition values relative to groupby feild"
    }
  },
 
  toArray: {
    from: "",
    to: "",
    flatten: "",
    conditionFields: "",
    conditionValues: "",
    conditionRelative: "",
    descriptions: {
      overall: "Sums numbers or array of numbers and adds them to output",
      from: "string | [string] : Absolute paths of values to be pushed",
      to: "string | [string] : Absolute paths of output field",
      flatten: "string : empty/notempty if the from array get flatten or not",
      conditionField:
        "string | [string] : (Optional) (Relative to from) Path of condition field",
      conditionValue:
        "string | [string] : (Optional) Path of condition values to match conditionField with",
      conditionRelative:
        "empty/not empty : (optional) if condition values relative to (positive/negetive) fields"
    }
  },
  arrayToObject: {
    keys: "",
    keyconcating:"",
    values: "",
    valueconcating:"",
    to: "",    
    defaultValue:"",
    conditionFields: "",
    conditionFunction:"",
    conditionFaliureValue:"",
    descriptions: {
      overall: "creates object from given paths",
      keys: "string : paths of keys to be created",
      keyconcating:"string|[string] : (Optional) relative paths of values to concate to create key",
      values: "string : paths of values (relative to key path)",
      valueconcating:"string|[string] : (Optional) relative paths of values to concate to create value",
      defaultValue: "string : (Optional) (Relative to from) Path of default value",
      to: "string : location of output object",
      conditionField:
        "string|[string] : (Optional) paths of condition field relative to key",
        conditionFunction:
        "string : (Optional) operation to be done to key value  ",
        conditionFaliureValue: "string : (Optional) (Relative to from) Path of condition failiure value"
      }
  },
  objLookup: {
    from: "",
    to: "",
    refrences: "",
    relativeRefrence: "",
    defaultValue:"",
    conditionField: "",
    conditionFunction: "",
    conditionFaliureValue:"",
    descriptions: {
      overall:
        "Lookups value form object by keys and returns the value",
      from: "string  : Absolute paths of values to be looked up",
      to: "string :  paths of destination ( relative to from)",
      refrences: "string | [string] : paths of refrence objects",
      relativeRefrence:
        " empty/not empty if the refrence paths are relative to from ",
        defaultValue: "string : (Optional) (Relative to from) Path of default value",
      conditionField:
        "string : (Optional) (Relative to from) Path of condition field",
      conditionFunction:
        "string : (Optional) function to be done on condition field input(conditionvalue,refrences,originpath,originvalue)",
        conditionFaliureValue: "string : (Optional) (Relative to from) Path of condition failiure value"
    }
  },
  "--Math Functionalities": "",
  sum: {
    positives: "",
    negetives: "",
    to: "",
    conditionFields: "",
    conditionValues: "",
    conditionRelative: "",
    descriptions: {
      overall: "Sums numbers or array of numbers and adds them to output",
      positives: "string | [string] : Absolute paths of values to be Added",
      negetives:
        "string | [string] : Absolute paths of values to be subtracked",
      to: "string | [string] : Absolute paths of returning value",
      conditionField:
        "string | [string] : (Optional) (Relative to positive and negetive) Path of condition field",
      conditionValue:
        "string | [string] : (Optional) Path of condition values to match conditionField with",
      conditionRelative:
        "empty/not empty : (optional) if condition values relative to (positive/negetive) fields"
    }
  },
  multiply: {
    multiplier: "",
    divider: "",
    to: "",
    conditionFields: "",
    conditionValues: "",
    conditionRelative: "",
    descriptions: {
      overall: "Sums numbers or array of numbers and adds them to output",
      multiplier:
        "string | [string] : Absolute paths of values to be multiplied",
      divider:
        "string | [string] : Absolute paths of values to be divided (under the line)",
      to: "string | [string] : Absolute paths of returning value",
      conditionField:
        "string | [string] : (Optional) (Relative to positive and negetive) Path of condition field",
      conditionValue:
        "string | [string] : (Optional) Path of condition values to match conditionField with",
      conditionRelative:
        "empty/not empty : (optional) if condition values relative to (positive/negetive) fields"
    }
  },
  "--Date Format": "",
  dateFormat: {
    from: "",
    to: "",
    locale: "",
    calenderType: "",
    format: "",
    conditionFields: "",
    conditionValues: "",
    conditionRelative: "",
    descriptions: {
      overall: "converts dates format to specifide format and locale",
      from: "string | [string] : Absolute paths of values to be formated",
      to: "string | [string] : Absolute paths of output field",
      locale: "string : fa/en text of date in persian or english",
      calenderType:
        "string : persian/gregorian formate of the date in gerigorian or galali",
      format: "string : format of the date based on persian-date formats",
      conditionField:
        "string | [string] : (Optional) (Relative to from) Path of condition field",
      conditionValue:
        "string | [string] : (Optional) Path of condition values to match conditionField with",
      conditionRelative:
        "empty/not empty : (optional) if condition values relative to (positive/negetive) fields"
    }
  },
  "--Outside Transactions---": "",
  getDataHTTP: {
    to: "",
    url: "",
    method: "",
    body: "",
    queryParams: "",
    headers: "",
    redirect: "",
    referrer: "",
    descriptions: {
      overall: "get the data from api and outputs to direction",
      to: "string : Path to output",
      url: "string : Path to url",
      method:
        "string : (Optional) Path to fetch method default to get(get,post,patch,put,head)",
      body: "string :(Optional) Path to body json",
      queryParams: "string : (Optional) Path to query params object",
      headers: "string : (Optional) Path to header object",
      redirect:
        "string : (Optional) Path to redirect option [manual, *follow, error]",
      referrer:
        "string : (Optional) Path to referrer option [no-referrer, *client]"
    }
  },
  "--Meta Functionality---": "",
  CustomFunction: {
    script: "",
    descriptions: {
      overall:
        "Runns Custom script in javaScript it has access to all datas and lodash functionalities",
      script: "string : js script to be runned"
    }
  }
};
