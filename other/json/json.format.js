/**
 * 格式化json
 * @param {string} str 要格式化json内容
 */
const JSONFormat = function (str) {
  let json = JSON.parse(str)
  return _doFormat(json, 1)
}

/**
 * 格式化JSON对象
 * @param {object} object 对象
 * @param {number} indentCount 深度
 */
function _doFormat (object, indentCount) {
  if (object === null) {
    return '<span class="json-null">null</span>'
  }

  const type = typeof object
  if (type === 'boolean') {
    return `<span class="json-boolean">${object}</span>`
  }

  if (type === 'number') {
    return `<span class="json-number">${object}</span>`
  }

  if (type === 'string') {
    if (object.search(/^http/) >= 0) {
      return `<span class="json-link"><a href="${object}" target="_blank">${object}</a></span>`
    } else {
      return `<span class="json-string">"${object}"</span>`
    }
  }

  if (type === 'object') {
    if (Array.isArray(object)) {
      let items = []
      for (let i = 0; i < object.length; i++) {
        items.push(indentTab(indentCount) + _doFormat(object[i], indentCount + 1))
      }
      let hide = '<i class="far fa-minus-square" onclick="hideObject(this)"></i>'
      return `<span data-type="array" data-size="${object.length}">${hide}[<br/>${items.join(',<br/>')}<br/>${indentTab(indentCount - 1)}]</span>`
    } else {
      let items = []
      for (let key in object) {
        let str = `${indentTab(indentCount)}<span class="json-key">"${key}"</span>: ${_doFormat(object[key], indentCount + 1)}`
        items.push(str)
      }
      let hide = '<i class="far fa-minus-square" onclick="hideObject(this)"></i>'
      return `<span data-type="object">${hide}{<br/>${items.join(',<br/>')}<br/>${indentTab(indentCount - 1)}}</span>`
    }
  }
}

/**
 * 插入空格
 * @param {number} indentCount 插入空格的个数
 */
function indentTab (indentCount) {
  return (new Array(indentCount + 1)).join('&nbsp;&nbsp;&nbsp;&nbsp;')
}

/**
 * 隐藏当前对象
 * @param {object} obj 当前对象
 */
function hideObject (obj) {
  var dataType = obj.parentNode.getAttribute('data-type')
  var dataSize = obj.parentNode.getAttribute('data-size')
  obj.parentNode.setAttribute('data-inner', obj.parentNode.innerHTML)
  if (dataType === 'array') {
    obj.parentNode.innerHTML = '<i style="cursor:pointer;" class="far fa-plus-square" onclick="showObject(this)"> Array[<span class="json-number">' + dataSize + '</span>]</i>'
  } else {
    obj.parentNode.innerHTML = '<i style="cursor:pointer;" class="far fa-plus-square" onclick="showObject(this)"> Object{...}</i>'
  }
}

/**
 * 显示当前对象
 * @param {object} obj 当前对象
 */
function showObject (obj) {
  var innerHtml = obj.parentNode.getAttribute('data-inner')
  obj.parentNode.innerHTML = innerHtml
}
