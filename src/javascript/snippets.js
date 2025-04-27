function isPrimitiveTypeOrFunction(value) {
  return (
    typeof value !== "object" || typeof value === "function" || value === null
  );
}

function getType(value) {
  const type = typeof value;
  if (type !== "object") {
    return type;
  }

  return Object.prototype.toString
    .call(value)
    .replace(/^\[object (\S+)\]$/, "$1")
    .toLowerCase();
}

// Check if a value is a primitive

function isPrimitive(value) {
  return typeof value !== 'object' || value == null
}
