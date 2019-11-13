export default function addNamespace(namespace = '') {
  return function withNamespace(fieldName) {
    return namespace ? `${namespace}.${fieldName}` : fieldName
  }
}
